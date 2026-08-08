import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";

export const metadata: Metadata = pageMetadata("HVAC Project Portfolio", "Explore Cool Fox heating and cooling projects through complete photo stories that show the care behind each step.", "/projects");

export default function ProjectsPage() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title="The care behind the finished work"
        text="Follow each project from close inspection through the final review. Every gallery is organized to show how Cool Fox approaches the complete job."
        primaryLabel="View Full Project Photos"
        primaryHref={featured ? `/projects/${featured.slug}` : "/contact"}
      />
      <section className="section shell" id="portfolio">
        <SectionHeading eyebrow="Featured Photo Story" title="See the process, not just the final picture" text="This is a real project gallery built from the customer photo catalog. No forced before-and-after labels and no stock project claims." />
        {projects.length > 0 ? (
          <div className="project-catalog">
            {projects.map((project) => (
              <article className="project-feature-card" key={project.slug}>
                <Link className="project-feature-image" href={`/projects/${project.slug}`}>
                  <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 900px) 100vw, 55vw" />
                  <span>{project.gallery.length} project photos</span>
                </Link>
                <div className="project-feature-copy">
                  <p className="eyebrow">{project.city} Project</p>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <ul className="project-stage-list">
                    {project.stages.map((stage) => <li key={stage.title}><CheckCircle2 aria-hidden="true" />{stage.title}</li>)}
                  </ul>
                  <Link className="button button-gold" href={`/projects/${project.slug}`}>View Full Project Portfolio <ArrowRight aria-hidden="true" size={18} /></Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state"><Camera aria-hidden="true" /><h2>Project stories are being prepared</h2><p>Approved customer photography will appear here as complete, carefully organized project galleries.</p></div>
        )}
      </section>
    </>
  );
}
