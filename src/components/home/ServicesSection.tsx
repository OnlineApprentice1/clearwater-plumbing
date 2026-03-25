"use client";

import SectionBentoGrid from "@/components/layouts/SectionBentoGrid";
import Reveal from "@/components/Reveal";
import { AlertTriangle, Flame, Home, Bath, ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Drain Clearing",
    description:
      "24/7 emergency response across Kingston. Blocked drains, sewer backups, and burst pipes — we're there when you need us most.",
    featured: true,
    link: { href: "/contact", label: "Get Emergency Help →" },
  },
  {
    icon: Flame,
    title: "Water Heater Installation",
    description:
      "Tank and tankless water heater installation, repair, and maintenance. Energy-efficient options for every budget.",
  },
  {
    icon: Home,
    title: "Heritage Home Re-piping",
    description:
      "Specialists in updating plumbing in Kingston's pre-1950s heritage homes while preserving their character.",
  },
  {
    icon: Bath,
    title: "Bathroom & Kitchen Renovations",
    description:
      "Complete plumbing for your renovation project. Rough-in, fixture installation, and code compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Backflow Prevention & Testing",
    description:
      "Certified backflow testing and device installation. Protect your family's water supply.",
  },
];

export default function ServicesSection() {
  return (
    <div className="section-standard section-bg-deep">
      <h2 className="type-section text-center mb-4">Our Plumbing Services</h2>
      <p className="type-body-lg text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
        From emergency drain clearing to heritage home re-piping, we handle
        every job with precision and transparent pricing.
      </p>

      <SectionBentoGrid columns={3}>
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} animation="fade-up" delay={i * 0.1}>
              <div
                className={`pool-depth-card${
                  service.featured ? " lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="type-card mb-2">{service.title}</h3>
                <p className="type-body text-base-content/70">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    href={service.link.href}
                    className="inline-block mt-4 type-small text-accent hover:text-primary transition-colors"
                  >
                    {service.link.label}
                  </Link>
                )}
              </div>
            </Reveal>
          );
        })}
      </SectionBentoGrid>
    </div>
  );
}
