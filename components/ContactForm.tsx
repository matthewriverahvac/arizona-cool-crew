"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { requestOptions } from "@/lib/pricing";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type FieldErrors = Record<string, string[]>;

export function ContactForm({ initialService = "", initialOption = "" }: { initialService?: string; initialOption?: string }) {
  const [startedAt, setStartedAt] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    setFieldErrors({});
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      option: data.get("option"),
      propertyType: data.get("propertyType"),
      cityZip: data.get("cityZip"),
      message: data.get("message"),
      website: data.get("website"),
      startedAt,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        setStatus("success");
        setMessage("Your request was sent to the Cool Fox service team. A confirmation is on its way to your email.");
        form.reset();
        return;
      }
      if (result.code === "VALIDATION_ERROR") setFieldErrors(result.fieldErrors ?? {});
      setStatus("error");
      setMessage(result.code === "SPAM_REJECTED" ? "We could not accept that request. Please call us for help." : "We could not send your request. Please call us and we will help right away.");
    } catch {
      setStatus("error");
      setMessage("We could not send your request. Please call us and we will help right away.");
    }
  }

  const errorFor = (field: string) => fieldErrors[field]?.[0];

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <h2>Request received</h2>
        <p>{message}</p>
        <p>For urgent service, call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={submit} onFocusCapture={() => { if (!startedAt) setStartedAt(Date.now()); }} noValidate>
      <div className="form-heading">
        <p className="eyebrow">Request Service</p>
        <h2>Tell us how we can help</h2>
        <p>Share a few details. Cool Fox will receive your request and email you a confirmation.</p>
      </div>
      <div className="form-grid">
        <label><span className="field-label">Name <span aria-hidden="true">*</span></span><input name="name" autoComplete="name" required aria-describedby={errorFor("name") ? "name-error" : undefined} />{errorFor("name") && <small id="name-error">{errorFor("name")}</small>}</label>
        <label><span className="field-label">Phone <span aria-hidden="true">*</span></span><input name="phone" type="tel" autoComplete="tel" required aria-describedby={errorFor("phone") ? "phone-error" : undefined} />{errorFor("phone") && <small id="phone-error">{errorFor("phone")}</small>}</label>
        <label><span className="field-label">Email <span aria-hidden="true">*</span></span><input name="email" type="email" autoComplete="email" required aria-describedby={errorFor("email") ? "email-error" : undefined} />{errorFor("email") && <small id="email-error">{errorFor("email")}</small>}</label>
        <label><span className="field-label">Service <span aria-hidden="true">*</span></span>
          <select name="service" defaultValue={initialService} required aria-describedby={errorFor("service") ? "service-error" : undefined}>
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option value={service.slug} key={service.slug}>{service.shortTitle}</option>)}
          </select>
          {errorFor("service") && <small id="service-error">{errorFor("service")}</small>}
        </label>
        <label className="full-field"><span className="field-label">Plan or offer <span className="optional">Optional</span></span>
          <select name="option" defaultValue={initialOption} aria-describedby={errorFor("option") ? "option-error" : undefined}>
            <option value="">No specific plan or offer</option>
            {requestOptions.map((option) => <option value={option.slug} key={option.slug}>{option.label}</option>)}
          </select>
          {errorFor("option") && <small id="option-error">{errorFor("option")}</small>}
        </label>
        <fieldset>
          <legend>Property type <span aria-hidden="true">*</span></legend>
          <label className="radio"><input type="radio" name="propertyType" value="residential" defaultChecked /> Residential</label>
          <label className="radio"><input type="radio" name="propertyType" value="commercial" /> Commercial</label>
        </fieldset>
        <label><span className="field-label">City or ZIP code <span aria-hidden="true">*</span></span><input name="cityZip" autoComplete="postal-code" required aria-describedby={errorFor("cityZip") ? "city-error" : undefined} />{errorFor("cityZip") && <small id="city-error">{errorFor("cityZip")}</small>}</label>
        <label className="full-field"><span className="field-label">How can we help? <span aria-hidden="true">*</span></span><textarea name="message" rows={5} required maxLength={2000} aria-describedby={errorFor("message") ? "message-error" : undefined} />{errorFor("message") && <small id="message-error">{errorFor("message")}</small>}</label>
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className="form-consent">By submitting this form, you agree that Cool Fox may contact you about this service request. A confirmation will be sent to the email address above. See our <a href="/privacy">privacy policy</a>.</p>
      {message && <p className="form-message error" role="alert">{message}</p>}
      <button className="button button-gold form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" && <LoaderCircle className="spin" aria-hidden="true" />} {status === "sending" ? "Sending Request" : "Send Service Request"}
      </button>
    </form>
  );
}
