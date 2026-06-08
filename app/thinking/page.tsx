import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { notes } from "@/lib/thinking";

export const metadata: Metadata = {
  title: "Thinking — Zaki Ul Hassan",
  description: "Design diagnoses, field notes, and before/after thinking on brand, UX, and product clarity.",
};

export default function ThinkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Thinking"
        title="How I see problems — before I solve them."
        subtitle="Most portfolios only show the work. This is where I show how I think — short diagnoses of brand, product, and conversion problems, written to be useful on their own."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
          {notes.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 2) * 0.08 + Math.floor(i / 2) * 0.05}>
              <Link href={`/thinking/${n.slug}`} data-cursor-hover className="group block border-t border-line py-10">
                <span className="text-xs uppercase tracking-[0.25em] text-accent">{n.category}</span>
                <h2 className="font-display text-2xl md:text-3xl tracking-tight mt-4 group-hover:text-accent transition-colors duration-300">
                  {n.title}
                </h2>
                <p className="text-muted mt-3 leading-relaxed max-w-md">{n.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm text-fg/70 mt-5 group-hover:text-accent group-hover:gap-3 transition-all duration-300">
                  Read note →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
