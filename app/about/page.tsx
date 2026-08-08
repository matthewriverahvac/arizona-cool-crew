import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, HeartHandshake, ShieldCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata("About Cool Fox", "Learn about Cool Fox Heating & Cooling, a family owned Arizona HVAC company serving the Valley and Northern Arizona.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Cool Fox" title="Local service with honest recommendations" text="Cool Fox is a family owned heating and cooling company built around careful work, clear communication, and respect for your property." />
      <section className="section shell"><div className="split-section"><div><SectionHeading eyebrow="Our Approach" title="Comfort decisions should make sense" text="You deserve to understand what failed, what can be repaired, and when replacement is worth considering. Cool Fox explains the options and lets you decide without pressure." /><Link className="button button-gold" href="/contact">Schedule Service</Link></div><div className="content-card"><p className="eyebrow">Arizona License</p><h2>{siteConfig.legalName}</h2><p>Arizona contractor ROC {siteConfig.rocNumber}</p><p>Licensed and insured for residential and commercial heating and cooling service.</p></div></div></section>
      <section className="section section-contrast"><div className="shell"><SectionHeading eyebrow="What Guides Us" title="The standards behind every visit" /><div className="service-grid"><article className="service-card"><div className="service-icon"><HeartHandshake /></div><h3>Listen First</h3><p>We start with your comfort concerns, property needs, and priorities.</p></article><article className="service-card"><div className="service-icon"><Wrench /></div><h3>Diagnose Carefully</h3><p>Recommendations should be supported by a complete system inspection.</p></article><article className="service-card"><div className="service-icon"><BadgeCheck /></div><h3>Explain Clearly</h3><p>You receive direct answers and pricing before approved work begins.</p></article><article className="service-card"><div className="service-icon"><ShieldCheck /></div><h3>Respect the Property</h3><p>We protect the work area, verify operation, and clean up before leaving.</p></article></div></div></section>
    </>
  );
}
