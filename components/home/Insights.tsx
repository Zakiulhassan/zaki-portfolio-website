"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealLines } from "@/components/Reveal";

const insights = [
  {
    title: "Why users drop off",
    note:
      "Most drop-off isn't a motivation problem — it's a hierarchy problem. When everything on a screen competes for attention, users default to the easiest action: leaving. Clear hierarchy tells people what to look at first, second, and last.",
  },
  {
    title: "Why brands feel generic",
    note:
      "Generic brands aren't ugly — they're undecided. Without a sharp point of view, every choice defaults to 'safe', and safe looks like everyone else. Memorable brands commit to a perspective and let that decision shape type, colour, tone, and rhythm.",
  },
  {
    title: "Why dashboards overwhelm users",
    note:
      "Overwhelm comes from equal weight, not data volume. When alerts, metrics, and actions all look the same size and colour, the brain has to do the prioritising the interface should be doing. Group by relevance and urgency, not by data type.",
  },
];

export default function Insights() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">Design intelligence</span>
        <h2 className="font-display text-balance text-4xl md:text-6xl font-medium tracking-tight mt-6 max-w-2xl">
          <RevealLines text="Useful thinking, not just polished screens." />
        </h2>

        <div className="mt-16 flex flex-col">
          {insights.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="border-t border-line last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-cursor-hover
                    className="w-full flex items-center justify-between gap-6 py-8 text-left group"
                  >
                    <span className="font-display text-2xl md:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display text-2xl text-muted shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl pb-10">
                          {item.note}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
