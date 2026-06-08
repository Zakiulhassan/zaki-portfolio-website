"use client";

import { Reveal, RevealLines } from "@/components/Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Listen",
    body: "Understand the business, users, product, and friction.",
  },
  {
    n: "02",
    title: "Diagnose",
    body: "Find where clarity, trust, hierarchy, or flow breaks.",
  },
  {
    n: "03",
    title: "Map",
    body: "Structure the experience before styling the interface.",
  },
  {
    n: "04",
    title: "Design",
    body: "Create a brand and product experience that feels clear and intentional.",
  },
  {
    n: "05",
    title: "Refine",
    body: "Improve the system through feedback, usability, and real constraints.",
  },
];

export default function Method() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">Signature method</span>
        <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-2xl">
          <RevealLines text="Before I design, I diagnose." />
        </h2>

        <div className="mt-20 flex flex-col">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} y={20}>
              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-10 border-t border-line py-8 last:border-b cursor-default"
              >
                <span className="font-display text-sm text-muted w-12 shrink-0">{s.n}</span>
                <h3 className="font-display text-3xl md:text-5xl tracking-tight md:w-64 shrink-0 group-hover:text-accent transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted text-base md:text-lg max-w-xl">{s.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
