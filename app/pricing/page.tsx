import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Building2, CheckCircle2, ClipboardCheck, Home, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { pricingOptions, pricingRequestHref } from "@/lib/pricing";

export const metadata: Metadata = pageMetadata("HVAC Pricing and Maintenance Plans", "Compare Cool Fox maintenance plans, free second opinions, commercial inspections, and custom HVAC estimates in Arizona.", "/pricing");

function PricingCard({ option }: { option: (typeof pricingOptions)[number] }) {
  return (
    <article className={`pricing-card${option.featured ? " featured" : ""}`}>
      {option.featured && <span className="pricing-badge">Most Popular</span>}
      <p className="eyebrow">{option.subtitle}</p>
      <h3>{option.name}</h3>
      <p className="pricing-price">{option.price}</p>
      <p className="pricing-note">{option.priceNote}</p>
      <ul>{option.features.map((feature) => <li key={feature}><CheckCircle2 aria-hidden="true" />{feature}</li>)}</ul>
      {option.finePrint?.map((note) => <p className="pricing-fine-print" key={note}>{note}</p>)}
      <Link className="button button-gold" href={pricingRequestHref(option)}>Add to Service Request</Link>
    </article>
  );
}

export default function PricingPage() {
  const secondOpinion = pricingOptions.find((option) => option.category === "second-opinion");
  const maintenance = pricingOptions.filter((option) => option.category === "maintenance");
  const commercial = pricingOptions.filter((option) => option.category === "commercial");
  const consultations = pricingOptions.filter((option) => option.category === "consultation");

  return (
    <>
      <PageHero eyebrow="Pricing and Plans" title="Clear options before you schedule" text="Compare current Cool Fox maintenance plans, estimate reviews, inspections, and custom comfort consultations." primaryLabel="Contact Cool Fox" primaryHref="/contact" />

      {secondOpinion && (
        <section className="section shell">
          <div className="second-opinion-panel">
            <div className="second-opinion-icon"><ClipboardCheck aria-hidden="true" /></div>
            <div>
              <p className="eyebrow">Already Received an Estimate?</p>
              <h2>Get a free second opinion</h2>
              <p>Send Cool Fox a written estimate from a licensed HVAC contractor. We will review the scope, equipment, and pricing, then explain whether repair may still be a practical option.</p>
              <ul className="check-list">{secondOpinion.features.map((feature) => <li key={feature}><BadgeCheck aria-hidden="true" />{feature}</li>)}</ul>
              <Link className="button button-gold" href={pricingRequestHref(secondOpinion)}>Add Free Review to Request</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section section-contrast">
        <div className="shell">
          <SectionHeading eyebrow="Residential Maintenance" title="Choose your Fox plan" text="Each plan is billed annually. Select the level of service and priority benefits that best fits your home." />
          <div className="pricing-grid maintenance-pricing-grid">{maintenance.map((option) => <PricingCard option={option} key={option.slug} />)}</div>
          <p className="pricing-disclosure">Plans are transferable to new homeowners. Membership is required for benefits. Repairs and refrigerant beyond included amounts are billed separately.</p>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Commercial Properties" title="Inspection and property plan options" text="Prevent avoidable downtime with an inspection, or request a custom plan for a property with multiple units." />
        <div className="pricing-section-heading"><Building2 aria-hidden="true" /><p>Retail centers, restaurants, warehouses, offices, light industrial spaces, churches, and multi-tenant properties are among the commercial sites Cool Fox serves.</p></div>
        <div className="pricing-grid two-column-pricing">{commercial.map((option) => <PricingCard option={option} key={option.slug} />)}</div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <SectionHeading eyebrow="Custom Comfort Options" title="Start with an assessment and clear estimate" text="These services are priced after Cool Fox reviews the system, the space, and the work needed." />
          <div className="pricing-section-heading"><Sparkles aria-hidden="true" /><p>Duct cleaning, indoor air quality equipment, and mini splits are matched to the property instead of priced as one-size-fits-all packages.</p></div>
          <div className="pricing-grid consultation-pricing-grid">{consultations.map((option) => <PricingCard option={option} key={option.slug} />)}</div>
        </div>
      </section>

      <section className="final-cta"><div className="shell final-cta-inner"><div><p className="eyebrow">Need Help Choosing?</p><h2>Tell us what the property needs.</h2><p>Cool Fox can help you compare a maintenance plan, inspection, second opinion, or custom comfort project.</p></div><div className="button-row"><Link className="button button-gold" href="/contact"><Home aria-hidden="true" size={18} /> Contact Cool Fox</Link><Link className="button button-outline" href="/services">Explore Services</Link></div></div></section>
    </>
  );
}
