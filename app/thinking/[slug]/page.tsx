import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, RevealLines } from "@/components/Reveal";
import { notes } from "@/lib/thinking";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};
  return { title: `${note.title} — Zaki Ul Hassan`, description: note.excerpt };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  const index = notes.findIndex((n) => n.slug === slug);
  const next = notes[(index + 1) % notes.length];

  return (
    <>
      <section className="pt-40 md:pt-48 pb-16 border-b border-line">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <Link href="/thinking" data-cursor-hover className="text-sm text-muted hover:text-accent transition-colors">
            ← Back to thinking
          </Link>
          <span className="block text-xs uppercase tracking-[0.25em] text-accent mt-8">{note.category}</span>
          <h1 className="font-display text-balance text-3xl md:text-5xl font-medium tracking-tight mt-6">
            <RevealLines text={note.title} />
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col gap-8">
          {note.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base md:text-lg leading-relaxed text-fg/90">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="max-w-3xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          <span className="text-sm text-muted">Next note</span>
          <Link
            href={`/thinking/${next.slug}`}
            data-cursor-hover
            className="group font-display text-xl md:text-3xl tracking-tight hover:text-accent transition-colors duration-300 text-right"
          >
            {next.title} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
