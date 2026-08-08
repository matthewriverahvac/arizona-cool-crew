import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/services", "/about", "/projects", "/reviews", "/service-areas", "/faq", "/contact", "/privacy", "/terms", "/accessibility"];
  const paths = [...core, ...services.map((service) => `/services/${service.slug}`), ...locations.map((location) => `/service-areas/${location.slug}`), ...projects.map((project) => `/projects/${project.slug}`)];
  return paths.map((path) => ({ url: `${siteConfig.baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/services" || path === "/contact" ? .9 : .7 }));
}
