import { RevealLines, Reveal } from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-40 md:pt-48 pb-20 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
        <h1 className="font-display text-balance text-4xl md:text-7xl font-medium tracking-tight mt-6 max-w-4xl">
          <RevealLines text={title} />
        </h1>
        {subtitle && (
          <Reveal delay={0.25}>
            <p className="mt-8 text-muted text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
