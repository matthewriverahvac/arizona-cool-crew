import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Accessibility", "Cool Fox Heating and Cooling website accessibility commitment and contact information.", "/accessibility");

export default function AccessibilityPage() {
  return <><PageHero eyebrow="Accessibility" title="A website built for more people" text="Cool Fox is committed to providing a useful and accessible online experience." /><section className="section shell legal-content"><h2>Our approach</h2><p>This website is designed to support keyboard navigation, visible focus, readable contrast, meaningful headings, form labels, reduced motion preferences, and descriptive image text.</p><h2>Ongoing improvement</h2><p>Accessibility is an ongoing effort. New content and project photography will be reviewed as the site grows.</p><h2>Need assistance?</h2><p>If you have difficulty using this website or need information in another format, call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> or email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Please describe the page and the assistance you need.</p></section></>;
}
