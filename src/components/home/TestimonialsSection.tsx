"use client";

import { Star } from "lucide-react";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import Reveal from "@/components/Reveal";

export default function TestimonialsSection() {
  return (
    <SectionFullBleed
      background={<div className="section-bg-texture absolute inset-0" />}
      contentPosition="center"
      minHeight="min-h-[50vh]"
      className="section-standard"
    >
      <Reveal animation="scale-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="type-section text-center mb-12">
            What Kingston Homeowners Say
          </h2>

          <div className="glass-panel p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-accent fill-accent"
                />
              ))}
            </div>

            <blockquote className="type-body-lg text-base-content/80 mb-8 italic">
              &ldquo;We had a burst pipe in our 1920s home at 2 AM. Clearwater
              had someone at our door within 30 minutes. They not only fixed the
              emergency but explained exactly what our old pipes needed
              long-term. The quote they gave us was the exact price we paid
              &mdash; no surprises. Best plumbing experience we&rsquo;ve ever
              had.&rdquo;
            </blockquote>

            <cite className="type-small text-base-content/60 not-italic block">
              &mdash; Sarah &amp; Mike T., Sydenham Ward, Kingston
            </cite>
          </div>
        </div>
      </Reveal>
    </SectionFullBleed>
  );
}
