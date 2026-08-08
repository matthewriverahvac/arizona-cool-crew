import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Schedule HVAC Service", "Request heating and cooling service from Cool Fox or call (623) 889-1281 for immediate help.", "/contact");

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service = "" } = await searchParams;
  const initialService = getService(service)?.slug ?? "";
  return (
    <><PageHero eyebrow="Contact Cool Fox" title="Tell us what your comfort needs" text="Send a service request for a follow-up, or call now for urgent heating and cooling help." /><section className="section shell"><div className="contact-layout"><aside className="contact-panel"><p className="eyebrow">Direct Contact</p><h2>We are ready to help.</h2><p>For an HVAC emergency, call instead of waiting for an online reply.</p><div className="contact-details"><a href={siteConfig.phoneHref}><Phone aria-hidden="true" />{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" />{siteConfig.email}</a><span><Clock3 aria-hidden="true" />24/7 emergency service</span><span><MapPin aria-hidden="true" />The Valley and Northern Arizona</span></div></aside><ContactForm initialService={initialService} /></div></section></>
  );
}
