import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, RevealLines } from "@/components/Reveal";
import { caseStudies } from "@/lib/work";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.name} — Zaki Ul Hassan`,
    description: study.problem,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <section className="pt-40 md:pt-48 pb-16 border-b border-line">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link href="/work" data-cursor-hover className="text-sm text-muted hover:text-accent transition-colors">
            ← Back to work
          </Link>
          <div className="flex flex-wrap gap-2 mt-8">
            {study.tags.map((t) => (
              <span key={t} className="text-xs text-muted border border-line rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-3xl">
            <RevealLines text={study.name} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted text-lg max-w-2xl leading-relaxed">{study.problem}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col gap-16">
          <Block label="Context" text={study.context} />
          <Block label="Design Challenge" text={study.challenge} />

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-line pt-10">
              <span className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-accent">Key decisions</span>
              <ul className="md:col-span-9 flex flex-col gap-5">
                {study.decisions.map((d, i) => (
                  <li key={i} className="flex gap-4 text-base md:text-lg leading-relaxed text-fg/90">
                    <span className="font-display text-muted shrink-0">0{i + 1}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Block label="What this improved" text={study.outcome} />

          <Reveal>
            <div className="border-t border-line pt-10">
              <span className="text-xs uppercase tracking-[0.25em] text-accent">Reflection</span>
              <p className="font-display text-2xl md:text-4xl tracking-tight mt-6 max-w-3xl text-balance">
                “{study.reflection}”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          <span className="text-sm text-muted">Next case study</span>
          <Link
            href={`/work/${next.slug}`}
            data-cursor-hover
            className="group font-display text-2xl md:text-4xl tracking-tight hover:text-accent transition-colors duration-300"
          >
            {next.name} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-line pt-10">
        <span className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-accent">{label}</span>
        <p className="md:col-span-9 text-base md:text-lg leading-relaxed text-fg/90 max-w-2xl">{text}</p>
      </div>
    </Reveal>
  );
}
