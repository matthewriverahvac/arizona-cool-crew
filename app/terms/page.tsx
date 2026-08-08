import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Website Terms", "Terms for using the Cool Fox Heating and Cooling website.", "/terms");

export default function TermsPage() {
  return <><PageHero eyebrow="Legal" title="Website terms" text="Basic terms for using this website and its service request features." /><section className="section shell legal-content"><p>Last updated August 8, 2026.</p><h2>Website information</h2><p>This website provides general information about Cool Fox services. It does not replace an on-site diagnosis, written proposal, contract, equipment documentation, or safety instruction.</p><h2>Service requests</h2><p>Submitting a form does not guarantee an appointment, arrival time, price, or service availability. A Cool Fox representative must confirm scheduling and scope.</p><h2>Emergency situations</h2><p>For smoke, fire, gas odor, or immediate danger, leave the area and contact the appropriate emergency service. The website form is not monitored as an emergency dispatch channel.</p><h2>Pricing and offers</h2><p>Only written, current proposals supplied by Cool Fox establish the approved work and price. Promotions, warranties, financing, and maintenance terms apply only when expressly documented.</p><h2>Intellectual property</h2><p>Website copy, branding, graphics, and approved project photography may not be reproduced for commercial use without permission.</p><h2>Contact</h2><p>Questions may be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></section></>;
}
