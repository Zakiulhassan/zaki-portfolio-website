import Hero from "@/components/home/Hero";
import ProblemMirror from "@/components/home/ProblemMirror";
import Positioning from "@/components/home/Positioning";
import Method from "@/components/home/Method";
import SelectedWork from "@/components/home/SelectedWork";
import Insights from "@/components/home/Insights";
import ServicesPreview from "@/components/home/ServicesPreview";
import Proof from "@/components/home/Proof";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemMirror />
      <Positioning />
      <Method />
      <SelectedWork />
      <Insights />
      <ServicesPreview />
      <Proof />
      <FinalCTA />
    </>
  );
}
