import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Quick contact actions">
      <a href={siteConfig.phoneHref}><Phone aria-hidden="true" />Call Now</a>
      <Link href="/contact"><CalendarDays aria-hidden="true" />Schedule</Link>
    </div>
  );
}
