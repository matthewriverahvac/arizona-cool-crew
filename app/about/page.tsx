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
      <PageHero eyebrow="About Cool Fox" title="From our family to yours" text="Matthew and Taylor founded Cool Fox to build the kind of HVAC company they would want caring for their own home and family." />
      <section className="section shell about-story-section">
        <div className="about-story-layout">
          <article className="about-story-copy">
            <p className="eyebrow">Our Story</p>
            <h2>Relational, not transactional</h2>
            <p>Cool Fox Heating &amp; Cooling was founded by husband-and-wife team Matthew and Taylor with a simple goal: to build the kind of HVAC company we would want caring for our own home and family.</p>
            <p>We both grew up around the HVAC industry, and after years of working in the corporate side of the business, we saw a lot of things we felt could be done differently. Too often, sales seemed to come before service, technicians were rushed from one call to the next, and customers were treated more like transactions than people.</p>
            <p>We knew there was a better way to do things, and that is what led us to start Cool Fox.</p>
            <p>We wanted to build a company where doing the right thing for the customer always comes first. A company where you can call and actually talk to someone who cares, where recommendations are based on what you truly need, and where quality workmanship matters more than getting to the next job.</p>
            <blockquote>Our approach is simple: be honest, communicate well, do quality work, charge fairly, and treat people the way we would want our own family to be treated.</blockquote>
            <p>For us, being family owned is more than something we put on our trucks. We are personally involved in Cool Fox every day, and the reputation of this company means a lot to us. When you choose Cool Fox, you are supporting a local family, and in return, we want you to feel like you have an HVAC company you can genuinely trust and call whenever you need us.</p>
            <p>We are proud to serve families and businesses throughout the Valley and even more proud that so much of our growth has come from customers recommending us to their friends, family, and neighbors. Those relationships are exactly why we started Cool Fox in the first place.</p>
            <p>Whether you call us for a repair, preventative maintenance, indoor comfort concerns, or a complete system replacement, our goal is never to simply complete another service call. We want to earn your trust and become the HVAC company your family can count on for years to come.</p>
            <p>Thank you for supporting our family and allowing us the opportunity to take care of yours.</p>
            <p className="story-signature"><strong>Matthew &amp; Taylor Rivera</strong><span>Owners, Cool Fox Heating &amp; Cooling</span><em>From Our Family to Yours.</em></p>
          </article>
          <aside className="about-story-aside">
            <div className="content-card"><p className="eyebrow">Arizona License</p><h2>{siteConfig.legalName}</h2><p>Arizona contractor ROC {siteConfig.rocNumber}</p><p>Licensed and insured for residential and commercial heating and cooling service.</p></div>
            <div className="story-principle"><span>01</span><h3>Listen before recommending</h3><p>Your concerns, property, and comfort goals come first.</p></div>
            <div className="story-principle"><span>02</span><h3>Explain every option</h3><p>You receive clear answers before approved work begins.</p></div>
            <Link className="button button-gold" href="/contact">Contact Cool Fox</Link>
          </aside>
        </div>
      </section>
      <section className="section section-contrast"><div className="shell"><SectionHeading eyebrow="What Guides Us" title="The standards behind every visit" /><div className="service-grid"><article className="service-card"><div className="service-icon"><HeartHandshake /></div><h3>Listen First</h3><p>We start with your comfort concerns, property needs, and priorities.</p></article><article className="service-card"><div className="service-icon"><Wrench /></div><h3>Diagnose Carefully</h3><p>Recommendations should be supported by a complete system inspection.</p></article><article className="service-card"><div className="service-icon"><BadgeCheck /></div><h3>Explain Clearly</h3><p>You receive direct answers and pricing before approved work begins.</p></article><article className="service-card"><div className="service-icon"><ShieldCheck /></div><h3>Respect the Property</h3><p>We protect the work area, verify operation, and clean up before leaving.</p></article></div></div></section>
    </>
  );
}
