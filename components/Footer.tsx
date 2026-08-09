import Link from "next/link";
import { Clock3, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <div className="footer-brand">
          <BrandMark compact />
          <p>Family owned heating and cooling for the Valley and Northern Arizona.</p>
          <p className="license-line">{siteConfig.legalName}<br />ROC {siteConfig.rocNumber}</p>
          <div className="social-links" aria-label="Cool Fox social media">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Cool Fox on Instagram"><Instagram aria-hidden="true" /></a>
            <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer" aria-label="Cool Fox on Facebook"><Facebook aria-hidden="true" /></a>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <ul>{services.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Service Areas</h2>
          <ul>{locations.slice(0, 9).map((location) => <li key={location.slug}><Link href={`/service-areas/${location.slug}`}>{location.city}</Link></li>)}</ul>
          <Link className="footer-more" href="/service-areas">View all areas</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="contact-list">
            <li><Phone aria-hidden="true" /><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
            <li><Mail aria-hidden="true" /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><Clock3 aria-hidden="true" /><span>24/7 emergency service</span></li>
            <li><MapPin aria-hidden="true" /><span>Serving the Valley and Northern Arizona</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></nav>
      </div>
    </footer>
  );
}
