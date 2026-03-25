"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import Reveal from "@/components/Reveal";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <div ref={sectionRef} className="section-spacious relative pt-32 overflow-hidden">
      {/* Water caustic background with parallax */}
      <motion.div
        className="water-caustic absolute inset-0 -z-10"
        style={prefersReducedMotion ? undefined : { y: parallaxY }}
        aria-hidden="true"
      />

      <SectionAsymmetricSplit
        ratio="7-5"
        left={
          <Reveal animation="blur-sharpen">
            <div className="glass-panel rounded-2xl p-8 md:p-10 lg:p-12">
              <h1 className="type-hero mb-6">
                Clear Drains. Clean Water. Kingston&apos;s Trusted Plumbers.
              </h1>
              <p className="type-body-lg text-base-content/70 mb-8 max-w-xl">
                Third-generation plumbing experts serving Kingston and Frontenac
                County since 1968. Emergency response. Transparent pricing.
                Heritage home specialists.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-profile">
                  Get a Free Estimate
                </Link>
                <a href="tel:6135550187" className="btn-profile-ghost">
                  Call (613) 555-0187
                </a>
              </div>
            </div>
          </Reveal>
        }
        right={
          <Reveal animation="blur-sharpen" delay={0.2}>
            <div className="rounded-xl overflow-hidden border-4 border-primary">
              <Image
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=80"
                alt="Modern bathroom fixtures installed by Clearwater Plumbing"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </Reveal>
        }
      />
    </div>
  );
}
