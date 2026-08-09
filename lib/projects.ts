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
];

function comparisonImage(file: string, alt: string, width = 1200, height = 1600): ProjectImage {
  return { src: `${imageBase}/${file}`, alt, width, height };
}

const rooftopComparisonA = {
  title: "Rooftop system replacement",
  description: "Aging rooftop equipment and its existing support layout were replaced with a clean installation, carefully routed connections, and clear service access.",
  before: [
    comparisonImage("rooftop-package-unit-care-a__before__01.webp", "Aging rooftop packaged HVAC unit before replacement, viewed from the side"),
    comparisonImage("rooftop-package-unit-care-a__before__02.webp", "Original rooftop HVAC support frame and line routing before replacement"),
    comparisonImage("rooftop-package-unit-care-a__before__03.webp", "Original rooftop duct transition and equipment connection before replacement"),
  ],
  after: [
    comparisonImage("rooftop-package-unit-care-a__after__01.webp", "New rooftop packaged HVAC system installed on a secure support frame"),
    comparisonImage("rooftop-package-unit-care-a__after__02.webp", "Rear view of the completed rooftop HVAC installation and organized connections"),
    comparisonImage("rooftop-package-unit-care-a__after__03.webp", "Completed rooftop HVAC installation with new duct transition and clean roof work"),
  ],
};

const rooftopComparisonB = {
  title: "Complete equipment upgrade",
  description: "The original packaged unit and worn support were replaced with new equipment, a secure rooftop stand, updated connections, and a clean finished work area.",
  before: [
    comparisonImage("rooftop-package-unit-care-b__before__01.webp", "Original rooftop packaged HVAC system before replacement"),
    comparisonImage("rooftop-package-unit-care-b__before__02.webp", "Front view of the original weathered rooftop HVAC unit before replacement"),
  ],
  after: [
    comparisonImage("rooftop-package-unit-care-b__after__01.webp", "New AC Pro rooftop packaged HVAC system after installation"),
    comparisonImage("rooftop-package-unit-care-b__after__02.webp", "Completed rooftop equipment installation viewed from the rear"),
  ],
};

const comparisonImages = [
  ...rooftopComparisonA.after,
  ...rooftopComparisonB.after,
  ...rooftopComparisonA.before,
  ...rooftopComparisonB.before,
];

export const projects: Project[] = [
  {
    slug: "rooftop-package-unit-care",
    title: "Rooftop Package Unit: From Inspection to Final Review",
    city: "Arizona",
    service: "residential-hvac",
    summary: "A complete photo story showing the care behind the inspection, internal component work, comfort controls, and final rooftop review.",
    introduction: "Good HVAC work is more than the finished equipment you can see from the ground. This project gallery follows the work up close, from understanding the existing system to checking internal components, connecting the controls, and reviewing the complete rooftop setup.",
    cover: rooftopComparisonA.after[0],
    gallery: [...rooftopImages, ...comparisonImages],
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
        title: "Compare the complete results",
        description: "The final step brings the full job into view. Each real before and after set shows the equipment, support, connections, roof area, and finished installation from matching project groups.",
        images: comparisonImages,
        comparisons: [rooftopComparisonA, rooftopComparisonB],
      },
    ],
    equipmentDetails: "Rooftop packaged HVAC system",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
