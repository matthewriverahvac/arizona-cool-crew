import Image from "next/image";

export function BeforeAfterFeature({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`before-after${compact ? " before-after-compact" : ""}`}>
      <figure>
        <div className="before-after-image">
          <Image
            src="/images/projects/universal-comparison/rooftop-unit__illustrative-before.webp"
            alt="Illustrative view of an older weathered rooftop HVAC package unit at the project site"
            width={1200}
            height={1600}
            sizes="(max-width: 700px) 100vw, 42vw"
          />
          <span>Illustrative Before</span>
        </div>
        <figcaption>A visual stand-in showing the type of aging equipment Cool Fox replaces.</figcaption>
      </figure>
      <figure>
        <div className="before-after-image">
          <Image
            src="/images/projects/universal-comparison/rooftop-unit__after.webp"
            alt="Completed rooftop HVAC package unit installation photographed by Cool Fox"
            width={1200}
            height={1600}
            sizes="(max-width: 700px) 100vw, 42vw"
          />
          <span>Completed Project</span>
        </div>
        <figcaption>The actual finished rooftop installation photographed by the Cool Fox team.</figcaption>
      </figure>
      <p className="comparison-disclosure">The before image is an illustrative edit of the completed job-site photo. It will be replaced when the matching original before photo is available.</p>
    </div>
  );
}
