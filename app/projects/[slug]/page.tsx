import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MapPin, Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { getProject, projects } from "@/lib/projects";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.service);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    image: project.gallery.map((image) => `${siteConfig.baseUrl}${image.src}`),
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };
  return (
    <>
      <JsonLd data={schema} />
      <PageHero eyebrow="Cool Fox Project Story" title={project.title} text={project.summary} primaryLabel="View the Full Photo Story" primaryHref="#project-story" />
      <section className="section shell project-intro">
        <div>
          <p className="eyebrow">The Complete Process</p>
          <h2>Care shows up in the details.</h2>
          <p>{project.introduction}</p>
          <div className="project-facts">
            <span><MapPin aria-hidden="true" />{project.city}</span>
            <span><Wrench aria-hidden="true" />{project.equipmentDetails}</span>
            <span><Camera aria-hidden="true" />{project.gallery.length} original project photos</span>
          </div>
        </div>
        <Image className="project-cover" src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} priority sizes="(max-width: 900px) 100vw, 44vw" />
      </section>
      <div id="project-story">
        {project.stages.map((stage, stageIndex) => (
          <section id={`stage-${stageIndex + 1}`} className={`section story-stage${stageIndex % 2 ? " section-contrast" : ""}`} key={stage.title}>
            <div className="shell story-stage-layout">
              <div className="story-stage-copy">
                <p className="eyebrow">{stage.eyebrow}</p>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>
                <span>{String(stageIndex + 1).padStart(2, "0")}</span>
              </div>
              {stage.comparisons ? (
                <div className="story-comparison-list">
                  {stage.comparisons.map((comparison) => (
                    <article className="story-comparison-group" key={comparison.title}>
                      <div className="story-comparison-heading">
                        <h3>{comparison.title}</h3>
                        <p>{comparison.description}</p>
                      </div>
                      <div className="story-comparison-columns">
                        <div className="story-comparison-side">
                          <p>Before</p>
                          <div className="story-comparison-photos">
                            {comparison.before.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 700px) 100vw, 28vw" /></figure>)}
                          </div>
                        </div>
                        <div className="story-comparison-side">
                          <p>After</p>
                          <div className="story-comparison-photos">
                            {comparison.after.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 700px) 100vw, 28vw" /></figure>)}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className={`story-photo-grid story-photo-grid-${Math.min(stage.images.length, 4)}`}>
                  {stage.images.map((image, imageIndex) => (
                    <figure className={imageIndex === 0 ? "story-photo-primary" : ""} key={image.src}>
                      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 34vw" />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      <section className="final-cta"><div className="shell final-cta-inner"><div><p className="eyebrow">Need Care Like This?</p><h2>Let Cool Fox take a closer look.</h2><p>Request service for your home or business and tell us what your system is doing.</p></div><div className="button-row"><Link className="button button-gold" href={`/contact?service=${project.service}`}>Request Similar Service <ArrowRight aria-hidden="true" size={18} /></Link>{service && <Link className="button button-outline" href={`/services/${service.slug}`}>Explore {service.shortTitle}</Link>}</div></div></section>
    </>
  );
}
