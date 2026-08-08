import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function PageHero({ eyebrow, title, text, service, primaryLabel = "Schedule Service", primaryHref }: { eyebrow?: string; title: string; text: string; service?: string; primaryLabel?: string; primaryHref?: string }) {
  const query = service ? `?service=${service}` : "";
  const actionHref = primaryHref ?? `/contact${query}`;
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="button-row">
          <Link className="button button-gold" href={actionHref}>{primaryLabel}</Link>
          <a className="button button-outline" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={19} /> Call {siteConfig.phone}</a>
        </div>
      </div>
    </section>
  );
}
