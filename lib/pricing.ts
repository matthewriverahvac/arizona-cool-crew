import type { PricingOption } from "./types";

export const pricingOptions: PricingOption[] = [
  {
    slug: "free-second-opinion",
    name: "Free Second Opinion",
    subtitle: "Written estimate review",
    price: "Free",
    priceNote: "For written estimates from licensed HVAC contractors",
    category: "second-opinion",
    serviceSlug: "ac-installation",
    features: [
      "Review of the proposed scope, equipment, and pricing",
      "A fresh look at whether repair may still be practical",
      "Clear recommendations with no pressure to proceed",
      "Residential and commercial estimate reviews",
    ],
  },
  {
    slug: "fox-basic",
    name: "Fox Basic",
    subtitle: "Essential protection",
    price: "$119",
    priceNote: "Billed annually",
    category: "maintenance",
    serviceSlug: "maintenance-plans",
    features: [
      "One annual precision tune-up for cooling or heating",
      "Air filter inspection and thermostat calibration check",
      "Electrical connection and refrigerant level checks",
      "Condensation drain line flush treatment",
      "Temperature split test and written system report",
      "Annual outdoor coil rinse with water",
    ],
    finePrint: ["Membership is required for plan benefits."],
  },
  {
    slug: "fox-plus",
    name: "Fox Plus",
    subtitle: "Priority comfort plan",
    price: "$229",
    priceNote: "Billed annually",
    category: "maintenance",
    serviceSlug: "maintenance-plans",
    featured: true,
    features: [
      "All Fox Basic benefits",
      "Two precision tune-ups per year, spring and fall",
      "Priority scheduling and no overtime fees",
      "15% repair discount",
      "Annual outdoor chemical coil cleaning",
      "Extended one-year repair workmanship guarantee",
    ],
    finePrint: ["Membership is required for plan benefits."],
  },
  {
    slug: "fox-elite",
    name: "Fox Elite",
    subtitle: "Ultimate protection",
    price: "$339",
    priceNote: "Billed annually",
    category: "maintenance",
    serviceSlug: "maintenance-plans",
    features: [
      "All Fox Basic and Fox Plus benefits",
      "$0 diagnostic fee for unlimited service calls",
      "Same-day or next-day priority service",
      "Electrical component testing under load and refrigerant leak scan",
      "Lifetime workmanship guarantee while membership remains active",
      "Transferable membership and secondary drain pan treatment",
      "One capacitor and up to one pound of refrigerant if needed, excluding R22",
      "Chemical evaporator coil cleaning",
    ],
    finePrint: [
      "Membership is required for plan benefits.",
      "Repairs and refrigerant beyond included amounts are billed separately.",
    ],
  },
  {
    slug: "commercial-inspection",
    name: "Commercial Preventive Inspection",
    subtitle: "Reliability and downtime review",
    price: "$79",
    priceNote: "Starting price",
    category: "commercial",
    serviceSlug: "commercial-hvac",
    features: [
      "Airflow and static pressure evaluation",
      "Electrical component and voltage testing",
      "Refrigerant charge and leak inspection",
      "Thermostat and control verification",
      "Drainage, condensate, and filter condition assessment",
      "Priority commercial scheduling available",
    ],
    finePrint: ["Final price depends on equipment quantity, access, and inspection scope."],
  },
  {
    slug: "multi-unit-commercial-estimate",
    name: "Multi Unit Commercial Plan",
    subtitle: "Custom property coverage",
    price: "Custom",
    priceNote: "Estimate based on the property",
    category: "commercial",
    serviceSlug: "commercial-hvac",
    features: [
      "Custom estimates for multi unit commercial properties",
      "Equipment inventory and condition review",
      "Service frequency based on operational needs",
      "Clear communication with the property contact",
    ],
  },
  {
    slug: "duct-cleaning-consultation",
    name: "Duct Cleaning Consultation",
    subtitle: "Cleaner ductwork and airflow review",
    price: "Custom",
    priceNote: "Estimate after system review",
    category: "consultation",
    serviceSlug: "duct-cleaning",
    features: ["Duct and register inspection", "Dust, debris, odor, and airflow review", "Clear scope before cleaning begins", "Final walkthrough and result review"],
  },
  {
    slug: "iaq-consultation",
    name: "Indoor Air Quality Consultation",
    subtitle: "Filtration, air purification, and UV options",
    price: "Custom",
    priceNote: "Estimate based on equipment and goals",
    category: "consultation",
    serviceSlug: "indoor-air-quality",
    features: ["Filter and airflow assessment", "iWave-R air purifier options", "Coil and in-duct UV light options", "Recommendations matched to the HVAC system"],
  },
  {
    slug: "mini-split-estimate",
    name: "Mini Split Estimate",
    subtitle: "Targeted comfort for hot spots",
    price: "Custom",
    priceNote: "Estimate based on room and installation needs",
    category: "consultation",
    serviceSlug: "mini-split-installation",
    features: ["Garage and Arizona room options", "Hot bedroom, office, or addition assessment", "Indoor and outdoor placement plan", "Equipment, electrical, and condensate review"],
  },
];

export const requestOptions = pricingOptions.map(({ slug, name, price, serviceSlug }) => ({
  slug,
  label: price === "Custom" ? `${name}, custom estimate` : `${name}, ${price}`,
  serviceSlug,
}));

export function getPricingOption(slug: string) {
  return pricingOptions.find((option) => option.slug === slug);
}

export function getRequestOption(slug: string) {
  return requestOptions.find((option) => option.slug === slug);
}

export function pricingRequestHref(option: PricingOption) {
  return `/contact?service=${option.serviceSlug}&option=${option.slug}`;
}
