import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Zaki Ul Hassan",
  description: "Brand clarity, product UX/UI design, website experience design, and UX/brand diagnosis — packaged around your problem, not generic tasks.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ways I can help — packaged around the problem, not the task."
        subtitle="Every engagement starts with the same question: what is actually creating friction? From there, the work takes one of these shapes — sometimes more than one."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.07}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-line py-14 last:border-b">
                <div className="lg:col-span-5">
                  <span className="font-display text-sm text-muted">0{i + 1}</span>
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-4">{s.name}</h2>
                  <p className="text-muted mt-4 max-w-md leading-relaxed">{s.forWhom}</p>
                  <p className="text-fg/80 mt-4 max-w-md leading-relaxed">{s.summary}</p>
                </div>
                <div className="lg:col-span-5 lg:col-start-7">
                  <span className="text-xs uppercase tracking-[0.25em] text-accent">Includes</span>
                  <ul className="mt-5 flex flex-col gap-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-fg/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 border border-line rounded-2xl p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-4xl tracking-tight max-w-2xl mx-auto text-balance">
              Not sure what you need? Let&apos;s diagnose it first.
            </h3>
            <Link
              href="/start-a-project"
              data-cursor-hover
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent text-bg px-8 py-4 text-sm font-medium transition-transform duration-300 hover:scale-[1.04]"
            >
              Start with a clarity call →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
