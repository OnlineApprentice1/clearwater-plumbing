import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import WaveDivider from "@/components/effects/WaveDivider";

const AboutPreview = dynamic(() => import("@/components/home/AboutPreview"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const ProcessSection = dynamic(() => import("@/components/home/ProcessSection"));
const CtaSection = dynamic(() => import("@/components/home/CtaSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaveDivider color="oklch(0.55 0.15 220)" variant="sharp" />

      <AboutPreview />
      <WaveDivider color="oklch(0.72 0.12 175)" variant="gentle" flip />

      <ServicesSection />
      <WaveDivider color="oklch(0.45 0.07 220)" variant="organic" />

      <TestimonialsSection />
      <WaveDivider color="oklch(0.55 0.15 220)" variant="sharp" flip />

      <ProcessSection />
      <WaveDivider color="oklch(0.72 0.12 175)" variant="gentle" />

      <CtaSection />
    </>
  );
}
