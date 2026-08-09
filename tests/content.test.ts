import { describe, expect, it } from "vitest";
import { locations } from "@/lib/locations";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

describe("typed site content", () => {
  it("keeps service and location slugs unique", () => {
    expect(new Set(services.map((item) => item.slug)).size).toBe(services.length);
    expect(new Set(locations.map((item) => item.slug)).size).toBe(locations.length);
  });

  it("provides complete service page content", () => {
    for (const service of services) {
      expect(service.symptoms.length).toBeGreaterThanOrEqual(5);
      expect(service.inclusions.length).toBeGreaterThanOrEqual(5);
      expect(service.process).toHaveLength(4);
      expect(service.faqs.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("uses the canonical business phone", () => {
    expect(siteConfig.phone).toBe("(623) 889-1281");
    expect(siteConfig.phoneHref).toBe("tel:+16238891281");
  });

  it("publishes complete project photo stories and valid comparison groups", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.gallery.length).toBeGreaterThanOrEqual(8);
      expect(project.stages.length).toBeGreaterThanOrEqual(3);
      expect(project.stages.flatMap((stage) => stage.images)).toHaveLength(project.gallery.length);
      expect(project.gallery.every((image) => image.alt.length > 20)).toBe(true);
      for (const comparison of project.stages.flatMap((stage) => stage.comparisons ?? [])) {
        expect(comparison.before.length).toBeGreaterThan(0);
        expect(comparison.after.length).toBeGreaterThan(0);
      }
    }
  });
});
