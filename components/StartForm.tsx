"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const needs = [
  "I need a brand direction",
  "I need product UX/UI design",
  "I need a website or landing page",
  "I need a UX/brand audit",
  "I am not sure yet",
];

export default function StartForm() {
  const [need, setNeed] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal>
        <div className="border border-line rounded-2xl p-10 md:p-14 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Received</span>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight mt-5 text-balance">
            Thanks{name ? `, ${name}` : ""} — that&apos;s enough to start.
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto leading-relaxed">
            I&apos;ll read what you shared and reply by email within a couple of
            days with my honest take on the right next step — whether that&apos;s
            a clarity call or something more specific.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <div>
        <span className="text-xs uppercase tracking-[0.25em] text-accent">01 — What do you need?</span>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {needs.map((n) => {
            const active = need === n;
            return (
              <button
                type="button"
                key={n}
                data-cursor-hover
                onClick={() => setNeed(n)}
                className={`text-left rounded-xl border px-5 py-4 transition-all duration-300 ${
                  active
                    ? "border-accent bg-accent/10 text-fg"
                    : "border-line text-muted hover:border-fg/30 hover:text-fg"
                }`}
              >
                {n}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {need && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-accent">02 — Tell me about it</span>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Your name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-transparent border-b border-line focus:border-accent outline-none py-3 transition-colors duration-300 placeholder:text-muted/50"
                  />
                </Field>
                <Field label="Email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-transparent border-b border-line focus:border-accent outline-none py-3 transition-colors duration-300 placeholder:text-muted/50"
                  />
                </Field>
              </div>
              <div className="mt-6">
                <Field label="What feels unclear, broken, or harder to explain than it should be?">
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={5}
                    placeholder="A few lines is enough — context, where you're stuck, what you've tried."
                    className="w-full bg-transparent border-b border-line focus:border-accent outline-none py-3 transition-colors duration-300 placeholder:text-muted/50 resize-none"
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              data-cursor-hover
              className="group self-start inline-flex items-center gap-3 rounded-full bg-accent text-bg px-8 py-4 text-sm font-medium transition-transform duration-300 hover:scale-[1.04]"
            >
              Send &amp; start the conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-muted">{label}</span>
      {children}
    </label>
  );
}
