import type { Project, ProjectImage } from "./types";

const imageBase = "/images/projects/rooftop-package-unit-care";

function projectImage(number: number, alt: string, width: number, height: number): ProjectImage {
  return {
    src: `${imageBase}/rooftop-package-unit-care__portfolio__${String(number).padStart(2, "0")}.webp`,
    alt,
    width,
    height,
  };
}

const rooftopImages = [
  projectImage(1, "Close view inside the rooftop HVAC system showing carefully sealed surfaces and component access", 1024, 1366),
  projectImage(2, "Open HVAC compartment showing wiring, metalwork, and the internal blower area", 1024, 1366),
  projectImage(3, "View through the round duct connection during the system inspection", 1024, 1366),
  projectImage(4, "Open rooftop packaged HVAC unit during hands-on service work", 1200, 1600),
  projectImage(5, "Blower motor and wheel assembly exposed for detailed inspection", 1600, 1200),
  projectImage(6, "Internal coil, filter area, and wiring visible during component service", 1600, 1200),
  projectImage(7, "Thermostat wall plate and wiring prepared for the control connection", 1200, 1600),
  projectImage(8, "Electronic HVAC control board and organized field wiring inside the unit", 1200, 1600),
  projectImage(9, "Digital thermostat installed and powered on inside the property", 1200, 1600),
  projectImage(10, "Front view of the rooftop packaged HVAC unit and surrounding work area", 1200, 1600),
  projectImage(11, "Rooftop packaged unit supported above the tile roof with clean line routing", 1200, 1600),
  projectImage(12, "Rear angle of the rooftop HVAC unit showing service labels and roof access", 1200, 1600),
  projectImage(13, "Side view of the rooftop unit and sheet metal transition connection", 1200, 1600),
  projectImage(14, "Wide rooftop view showing the packaged unit, duct transition, and completed work area", 1200, 1600),
  projectImage(15, "Final property view of the rooftop packaged HVAC system in place", 1200, 1600),
];

export const projects: Project[] = [
  {
    slug: "rooftop-package-unit-care",
    title: "Rooftop Package Unit: From Inspection to Final Review",
    city: "Arizona",
    service: "residential-hvac",
    summary: "A complete photo story showing the care behind the inspection, internal component work, comfort controls, and final rooftop review.",
    introduction: "Good HVAC work is more than the finished equipment you can see from the ground. This project gallery follows the work up close, from understanding the existing system to checking internal components, connecting the controls, and reviewing the complete rooftop setup.",
    cover: rooftopImages[14],
    gallery: rooftopImages,
    stages: [
      {
        eyebrow: "Step One",
        title: "Understand the whole system",
        description: "The work begins inside the equipment and duct connection. These close views document the condition, access points, and details that guide the next steps.",
        images: rooftopImages.slice(0, 3),
      },
      {
        eyebrow: "Step Two",
        title: "Work carefully at the component level",
        description: "Open panels reveal the blower assembly, coil area, wiring, and the parts that have to work together for dependable airflow and comfort.",
        images: rooftopImages.slice(3, 6),
      },
      {
        eyebrow: "Step Three",
        title: "Connect and verify the controls",
        description: "The thermostat, wall connection, and equipment control board are reviewed as one system so the property can communicate properly with the rooftop unit.",
        images: rooftopImages.slice(6, 9),
      },
      {
        eyebrow: "Step Four",
        title: "Review the complete rooftop setup",
        description: "The final series steps back to show equipment placement, support, service access, line routing, duct transitions, and the surrounding work area from multiple angles.",
        images: rooftopImages.slice(9),
      },
    ],
    equipmentDetails: "Rooftop packaged HVAC system",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
