import Link from "next/link";
import { PawPrint, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return <section className="page-hero"><div className="shell page-hero-inner"><PawPrint aria-hidden="true" size={60} color="#d7a53a" /><p className="eyebrow">404</p><h1>This page wandered off.</h1><p>The page may have moved, but Cool Fox is still here to help.</p><div className="button-row"><Link className="button button-gold" href="/">Return Home</Link><a className="button button-outline" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={18} /> {siteConfig.phone}</a></div></div></section>;
}
