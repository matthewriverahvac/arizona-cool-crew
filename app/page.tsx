import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarClock, Phone, ShieldCheck, UsersRound } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { generalFaqs } from "@/lib/faq";
import { locations } from "@/lib/locations";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  return (
    <>
      <section className="home-hero">
        <Image className="hero-image" src="/images/cool-fox-hero.png" alt="Cool Fox HVAC technician servicing an outdoor air conditioner at an Arizona home" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow">Family owned in Arizona</p>
          <h1>Arizona Comfort.<br />Honest Service.</h1>
          <p className="hero-lead">Heating and cooling for the Valley and Northern Arizona, with clear options and dependable care.</p>
          <div className="button-row">
            <Link className="button button-gold" href="/contact"><CalendarClock aria-hidden="true" size={20} /> Schedule Service</Link>
            <a className="button button-dark" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={20} /> Call Now</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why customers choose Cool Fox">
        <div className="shell trust-grid">
          <div><ShieldCheck aria-hidden="true" /><p><strong>Licensed and Insured</strong><span>Your property is in capable hands.</span></p></div>
          <div><CalendarClock aria-hidden="true" /><p><strong>Same-Day Service</strong><span>Responsive help when you need it.</span></p></div>
          <div><UsersRound aria-hidden="true" /><p><strong>Family Owned</strong><span>Local service with real accountability.</span></p></div>
          <div><BadgeCheck aria-hidden="true" /><p><strong>ROC Licensed</strong><span>Arizona contractor ROC {siteConfig.rocNumber}.</span></p></div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Our Services" title="Comfort care for every season" text="From urgent repairs to planned upgrades, every visit starts with listening and a careful diagnosis." align="center" />
        <div className="service-grid">{services.slice(0, 4).map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
        <div className="center-action"><Link className="button button-outline" href="/services">View All Services</Link></div>
      </section>

      <section className="section section-contrast">
        <div className="shell split-section project-home-feature">
          <div>
            <SectionHeading eyebrow="Featured Project Story" title="See the care behind every step" text="Follow a real rooftop project from close inspection and component work through controls and the final review." />
            <ul className="check-list">
              <li><BadgeCheck aria-hidden="true" />Original customer project photography</li>
              <li><BadgeCheck aria-hidden="true" />The complete process organized as a story</li>
              <li><BadgeCheck aria-hidden="true" />Close details and final rooftop views</li>
            </ul>
            <Link className="button button-gold" href={featuredProject ? `/projects/${featuredProject.slug}` : "/projects"}>View Full Project Portfolio</Link>
          </div>
          {featuredProject && (
            <Link className="home-project-collage" href={`/projects/${featuredProject.slug}`} aria-label={`View ${featuredProject.title}`}>
              {featuredProject.gallery.slice(9, 13).map((image, index) => <Image className={index === 0 ? "collage-primary" : ""} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 900px) 50vw, 28vw" key={image.src} />)}
              <span>{featuredProject.gallery.length} project photos</span>
            </Link>
          )}
        </div>
      </section>

      <section className="section shell">
        <div className="split-section process-split">
          <div>
            <Image className="mission-badge" src="/images/cool-fox-badge.jpg" alt="Cool Fox mission badge: your comfort, our mission, integrity built, expertly crafted" width={500} height={500} />
            <SectionHeading eyebrow="The Cool Fox Way" title="Clear from the first call to the final check" text="Good service should feel simple. We keep you informed and ask for approval before work begins." />
            <Link className="button button-gold" href="/about">Meet Cool Fox</Link>
          </div>
          <ol className="numbered-list">
            <li><span>01</span><div><h3>Tell us what you need</h3><p>Call or send a request with your equipment symptoms and location.</p></div></li>
            <li><span>02</span><div><h3>Get a careful diagnosis</h3><p>We inspect the system and explain the cause in plain language.</p></div></li>
            <li><span>03</span><div><h3>Choose your solution</h3><p>You review clear options and pricing before approved work begins.</p></div></li>
            <li><span>04</span><div><h3>Feel the difference</h3><p>We complete the work, verify performance, and leave the area clean.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section area-section">
        <div className="shell">
          <SectionHeading eyebrow="Service Areas" title="Local HVAC help across Arizona" text="Cool Fox serves the Valley, the North Valley, and select Northern Arizona communities." align="center" />
          <div className="location-chips">{locations.map((location) => <Link href={`/service-areas/${location.slug}`} key={location.slug}>{location.city}</Link>)}</div>
        </div>
      </section>

      <section className="section shell faq-preview">
        <SectionHeading eyebrow="Common Questions" title="Helpful answers before your appointment" text="Start here, then call if you need advice about a specific system or urgent comfort problem." />
        <FaqList faqs={generalFaqs.slice(0, 6)} />
        <div className="center-action"><Link className="button button-outline" href="/faq">View All FAQs</Link></div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner"><div><p className="eyebrow">Ready When You Are</p><h2>Let&apos;s restore your comfort.</h2><p>Call now or send a service request. Cool Fox is available 24/7 for HVAC emergencies.</p></div><div className="button-row"><Link className="button button-gold" href="/contact">Schedule Service</Link><a className="button button-outline" href={siteConfig.phoneHref}>{siteConfig.phone}</a></div></div>
      </section>
    </>
  );
}
