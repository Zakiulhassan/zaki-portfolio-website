import { Reveal, RevealLines } from "@/components/Reveal";

const cols = [
  {
    n: "Brand Clarity",
    body: "Make the business easier to understand, remember, and trust.",
  },
  {
    n: "Product Experience",
    body: "Make the interface easier to use, navigate, and act on.",
  },
  {
    n: "Conversion Flow",
    body: "Make the journey easier to follow from first impression to decision.",
  },
];

export default function Positioning() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight">
            <RevealLines text="I connect brand, product, and user behaviour." />
          </h2>
          <Reveal delay={0.15}>
            <p className="text-muted text-base md:text-lg max-w-md lg:ml-auto">
              A brand should make people remember you. A product should make
              people trust the next step. I work in the space where both
              decisions are made.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {cols.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.1} className="bg-bg">
              <div className="group h-full p-8 md:p-10 transition-colors duration-500 hover:bg-bg-soft">
                <span className="font-display text-5xl text-muted group-hover:text-accent transition-colors duration-500">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl mt-8 tracking-tight">{c.n}</h3>
                <p className="text-muted mt-3 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
