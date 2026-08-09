import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/FaqList";
import { BeforeAfterFeature } from "@/components/BeforeAfterFeature";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { locations } from "@/lib/locations";
import { pageMetadata } from "@/lib/metadata";
import { getService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata(service.title, service.description, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.relatedServices.map(getService).filter((item) => item !== undefined);
  const offerHref = service.slug === "ac-installation"
    ? "/contact?service=ac-installation&option=free-second-opinion"
    : ["maintenance-plans", "commercial-hvac", "duct-cleaning", "indoor-air-quality", "mini-split-installation"].includes(service.slug)
      ? "/pricing"
      : undefined;
  const offerLabel = service.slug === "ac-installation" ? "Request a Free Second Opinion" : "Compare Options and Pricing";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.shortTitle,
        provider: { "@type": "HVACBusiness", name: siteConfig.legalName, url: siteConfig.baseUrl, telephone: "+16238891281" },
        areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero eyebrow="Cool Fox Service" title={service.title} text={service.description} service={service.slug} />
      <section className="section shell">
        <div className="content-grid">
          <article className="content-card"><h2>Problems we handle</h2><ul className="bullet-list">{service.symptoms.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="content-card"><h2>What is included</h2><ul className="bullet-list">{service.inclusions.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>
      <section className="section section-contrast"><div className="shell"><SectionHeading eyebrow="What to Expect" title="A clear four-step service process" text="You stay informed from scheduling through the final system check." /><div className="process-grid">{service.process.map((step) => <article className="process-card" key={step.title}><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
      {service.details && (
        <section className="section shell service-details-section">
          <div className="service-detail-grid">
            {service.details.map((detail) => (
              <article className="content-card service-detail-card" key={detail.title}>
                <p className="eyebrow">{detail.eyebrow}</p>
                <h2>{detail.title}</h2>
                <p>{detail.text}</p>
                <ul className="bullet-list">{detail.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          {offerHref && <div className="center-action"><Link className="button button-gold" href={offerHref}>{offerLabel}</Link></div>}
        </section>
      )}
      {service.gallery && (
        <section className="section section-contrast">
          <div className="shell">
            <SectionHeading eyebrow="Completed Work" title={service.gallery.title} text={service.gallery.text} />
            <div className="service-gallery">
              {service.gallery.images.map((image) => (
                <figure key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" /></figure>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section shell"><div className="split-section service-proof"><div><SectionHeading eyebrow="Project Proof" title="A finished result you can inspect" text="This completed rooftop installation shows Cool Fox workmanship up close. The illustrative before view is a temporary visual reference until the matching original photo is available." /><Link className="text-link" href="/projects">View the project catalog <span aria-hidden="true">→</span></Link></div><BeforeAfterFeature compact /></div></section>
      <section className="section area-section"><div className="shell"><SectionHeading eyebrow="Where We Work" title="Serving the Valley and Northern Arizona" text="Select your city for local coverage notes and service information." /><div className="location-chips">{locations.map((location) => <Link href={`/service-areas/${location.slug}`} key={location.slug}>{location.city}</Link>)}</div></div></section>
      <section className="section shell faq-preview"><SectionHeading eyebrow="Service FAQs" title={`Questions about ${service.shortTitle.toLowerCase()}`} /><FaqList faqs={service.faqs} /></section>
      <section className="section section-contrast"><div className="shell"><SectionHeading eyebrow="Related Services" title="More ways Cool Fox can help" /><div className="related-grid">{related.map((item) => <ServiceCard service={item} key={item.slug} />)}</div></div></section>
    </>
  );
}
