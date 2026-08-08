import Link from "next/link";
import { AlertTriangle, Building2, Flame, Home, Snowflake, Sparkles, SquareStack, Wrench } from "lucide-react";
import type { ServicePage } from "@/lib/types";

const icons = {
  snowflake: Snowflake,
  unit: SquareStack,
  wrench: Wrench,
  alert: AlertTriangle,
  home: Home,
  building: Building2,
  air: Sparkles,
  flame: Flame,
};

export function ServiceCard({ service }: { service: ServicePage }) {
  const Icon = icons[service.icon];
  return (
    <article className="service-card">
      <div className="service-icon"><Icon aria-hidden="true" /></div>
      <h3><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></h3>
      <p>{service.summary}</p>
      <Link className="text-link" href={`/services/${service.slug}`}>Explore service <span aria-hidden="true">→</span></Link>
    </article>
  );
}
