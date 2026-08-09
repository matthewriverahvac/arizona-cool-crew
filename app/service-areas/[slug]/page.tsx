import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { BeforeAfterFeature } from "@/components/BeforeAfterFeature";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getLocation, locations } from "@/lib/locations";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export function generateStaticParams() { return locations.map((location) => ({ slug: location.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return pageMetadata(`HVAC Service in ${location.city}, Arizona`, location.introduction, `/service-areas/${location.slug}`);
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  return (
    <>
      <PageHero eyebrow={location.region} title={`HVAC service in ${location.city}, Arizona`} text={location.introduction} />
      <section className="section shell"><div className="fact-band"><div><span>Coverage</span><p>{location.coverageNotes}</p></div><div><span>Local Comfort Concern</span><p>{location.localConcern}</p></div><div><span>Nearby Areas</span><p>{location.nearbyAreas.join(", ")}</p></div></div></section>
      <section className="section section-contrast"><div className="shell"><SectionHeading eyebrow="Services in Your Area" title={`Heating and cooling help for ${location.city}`} text="Schedule repairs, planned maintenance, replacement guidance, indoor air quality work, and emergency service." /><div className="service-grid">{services.slice(0, 4).map((service) => <ServiceCard service={service} key={service.slug} />)}</div><div className="center-action"><Link className="button button-outline" href="/services">View All Services</Link></div></div></section>
      <section className="section shell"><div className="split-section service-proof"><div><SectionHeading eyebrow="Project Proof" title="See the quality behind the service" text="This completed Cool Fox rooftop installation provides a close look at the finished work while local project photos for this area are organized." /><Link className="button button-gold" href={`/contact?city=${location.slug}`}>Schedule in {location.city}</Link></div><BeforeAfterFeature compact /></div></section>
      <section className="section area-section"><div className="shell"><SectionHeading eyebrow="Nearby Coverage" title="Explore surrounding service areas" /><div className="location-chips">{location.nearbyAreas.map((city) => { const nearby = locations.find((item) => item.city === city); return nearby ? <Link href={`/service-areas/${nearby.slug}`} key={nearby.slug}>{nearby.city}</Link> : null; })}</div></div></section>
      <section className="section shell faq-preview"><SectionHeading eyebrow="Local FAQs" title={`HVAC questions from ${location.city}`} /><FaqList faqs={location.faqs} /></section>
    </>
  );
}
