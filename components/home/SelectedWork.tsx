"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealLines } from "@/components/Reveal";
import { caseStudies } from "@/lib/work";

export default function SelectedWork() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent">Selected work</span>
            <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-2xl">
              <RevealLines text="Selected work, framed by problems solved." />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/work"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm border-b border-fg/30 pb-1 hover:border-accent hover:text-accent transition-colors duration-300 shrink-0"
            >
              View all work →
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <Link href={`/work/${c.slug}`} data-cursor-hover>
                <motion.div
                  whileHover="hover"
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-center border-t border-line py-10 last:border-b"
                >
                  <span className="md:col-span-1 font-display text-sm text-muted">0{i + 1}</span>
                  <h3 className="md:col-span-4 font-display text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
                    {c.name}
                  </h3>
                  <p className="md:col-span-5 text-muted leading-relaxed">{c.problem}</p>
                  <div className="md:col-span-2 flex md:justify-end">
                    <motion.span
                      variants={{ hover: { x: 8 } }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex items-center gap-2 text-sm text-fg/70 group-hover:text-accent transition-colors duration-300"
                    >
                      View case study →
                    </motion.span>
                  </div>
                  <div className="md:col-span-12 flex flex-wrap gap-2 mt-1">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted border border-line rounded-full px-3 py-1 group-hover:border-accent/40 group-hover:text-fg transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
