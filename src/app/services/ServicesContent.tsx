"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  AlertTriangle,
  Flame,
  Home,
  Bath,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Emergency Drain Clearing",
    icon: AlertTriangle,
    tab: "Emergency",
    description:
      "When drains back up at 2 AM, we answer. Our emergency team responds across Kingston within 30 minutes, equipped to handle blocked drains, sewer backups, and burst pipes.",
    features: [
      "24/7 emergency response",
      "Camera inspection included",
      "Hydro-jetting for stubborn clogs",
      "Sewer line locating",
      "Same-day resolution guarantee",
    ],
  },
  {
    name: "Water Heater Installation",
    icon: Flame,
    tab: "Water Heaters",
    description:
      "Whether you need a new tank, a tankless upgrade, or a repair to your existing unit, we install and service all major brands with proper permits and inspections.",
    features: [
      "Tank and tankless options",
      "Energy-efficiency assessment",
      "Proper venting and gas lines",
      "Manufacturer warranty support",
      "Annual maintenance plans",
    ],
  },
  {
    name: "Heritage Home Re-piping",
    icon: Home,
    tab: "Re-piping",
    description:
      "Kingston\u2019s heritage homes deserve plumbers who understand old systems. We replace aging galvanized and lead pipes with modern copper or PEX while preserving your home\u2019s character.",
    features: [
      "Lead and galvanized pipe replacement",
      "Minimal wall disruption techniques",
      "Code-compliant upgrades",
      "Heritage property experience since 1968",
      "Working with city inspectors",
    ],
  },
  {
    name: "Bathroom & Kitchen Renovations",
    icon: Bath,
    tab: "Renovations",
    description:
      "Complete plumbing for your renovation. Rough-in, fixture installation, supply lines, and drainage \u2014 all done to code with proper permits.",
    features: [
      "Full rough-in plumbing",
      "Fixture selection guidance",
      "Supply line installation",
      "Drainage reconfiguration",
      "Building code compliance",
    ],
  },
  {
    name: "Backflow Prevention",
    icon: ShieldCheck,
    tab: "Backflow",
    description:
      "Certified backflow device testing and installation. Protect your family\u2019s drinking water from contamination with annual testing and proper device maintenance.",
    features: [
      "Annual testing certification",
      "Device installation and repair",
      "Cross-connection surveys",
      "Municipal compliance reports",
      "Emergency device replacement",
    ],
  },
];

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState(0);

  const activeService = services[activeTab];
  const Icon = activeService.icon;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Hero Banner */}
      <section className="section-compact section-bg-gradient pt-32">
        <Reveal animation="fade-up">
          <h1 className="type-hero text-center mb-4">
            Our Plumbing Services
          </h1>
          <p className="type-body-lg text-center text-base-content/70 max-w-2xl mx-auto">
            From emergency repairs to full renovations — transparent pricing on
            every job.
          </p>
        </Reveal>
      </section>

      {/* Tab Bar */}
      <div className="flex flex-row overflow-x-auto gap-1 sm:gap-2 mt-12 mb-8 border-b border-base-content/10">
        {services.map((service, index) => (
          <button
            key={service.name}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap px-4 py-3 text-sm sm:text-base font-medium transition-colors ${
              activeTab === index
                ? "text-primary border-b-2 border-primary"
                : "text-base-content/60 hover:text-base-content/80"
            }`}
          >
            {service.tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Reveal animation="fade-up" key={activeTab}>
        <div className="pool-depth-card p-8 md:p-12">
          <Icon className="w-12 h-12 text-accent mb-6" />
          <h2 className="type-section mb-4">{activeService.name}</h2>
          <p className="type-body-lg text-base-content/70 mb-6">
            {activeService.description}
          </p>
          <h3 className="type-card mb-3">What&apos;s Included</h3>
          <ul className="space-y-2 mb-8">
            {activeService.features.map((feature) => (
              <li
                key={feature}
                className="type-body text-base-content/70 flex items-start gap-2"
              >
                <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn-profile inline-flex items-center gap-2 mt-8"
          >
            Request This Service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
