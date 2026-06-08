import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StartForm from "@/components/StartForm";

export const metadata: Metadata = {
  title: "Start a Project — Zaki Ul Hassan",
  description: "Let's diagnose what your brand or product experience needs next. A guided way to start a project.",
};

export default function StartProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Let's diagnose what your brand or product experience needs next."
        subtitle="No long briefs required. Tell me roughly where you are, and I'll reply with how I'd approach it — and whether a clarity call makes sense first."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <StartForm />
        </div>
      </section>
    </>
  );
}
