import type { Metadata } from "next";
import { siteConfig } from "./site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteConfig.baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.displayName, images: [{ url: "/og.png", width: 1200, height: 630 }] },
  };
}
