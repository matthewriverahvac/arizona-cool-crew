export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  );
}
