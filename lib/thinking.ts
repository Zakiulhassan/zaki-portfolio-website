export type Note = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "why-beautiful-ui-still-fails",
    title: "Why beautiful UI still fails",
    category: "Field Note",
    excerpt: "Polish is not the same as clarity. A beautiful screen can still leave people unsure what to do next.",
    body: [
      "Beautiful UI gets attention. Clear UI gets action. The two often get confused — a polished interface feels like progress, but if the user still has to think about where to look or what to click, the design hasn't done its job yet.",
      "The fix isn't less beauty. It's sequencing beauty around a clear hierarchy: one primary action per screen, one dominant idea per section, one obvious next step. Decoration should reinforce that order, not compete with it.",
    ],
  },
  {
    slug: "why-users-hesitate-before-clicking",
    title: "Why users hesitate before clicking",
    category: "Design Diagnosis",
    excerpt: "Hesitation is rarely about the button. It's about everything the user isn't sure of yet.",
    body: [
      "When someone pauses before clicking, they're quietly asking: what happens next, is this safe, is this for me, will I regret this. If the interface hasn't already answered those questions, the click feels like a risk.",
      "Reducing hesitation is about removing ambiguity earlier in the flow — clear labels, visible consequences, social proof, and a layout that telegraphs what comes after the click. Confidence is designed before the moment of decision, not at it.",
    ],
  },
  {
    slug: "why-ai-products-need-more-trust",
    title: "Why AI products need more trust",
    category: "Field Note",
    excerpt: "AI doesn't just need to work. It needs to feel understandable enough to be trusted with real decisions.",
    body: [
      "Most AI products fail on trust before they fail on capability. Users can't see the reasoning, so the interface has to carry the burden of feeling transparent, predictable, and reversible.",
      "That means showing what the system is doing (not just the result), giving users control over edge cases, and designing failure states as carefully as success states. Trust is a UX decision before it's a model decision.",
    ],
  },
  {
    slug: "why-dashboards-become-confusing",
    title: "Why dashboards become confusing",
    category: "Design Diagnosis",
    excerpt: "Dashboards rarely fail from a lack of data. They fail from a lack of priority.",
    body: [
      "The instinct is to add more — more charts, more filters, more density — because more feels like more value. But every additional element with equal visual weight makes the whole screen harder to read.",
      "Clear dashboards group information by relationship and urgency, let secondary data recede, and reserve visual emphasis for what the user actually needs to act on today. Less competition for attention means faster decisions.",
    ],
  },
  {
    slug: "why-brands-feel-forgettable",
    title: "Why brands feel forgettable",
    category: "Field Note",
    excerpt: "Forgettable brands aren't ugly. They're undecided — and indecision looks the same as everyone else.",
    body: [
      "When a brand tries to appeal to everyone, it ends up looking like the average of its category: the same blues, the same friendly sans-serif, the same vague promises. Safety, taken too far, becomes invisibility.",
      "Memorable brands make a small number of confident, specific choices — a point of view, a visual signature, a tone — and repeat them until they become recognisable. Distinctiveness is a discipline, not an accident.",
    ],
  },
  {
    slug: "before-after-thinking-onboarding",
    title: "Before / after thinking: onboarding that explains itself",
    category: "Before / After Thinking",
    excerpt: "Not fake results — just the design logic behind turning a confusing first session into a guided one.",
    body: [
      "Before: a new user lands on a blank workspace with a tooltip tour they skip in three seconds. They're left to explore alone, guess at terminology, and decide — often within minutes — whether the product is 'for them'.",
      "After: the first session is structured around one meaningful action completed early, with just enough framing to explain why it matters. The interface teaches by doing, not by narrating. The goal isn't to explain everything — it's to remove the first reason to leave.",
    ],
  },
];
