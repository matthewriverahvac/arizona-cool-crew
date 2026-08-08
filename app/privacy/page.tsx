import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Privacy Policy", "How Cool Fox Heating and Cooling handles service request information.", "/privacy");

export default function PrivacyPage() {
  return <><PageHero eyebrow="Legal" title="Privacy policy" text="How information submitted through this website is collected and used." /><section className="section shell legal-content"><p>Last updated August 8, 2026.</p><h2>Information we collect</h2><p>When you request service, we may collect your name, phone number, email address, property type, city or ZIP code, requested service, and message.</p><h2>How we use information</h2><p>We use submitted information to respond to service requests, schedule work, provide customer support, and maintain reasonable business records. We do not sell personal information submitted through the service form.</p><h2>Service providers</h2><p>Information may be processed by providers that support website hosting and transactional email delivery. Those providers receive only the access needed to perform their services.</p><h2>Retention and security</h2><p>We keep service information only as long as reasonably needed for business, legal, and customer support purposes. No online system can guarantee absolute security.</p><h2>Your choices</h2><p>You may request access, correction, or deletion of personal information, subject to applicable recordkeeping obligations.</p><h2>Contact</h2><p>Questions may be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or discussed by calling <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>.</p></section></>;
}
