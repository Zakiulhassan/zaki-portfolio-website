export type Service = {
  slug: string;
  name: string;
  forWhom: string;
  summary: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "brand-clarity-identity",
    name: "Brand Clarity & Identity Direction",
    forWhom: "For founders and teams who need a brand that feels clear, credible, and memorable.",
    summary: "Make the business easier to understand, remember, and trust — before a single screen is designed.",
    includes: [
      "Brand positioning",
      "Visual identity direction",
      "Messaging structure",
      "Typography and colour system",
      "Brand experience direction",
    ],
  },
  {
    slug: "product-ux-ui-design",
    name: "Product UX & Interface Design",
    forWhom: "For SaaS, AI, dashboard, and web app teams with unclear or complex product experiences.",
    summary: "Make the interface easier to use, navigate, and act on — from first flow to final pixel.",
    includes: [
      "UX strategy",
      "Product flows",
      "Wireframes",
      "UI design",
      "Design systems",
      "Developer-ready handoff",
    ],
  },
  {
    slug: "website-conversion-experience",
    name: "Website & Conversion Experience",
    forWhom: "For service businesses, startups, and digital products that need a website that explains, guides, and converts.",
    summary: "Make the journey easier to follow, from first impression to decision.",
    includes: [
      "Website strategy",
      "Information architecture",
      "Landing page UX",
      "Copy structure",
      "Visual direction",
      "Conversion flow",
    ],
  },
  {
    slug: "ux-brand-diagnosis",
    name: "UX / Brand Diagnosis",
    forWhom: "For teams who know something feels wrong but don't know what to fix.",
    summary: "Find the friction first. Then design with confidence, not guesswork.",
    includes: [
      "UX audit",
      "Brand clarity review",
      "Funnel friction review",
      "Homepage clarity review",
      "Actionable improvement plan",
    ],
  },
];
