"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/thinking", label: "Thinking" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight font-medium" data-cursor-hover>
          Zaki Ul Hassan
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-cursor-hover
              className={`text-sm tracking-wide transition-colors relative group ${
                pathname === l.href ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/start-a-project"
            data-cursor-hover
            className="text-sm border border-fg/20 rounded-full px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>

        <button
          className="md:hidden text-sm tracking-wide"
          onClick={() => setOpen((v) => !v)}
          data-cursor-hover
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-bg"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-2xl font-display">
                  {l.label}
                </Link>
              ))}
              <Link href="/start-a-project" className="text-2xl font-display text-accent">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
