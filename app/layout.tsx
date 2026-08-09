import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: "Cool Fox Heating & Cooling | Arizona HVAC Service", template: "%s | Cool Fox Heating & Cooling" },
  description: "Family owned heating and cooling service for the Valley and Northern Arizona. Call (623) 889-1281 for honest HVAC help.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.displayName,
    title: "Arizona Comfort. Honest Service.",
    description: "Family owned heating and cooling for the Valley and Northern Arizona.",
    url: siteConfig.baseUrl,
    images: [{ url: "/og.png?v=20260808", width: 1200, height: 630, alt: "Cool Fox Heating and Cooling in Arizona" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png?v=20260808"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070707" };

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: siteConfig.legalName,
  url: siteConfig.baseUrl,
  telephone: "+16238891281",
  email: siteConfig.email,
  image: `${siteConfig.baseUrl}/og.png`,
  sameAs: [siteConfig.googleReviewsUrl, siteConfig.instagramUrl, siteConfig.facebookUrl],
  priceRange: "$$",
  areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <JsonLd data={businessSchema} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileActions />
      </body>
    </html>
  );
}
