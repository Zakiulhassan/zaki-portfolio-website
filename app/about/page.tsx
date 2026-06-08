import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Reveal, RevealLines } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Zaki Ul Hassan",
  description: "Why I think this way, what I care about in design, and the beliefs that shape my work as a Brand & Product Designer.",
};

const beliefs = [
  {
    n: "01",
    title: "Clarity before decoration",
    body: "A strong interface should reduce confusion before it tries to impress.",
  },
  {
    n: "02",
    title: "Brand is not just identity",
    body: "It is the feeling, meaning, and trust people attach to the experience.",
  },
  {
    n: "03",
    title: "UX is business behaviour",
    body: "When users hesitate, skip, abandon, or misunderstand, the product loses momentum.",
  },
  {
    n: "04",
    title: "Design should diagnose",
    body: "Before designing screens, I look for the real friction behind the problem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="I work where brand clarity and product usability meet."
        subtitle="I help teams shape digital experiences that are easier to understand, easier to trust, and harder to ignore — by treating design as a way of thinking, not just a way of decorating."
      />

      <section className="py-20 md:py-28 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">My design beliefs</span>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-medium tracking-tight mt-6 max-w-2xl">
            <RevealLines text="Four ideas that shape every project I take on." />
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 0.08}>
                <div className="border-t border-line pt-6 hover:border-accent/60 transition-colors duration-500">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-muted">{b.n}</span>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight">{b.title}</h3>
                  </div>
                  <p className="mt-3 text-muted text-base md:text-lg max-w-md pl-9">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Outside the screen</span>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-medium tracking-tight mt-6">
            <RevealLines text="What shapes the way I see things." />
          </h2>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-6 text-fg/85 text-base md:text-lg leading-relaxed">
              <p>
                Outside of design, I&apos;m drawn to the same things that show up in
                my work: systems that make sense once you see the structure
                behind them, stories that earn their length, and small details
                that change how something feels without announcing themselves.
              </p>
              <p>
                That curiosity — about why things work, why people hesitate,
                why some ideas stick and others fade — is the real engine
                behind the diagnoses, not just the deliverables. I don&apos;t
                start with screens. I start with the friction behind them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
