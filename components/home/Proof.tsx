import { Reveal, RevealLines } from "@/components/Reveal";

const items = [
  { label: "Screens", detail: "High-fidelity UI across web, product, and mobile." },
  { label: "Wireframes", detail: "Low-fidelity structure before visual decisions." },
  { label: "Flow maps", detail: "User journeys mapped before anything is styled." },
  { label: "UI systems", detail: "Reusable components and design tokens." },
  { label: "Before / after", detail: "Visual proof of what changed and why." },
  { label: "Design reasoning", detail: "Documented decisions, not just deliverables." },
];

export default function Proof() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">Proof without bragging</span>
        <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-2xl">
          <RevealLines text="Proof lives in the process." />
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.06}>
              <div className="border border-line rounded-2xl p-7 h-full hover:border-accent/40 transition-colors duration-500">
                <h3 className="font-display text-xl tracking-tight">{it.label}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{it.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
