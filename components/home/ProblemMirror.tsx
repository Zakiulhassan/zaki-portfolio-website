import { Reveal, RevealLines } from "@/components/Reveal";

const cards = [
  {
    n: "01",
    title: "Users hesitate",
    body: "because the value is not clear.",
  },
  {
    n: "02",
    title: "Products feel complex",
    body: "because flows are built around features, not decisions.",
  },
  {
    n: "03",
    title: "Brands feel forgettable",
    body: "because they lack a clear point of view.",
  },
  {
    n: "04",
    title: "Websites fail quietly",
    body: "because visitors do not know why they should care.",
  },
];

export default function ProblemMirror() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">The problem mirror</span>
        </Reveal>
        <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-3xl">
          <RevealLines text="Most design problems are not visual at first." />
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="group border-t border-line pt-6 transition-colors duration-500 hover:border-accent/60">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-muted">{c.n}</span>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">{c.title}</h3>
                </div>
                <p className="mt-3 text-muted text-base md:text-lg max-w-md pl-9">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
