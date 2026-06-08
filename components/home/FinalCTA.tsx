import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="py-32 md:py-44 border-t border-line relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 className="font-display text-balance text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
          <RevealLines text="Have a product, brand, or website that feels harder to explain than it should?" />
        </h2>
        <Reveal delay={0.3}>
          <p className="mt-8 text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I can help you find the friction, simplify the experience, and
            design a clearer path forward.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-a-project"
              data-cursor-hover
              className="group inline-flex items-center gap-3 rounded-full bg-accent text-bg px-8 py-4 text-sm font-medium transition-transform duration-300 hover:scale-[1.04]"
            >
              Book a Clarity Call
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/work"
              data-cursor-hover
              className="inline-flex items-center gap-3 rounded-full border border-fg/20 px-8 py-4 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
