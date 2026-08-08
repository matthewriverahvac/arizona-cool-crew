import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-mark${compact ? " brand-mark-compact" : ""}`} href="/" aria-label="Cool Fox Heating and Cooling home">
      <Image
        src="/images/cool-fox-logo-transparent.png"
        alt="Cool Fox Heating and Cooling"
        width={710}
        height={310}
        priority
      />
    </Link>
  );
}
