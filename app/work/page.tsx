import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work — Zaki Ul Hassan",
  description: "Case studies framed by problems, decisions, and outcomes — not just pretty screens.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Case studies, framed by problems and decisions."
        subtitle="Not a gallery of screens. Each project here is a short story: the context, the friction, the decisions made, and what changed because of them."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link href={`/work/${c.slug}`} data-cursor-hover className="group block border-t border-line py-12 last:border-b">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <span className="md:col-span-1 font-display text-sm text-muted">{c.year}</span>
                  <div className="md:col-span-6">
                    <h2 className="font-display text-3xl md:text-5xl tracking-tight group-hover:text-accent transition-colors duration-300">
                      {c.name}
                    </h2>
                    <p className="text-muted mt-4 max-w-lg leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="md:col-span-4 flex flex-wrap gap-2 content-start">
                    {c.tags.map((t) => (
                      <span key={t} className="text-xs text-muted border border-line rounded-full px-3 py-1 group-hover:border-accent/40 group-hover:text-fg transition-colors duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <span className="inline-flex items-center gap-2 text-sm text-fg/70 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
