import { createHash, randomUUID } from "node:crypto";
import { after, NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, quoteSchema } from "@/lib/quote";
import { getRequestOption } from "@/lib/pricing";
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

function emailShell(logoUrl: string, content: string) {
  return `<!doctype html><html><head><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"></head><body style="margin:0;padding:24px 10px;background-color:#e9e4dc;color:#2d2922"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#f7f5f0" style="width:100%;max-width:640px;margin:0 auto;background-color:#f7f5f0;border-top:5px solid #b88923;border-collapse:separate"><tr><td align="center" bgcolor="#000000" style="padding:24px;background-color:#000000"><img src="${logoUrl}" width="280" alt="Cool Fox Heating & Cooling" style="display:block;width:100%;max-width:280px;height:auto;margin:0 auto"></td></tr><tr><td bgcolor="#f7f5f0" style="padding:32px;background-color:#f7f5f0;color:#2d2922;font-family:Arial,sans-serif;line-height:1.55">${content}</td></tr></table></body></html>`;
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
  const configuredFrom = process.env.LEAD_FROM_EMAIL?.trim();
  const from = configuredFrom && !configuredFrom.includes("@notify.cool-fox.com")
    ? configuredFrom
    : "Website Leads <quotes@cool-fox.com>";
  const senderAddress = from.match(/<([^>]+)>/)?.[1] ?? from;
  const customerFrom = `Cool Fox Heating & Cooling <${senderAddress}>`;
  const siteUrl = process.env.SITE_URL || siteConfig.baseUrl;
  const emailLogoUrl = `${siteUrl}/images/cool-fox-logo-transparent.png`;
  if (!apiKey) {
    console.error("Quote delivery configuration missing", { timestamp: new Date().toISOString(), errorClass: "ConfigurationError" });
    return failure("DELIVERY_FAILED", 503);
  }

  const id = randomUUID();
  const selectedOption = getRequestOption(lead.option);
  const optionLabel = selectedOption?.label ?? "Not selected";
  const duplicateKey = submissionKey([lead.name, lead.phone, lead.email, lead.service, lead.option, lead.propertyType, lead.cityZip, lead.message]);
  const duplicateTime = recentSubmissions.get(duplicateKey);
  if (duplicateTime && now - duplicateTime < WINDOW_MS) return failure("SPAM_REJECTED", 409);
  recentSubmissions.set(duplicateKey, now);
  const fields = {
    Name: escapeHtml(lead.name),
    Phone: escapeHtml(lead.phone),
    Email: escapeHtml(lead.email),
    Service: escapeHtml(lead.service),
    "Plan or offer": escapeHtml(optionLabel),
    Property: escapeHtml(lead.propertyType),
    Location: escapeHtml(lead.cityZip),
    Message: escapeHtml(lead.message).replace(/\n/g, "<br>"),
  };
  const text = `New Cool Fox service request\n\nSubmission: ${id}\nName: ${lead.name}\nPhone: ${lead.phone}\nEmail: ${lead.email}\nService: ${lead.service}\nPlan or offer: ${optionLabel}\nProperty: ${lead.propertyType}\nCity or ZIP: ${lead.cityZip}\n\nMessage:\n${lead.message}`;
  const html = emailShell(emailLogoUrl, `<h1 style="margin:0 0 16px;font-family:Georgia,serif;color:#765700">New service request</h1><p style="color:#6d665b">Submission ${id}</p><table role="presentation" style="width:100%;border-collapse:collapse;color:#2d2922">${Object.entries(fields).map(([label, value]) => `<tr><th style="text-align:left;vertical-align:top;padding:10px;border-bottom:1px solid #d9d0c1;color:#765700">${label}</th><td style="padding:10px;border-bottom:1px solid #d9d0c1;color:#2d2922">${value}</td></tr>`).join("")}</table>`);

  try {
    const resend = new Resend(apiKey);
    const optionSummaryHtml = selectedOption ? `<p><strong>Plan or offer selected:</strong> ${escapeHtml(optionLabel)}</p>` : "";
    const optionSummaryText = selectedOption ? `\nPlan or offer selected: ${optionLabel}\n` : "";
    const acknowledgementHtml = emailShell(emailLogoUrl, `<h1 style="margin:0 0 18px;font-family:Georgia,serif;color:#765700">We received your request.</h1><p>Hi ${escapeHtml(lead.name)},</p><p>Thank you for contacting Cool Fox Heating & Cooling. Your request is now with our service team, and someone will follow up using the contact information you provided.</p>${optionSummaryHtml}<p>For urgent help, call <a style="color:#765700" href="tel:+16238891281">${siteConfig.phone}</a>.</p><p><a style="color:#765700" href="${siteUrl}/services">Explore Cool Fox services</a></p><p style="margin-top:28px;padding-top:18px;border-top:1px solid #d9d0c1;color:#6d665b;font-size:13px">This email confirms a service request submitted through <a style="color:#765700" href="${siteUrl}">cool-fox.com</a>. Read our <a style="color:#765700" href="${siteUrl}/privacy">privacy policy</a>.</p>`);
    const acknowledgementText = `Hi ${lead.name},\n\nThank you for contacting Cool Fox Heating & Cooling. Your request is now with our service team, and someone will follow up using the contact information you provided.\n${optionSummaryText}\nFor urgent help, call ${siteConfig.phone}.\n\nExplore Cool Fox services: ${siteUrl}/services\nPrivacy policy: ${siteUrl}/privacy`;
    const delivery = await resend.emails.send({ from, to: [to], replyTo: lead.email, subject: `Website lead: ${lead.service} in ${lead.cityZip}`, html, text });
    if (delivery.error) throw new Error(`ProviderError:${delivery.error.name}`);
    const providerResult = delivery.data?.id ?? "accepted";
    console.info("Quote delivered", { id, providerResult, timestamp: new Date().toISOString() });
    after(async () => {
      try {
        const acknowledgement = await resend.emails.send({ from: customerFrom, to: [lead.email], replyTo: to, subject: "Cool Fox received your service request", html: acknowledgementHtml, text: acknowledgementText });
        if (acknowledgement.error) throw new Error(`ProviderError:${acknowledgement.error.name}`);
        console.info("Quote acknowledgement delivered", { id, providerResult: acknowledgement.data?.id ?? "accepted", timestamp: new Date().toISOString() });
      } catch (error) {
        console.error("Quote acknowledgement failed", { id, timestamp: new Date().toISOString(), errorClass: error instanceof Error ? error.name : "UnknownError" });
      }
    });
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    recentSubmissions.delete(duplicateKey);
    console.error("Quote delivery failed", { id, timestamp: new Date().toISOString(), errorClass: error instanceof Error ? error.name : "UnknownError" });
    return failure("DELIVERY_FAILED", 502);
  }
}
