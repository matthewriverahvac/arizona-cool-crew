import { createHash, randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, quoteSchema } from "@/lib/quote";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const attempts = new Map<string, number[]>();
const recentSubmissions = new Map<string, number>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function rateLimited(key: string, now: number) {
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

function submissionKey(values: string[]) {
  return createHash("sha256").update(values.map((value) => value.trim().toLowerCase()).join("|")).digest("hex");
}

function failure(code: "VALIDATION_ERROR" | "SPAM_REJECTED" | "DELIVERY_FAILED", status: number, fieldErrors?: Record<string, string[] | undefined>) {
  return NextResponse.json({ ok: false, code, ...(fieldErrors ? { fieldErrors } : {}) }, { status });
}

export async function POST(request: NextRequest) {
  const now = Date.now();
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip, now)) return failure("SPAM_REJECTED", 429);

  let body: unknown;
  try { body = await request.json(); } catch { return failure("VALIDATION_ERROR", 400, { form: ["Request body must be valid JSON"] }); }
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) return failure("VALIDATION_ERROR", 400, parsed.error.flatten().fieldErrors);
  const lead = parsed.data;
  if (lead.website || now - lead.startedAt < 2500 || now - lead.startedAt > 24 * 60 * 60 * 1000) return failure("SPAM_REJECTED", 422);

  const apiKey = process.env.RESEND_API_KEY;
  const to = siteConfig.email;
  const from = process.env.LEAD_FROM_EMAIL || "Website Leads <quotes@notify.cool-fox.com>";
  const siteUrl = process.env.SITE_URL || siteConfig.baseUrl;
  if (!apiKey) {
    console.error("Quote delivery configuration missing", { timestamp: new Date().toISOString(), errorClass: "ConfigurationError" });
    return failure("DELIVERY_FAILED", 503);
  }

  const id = randomUUID();
  const duplicateKey = submissionKey([lead.name, lead.phone, lead.email, lead.service, lead.propertyType, lead.cityZip, lead.message]);
  const duplicateTime = recentSubmissions.get(duplicateKey);
  if (duplicateTime && now - duplicateTime < WINDOW_MS) return failure("SPAM_REJECTED", 409);
  recentSubmissions.set(duplicateKey, now);
  const fields = {
    Name: escapeHtml(lead.name),
    Phone: escapeHtml(lead.phone),
    Email: escapeHtml(lead.email || "Not supplied"),
    Service: escapeHtml(lead.service),
    Property: escapeHtml(lead.propertyType),
    Location: escapeHtml(lead.cityZip),
    Message: escapeHtml(lead.message).replace(/\n/g, "<br>"),
  };
  const text = `New Cool Fox service request\n\nSubmission: ${id}\nName: ${lead.name}\nPhone: ${lead.phone}\nEmail: ${lead.email || "Not supplied"}\nService: ${lead.service}\nProperty: ${lead.propertyType}\nCity or ZIP: ${lead.cityZip}\n\nMessage:\n${lead.message}`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;background:#0b0b0b;color:#f6f0e5;padding:32px;border-top:5px solid #d7a53a"><h1 style="font-family:Georgia,serif;color:#f0c568">New service request</h1><p style="color:#bdb5a7">Submission ${id}</p><table style="width:100%;border-collapse:collapse">${Object.entries(fields).map(([label, value]) => `<tr><th style="text-align:left;vertical-align:top;padding:10px;border-bottom:1px solid #393329;color:#f0c568">${label}</th><td style="padding:10px;border-bottom:1px solid #393329">${value}</td></tr>`).join("")}</table></div>`;

  try {
    const resend = new Resend(apiKey);
    const internal = await resend.emails.send({ from, to: [to], subject: `Website lead: ${lead.service} in ${lead.cityZip}`, html, text, ...(lead.email ? { replyTo: lead.email } : {}) });
    if (internal.error) throw new Error(`ProviderError:${internal.error.name}`);
    if (lead.email) {
      const acknowledgement = await resend.emails.send({ from, to: [lead.email], subject: "Cool Fox received your service request", html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;background:#0b0b0b;color:#f6f0e5;padding:32px;border-top:5px solid #d7a53a"><h1 style="font-family:Georgia,serif;color:#f0c568">We received your request.</h1><p>Thanks for contacting Cool Fox Heating & Cooling. Our service team will follow up about your request.</p><p>For urgent help, call <a style="color:#f0c568" href="tel:+16238891281">${siteConfig.phone}</a>.</p><p><a style="color:#f0c568" href="${siteUrl}/services">Explore Cool Fox services</a></p><p style="color:#bdb5a7">Reference ${id}</p></div>`, text: `We received your Cool Fox service request. Our service team will follow up. For urgent help, call ${siteConfig.phone}. Reference ${id}.` });
      if (acknowledgement.error) console.error("Quote acknowledgement failed", { id, timestamp: new Date().toISOString(), errorClass: acknowledgement.error.name });
    }
    console.info("Quote delivered", { id, providerResult: internal.data?.id ?? "accepted", timestamp: new Date().toISOString() });
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    recentSubmissions.delete(duplicateKey);
    console.error("Quote delivery failed", { id, timestamp: new Date().toISOString(), errorClass: error instanceof Error ? error.name : "UnknownError" });
    return failure("DELIVERY_FAILED", 502);
  }
}
