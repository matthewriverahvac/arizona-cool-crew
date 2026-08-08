import { Camera, Images } from "lucide-react";

export function ProjectPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`project-placeholder${compact ? " project-placeholder-compact" : ""}`}>
      <div><Camera aria-hidden="true" /><span>The Process</span></div>
      <div><Images aria-hidden="true" /><span>Final Review</span></div>
      <p>Approved project photography will tell the complete story in this fixed layout.</p>
    </div>
  );
}
