"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealLines } from "@/components/Reveal";
import { services } from "@/lib/services";

export default function ServicesPreview() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">Ways I can help</span>
        <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-2xl">
          <RevealLines text="Services framed around your problem, not generic tasks." />
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} className="bg-bg">
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="h-full p-8 md:p-10 flex flex-col justify-between gap-8 group"
              >
                <div>
                  <span className="font-display text-sm text-muted">0{i + 1}</span>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-4 group-hover:text-accent transition-colors duration-300">
                    {s.name}
                  </h3>
                  <p className="text-muted mt-3 leading-relaxed max-w-md">{s.forWhom}</p>
                </div>
                <Link
                  href="/services"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 text-sm text-fg/70 group-hover:text-accent transition-colors duration-300 w-fit"
                >
                  Learn more →
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-muted">
            Not sure what you need?{" "}
            <Link href="/start-a-project" data-cursor-hover className="text-fg border-b border-accent hover:text-accent transition-colors">
              Let&apos;s diagnose it first.
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
