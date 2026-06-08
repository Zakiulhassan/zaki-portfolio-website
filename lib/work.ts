export type CaseStudy = {
  slug: string;
  name: string;
  problem: string;
  tags: string[];
  year: string;
  context: string;
  challenge: string;
  decisions: string[];
  outcome: string;
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-crm-platform",
    name: "AI CRM Experience",
    problem:
      "Turning a complex AI sales platform into a clearer workspace for agents, campaigns, leads, and business workflows.",
    tags: ["Product UX", "Dashboard Design", "AI SaaS", "UX Systems"],
    year: "2025",
    context:
      "A growing AI sales tool had powerful automation but an interface that buried its value under dense panels and unclear hierarchy.",
    challenge:
      "Agents couldn't tell what needed attention first. Every screen presented equal weight — campaigns, leads, and AI actions all competed for the same visual space.",
    decisions: [
      "Rebuilt the information hierarchy around what the user needs to decide next, not what the system can display.",
      "Designed a modular dashboard system that adapts to role, priority, and active workflow stage.",
      "Introduced a calm visual language — fewer colours, clearer states, intentional motion — so AI actions read as assistance, not noise.",
    ],
    outcome:
      "Agents could find priority actions in seconds instead of scanning entire screens. The redesign became the foundation for the platform's design system.",
    reflection:
      "Complex tools don't need more features to feel powerful — they need a clearer order of attention.",
  },
  {
    slug: "travel-discovery-experience",
    name: "Travel Discovery Experience",
    problem:
      "Designing a clearer destination discovery journey for young, frequent travellers who book on impulse.",
    tags: ["Product UX", "Mobile App", "Travel", "UI Design"],
    year: "2024",
    context:
      "A travel start-up wanted an app that felt inspiring, but users dropped off between browsing and booking.",
    challenge:
      "The discovery flow was visually rich but directionless — users enjoyed scrolling, then forgot why they opened the app.",
    decisions: [
      "Reframed discovery around intent (mood, budget, time) instead of generic destination grids.",
      "Designed a progressive flow that moves from inspiration to decision without breaking momentum.",
      "Used motion and editorial layout to keep the experience feeling premium, not transactional.",
    ],
    outcome:
      "Session-to-save conversion improved, and the product gained a clear visual identity that travellers recognised across channels.",
    reflection:
      "Inspiration without direction is just decoration — discovery needs a destination.",
  },
  {
    slug: "smart-device-dashboard",
    name: "Smart Device Dashboard",
    problem:
      "Making device monitoring, filters, alerts, and performance data easier to understand at a glance.",
    tags: ["Dashboard Design", "B2B SaaS", "Data UX", "Design Systems"],
    year: "2024",
    context:
      "An IoT company's monitoring dashboard worked, but technicians needed training just to read it.",
    challenge:
      "Every metric, alert, and filter appeared with the same visual emphasis — there was no sense of what mattered right now.",
    decisions: [
      "Grouped data by urgency and relationship rather than by data type.",
      "Designed a layered alert system that surfaces what needs action first, and lets details unfold on demand.",
      "Built a lightweight design system so new device types could be added without breaking clarity.",
    ],
    outcome:
      "New technicians could read the dashboard without onboarding sessions, and support tickets about 'where do I find X' dropped sharply.",
    reflection:
      "Dashboards overwhelm not because of data volume, but because everything looks equally important.",
  },
  {
    slug: "clarity-brand-system",
    name: "Clarity Brand System",
    problem:
      "Giving an early-stage SaaS founder a brand identity that finally matched the seriousness of the product.",
    tags: ["Brand Identity", "Positioning", "Visual System", "Startup"],
    year: "2023",
    context:
      "The product was strong, but the brand looked interchangeable with a dozen competitors — generic blues, generic type, generic tone.",
    challenge:
      "There was no clear point of view. The brand wasn't wrong, it was invisible.",
    decisions: [
      "Defined a sharper positioning statement rooted in how the product actually changes a user's day.",
      "Built a visual system around one confident accent colour, restrained type, and editorial spacing.",
      "Wrote a tone-of-voice guide so every touchpoint — product, site, deck — sounded like one person speaking.",
    ],
    outcome:
      "The founder reported that investors and early customers started describing the brand back to them in their own words — a sign the message had landed.",
    reflection:
      "A brand becomes memorable the moment it stops trying to look like everyone else.",
  },
];
