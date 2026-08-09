import Image from "next/image";

export function BeforeAfterFeature({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`before-after${compact ? " before-after-compact" : ""}`}>
      <figure>
        <div className="before-after-image">
          <Image
            src="/images/projects/rooftop-package-unit-care/rooftop-package-unit-care-b__before__01.webp"
            alt="Original rooftop packaged HVAC system before replacement by Cool Fox"
            width={1200}
            height={1600}
            sizes="(max-width: 700px) 100vw, 42vw"
          />
          <span>Before</span>
        </div>
        <figcaption>The original rooftop system before Cool Fox began the replacement.</figcaption>
      </figure>
      <figure>
        <div className="before-after-image">
          <Image
            src="/images/projects/rooftop-package-unit-care/rooftop-package-unit-care-b__after__01.webp"
            alt="New rooftop packaged HVAC system after replacement by Cool Fox"
            width={1200}
            height={1600}
            sizes="(max-width: 700px) 100vw, 42vw"
          />
          <span>After</span>
        </div>
        <figcaption>The completed rooftop replacement, installed and photographed by Cool Fox.</figcaption>
      </figure>
    </div>
  );
}
