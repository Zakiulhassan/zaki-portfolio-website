"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { RevealLines } from "@/components/Reveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full blur-[140px]"
      >
        <div className="h-full w-full rounded-full bg-accent/15" />
      </motion.div>

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.25em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Brand &amp; Product Designer
        </div>

        <h1 className="font-display text-balance text-[12vw] leading-[0.98] md:text-[6.4vw] md:leading-[1.02] font-medium tracking-tight max-w-6xl">
          <RevealLines text="I design brands people remember" />
          <br />
          <span className="text-muted">
            <RevealLines text="and product experiences people" delay={0.25} />
          </span>
          <br />
          <RevealLines text="understand." delay={0.45} className="text-accent" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xl text-base md:text-lg text-muted leading-relaxed"
        >
          I help ambitious teams turn unclear ideas, complex products, and
          forgettable brands into clear, trusted, memorable digital
          experiences — by diagnosing the friction before designing the
          screens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/start-a-project"
            data-cursor-hover
            className="group inline-flex items-center gap-3 rounded-full bg-accent text-bg px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:scale-[1.03]"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/thinking"
            data-cursor-hover
            className="inline-flex items-center gap-3 rounded-full border border-fg/20 px-7 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Explore My Thinking
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-xs text-muted uppercase tracking-[0.25em]"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-fg/30"
        />
      </motion.div>
    </section>
  );
}
