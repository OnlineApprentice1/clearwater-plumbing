"use client";

import SectionZigzag from "@/components/layouts/SectionZigzag";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "1",
    title: "Call Us",
    description:
      "Reach us by phone or our online form. Describe your plumbing issue and we\u2019ll schedule a visit \u2014 often the same day.",
  },
  {
    number: "2",
    title: "Free Assessment",
    description:
      "Our technician inspects the issue on-site and explains exactly what\u2019s wrong. No guesswork, no jargon.",
  },
  {
    number: "3",
    title: "Transparent Quote",
    description:
      "You get a written quote before any work begins. The price we quote is the price you pay \u2014 guaranteed.",
  },
  {
    number: "4",
    title: "Expert Repair",
    description:
      "Our licensed plumbers complete the work to code, clean up, and walk you through everything we\u2019ve done.",
  },
];

export default function ProcessSection() {
  const items = steps.map((step, i) => ({
    visual: (
      <Reveal animation="clip-reveal" delay={i * 0.12}>
        <div className="flex items-center justify-center">
          <span
            className="type-hero text-primary/10"
            style={{ fontSize: "clamp(6rem, 15vw, 12rem)" }}
          >
            {step.number}
          </span>
        </div>
      </Reveal>
    ),
    content: (
      <Reveal animation="clip-reveal" delay={i * 0.12}>
        <div>
          <h3 className="type-card mb-3">{step.title}</h3>
          <p className="type-body text-base-content/70">{step.description}</p>
        </div>
      </Reveal>
    ),
  }));

  return (
    <div className="section-compact section-bg-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal animation="clip-reveal">
          <h2 className="type-section text-center mb-4">How We Work</h2>
        </Reveal>
        <Reveal animation="clip-reveal" delay={0.08}>
          <p className="type-body-lg text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            Four simple steps from call to completion. No surprises.
          </p>
        </Reveal>
      </div>
      <SectionZigzag items={items} gap="standard" />
    </div>
  );
}
