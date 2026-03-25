"use client";

import Image from "next/image";
import Link from "next/link";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <SectionAsymmetricSplit
      reverse={true}
      ratio="7-5"
      className="section-standard section-bg-gradient"
      right={
        <Reveal animation="slide-right">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop&q=80"
              alt="Pipe work by professional plumber"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </Reveal>
      }
      left={
        <Reveal animation="slide-right">
          <h2 className="type-section mb-4">
            Three Generations of Kingston Plumbing
          </h2>
          <p className="type-body-lg text-base-content/70 mb-6">
            What started as a one-man operation in 1968 has grown into
            Kingston&apos;s most trusted plumbing team. We&apos;ve re-piped
            heritage homes, modernized kitchens, and cleared drains across
            Frontenac County for over 55 years.
          </p>
          <Link href="/about" className="btn-profile-ghost">
            Learn Our Story &rarr;
          </Link>
        </Reveal>
      }
    />
  );
}
