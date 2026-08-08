import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { locations } from "@/lib/locations";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Arizona HVAC Service Areas", "Cool Fox serves Phoenix, the West Valley, East Valley, North Valley, and select Northern Arizona communities.", "/service-areas");

export default function ServiceAreasPage() {
  const regions = [...new Set(locations.map((location) => location.region))];
  return (
    <>
      <PageHero eyebrow="Local Coverage" title="HVAC service across the Valley and Northern Arizona" text="Find local service details, nearby coverage, and scheduling information for your community." />
      {regions.map((region, index) => (
        <section className={`section${index % 2 ? " section-contrast" : ""}`} key={region}>
          <div className="shell"><SectionHeading eyebrow="Service Region" title={region} /><div className="location-grid">{locations.filter((location) => location.region === region).map((location) => <Link className="location-card" href={`/service-areas/${location.slug}`} key={location.slug}><span>{location.region}</span><h2>{location.city}</h2><p>{location.introduction.slice(0, 120)}...</p></Link>)}</div></div>
        </section>
      ))}
    </>
  );
}
