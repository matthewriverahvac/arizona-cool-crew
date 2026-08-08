export type Faq = {
  question: string;
  answer: string;
};

export type BusinessClaim = {
  text: string;
  approved: boolean;
  evidenceNote: string;
};

export type SiteConfig = {
  legalName: string;
  displayName: string;
  phone: string;
  phoneHref: string;
  email: string;
  rocNumber: string;
  baseUrl: string;
  serviceAreas: string[];
  claims: BusinessClaim[];
};

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  symptoms: string[];
  inclusions: string[];
  process: { title: string; text: string }[];
  faqs: Faq[];
  relatedServices: string[];
  icon: "snowflake" | "unit" | "wrench" | "alert" | "home" | "building" | "air" | "flame";
};

export type LocationPage = {
  slug: string;
  city: string;
  region: string;
  introduction: string;
  coverageNotes: string;
  localConcern: string;
  nearbyAreas: string[];
  faqs: Faq[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  city: string;
  service: string;
  summary: string;
  introduction: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  stages: {
    eyebrow: string;
    title: string;
    description: string;
    images: ProjectImage[];
  }[];
  equipmentDetails?: string;
  completedAt?: string;
  featured: boolean;
};

export type Review = {
  quote: string;
  displayName: string;
  city: string;
  source: string;
  sourceUrl: string;
  rating: number;
  approved: boolean;
};
