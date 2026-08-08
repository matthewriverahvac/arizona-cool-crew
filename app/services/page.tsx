import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMetadata("HVAC Services", "Residential and commercial heating, cooling, maintenance, installation, and indoor air quality service across Arizona.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Heating and Cooling" title="HVAC service built around clear answers" text="Repairs, installations, maintenance, air quality, and emergency support for Arizona homes and businesses." />
      <section className="section shell">
        <SectionHeading eyebrow="Complete Comfort Care" title="Choose the service you need" text="Every service page explains common symptoms, what is included, our process, and useful answers before you schedule." />
        <div className="service-grid">{services.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
      </section>
    </>
  );
}
