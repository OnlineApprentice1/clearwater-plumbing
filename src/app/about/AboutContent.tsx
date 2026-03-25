"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import { Award, Users, Heart } from "lucide-react";

const timelineEntries = [
  {
    year: "1968",
    title: "Buckley Plumbing Opens",
    description:
      "Harold Buckley opens a one-man plumbing shop on Princess Street. His reputation for honest pricing and quality work spreads through word of mouth.",
  },
  {
    year: "1985",
    title: "Second Generation",
    description:
      "Harold\u2019s son Jim takes over, expanding the team to five plumbers and adding heritage home re-piping as a specialty \u2014 a natural fit for Kingston\u2019s historic downtown.",
  },
  {
    year: "2005",
    title: "Clearwater Is Born",
    description:
      "Jim\u2019s son Dave rebrands to Clearwater Plumbing & Drains, adding emergency services and modern diagnostic equipment while keeping the family\u2019s core values.",
  },
  {
    year: "2018",
    title: "50 Years of Service",
    description:
      "Clearwater celebrates 50 years with a team of 12 licensed plumbers, two service vans, and thousands of satisfied Kingston families.",
  },
  {
    year: "Today",
    title: "Still Family, Still Local",
    description:
      "Now serving Kingston, Napanee, Gananoque, and all of Frontenac County. Third-generation quality with modern equipment and the same honest pricing.",
  },
];

const values = [
  {
    icon: Award,
    title: "Transparent Pricing",
    description:
      "The quote we give is the price you pay. No hidden fees, no surprise charges, no inflated emergency rates.",
  },
  {
    icon: Users,
    title: "Family Values",
    description:
      "We treat your home the way we\u2019d treat our own. Every technician is trained in our family\u2019s standards of respect and care.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Kingston is our home. We sponsor local sports teams, volunteer at community events, and give back to the city that built our family business.",
  },
];

export default function AboutContent() {
  return (
    <main>
      {/* A) Hero Banner */}
      <section className="section-compact section-bg-gradient pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h1 className="type-hero text-center mb-4">
              Three Generations of Trusted Plumbing
            </h1>
          </Reveal>
          <Reveal animation="fade-up" delay={0.1}>
            <p className="type-body-lg text-center text-base-content/70 max-w-2xl mx-auto">
              The Buckley family has been keeping Kingston&apos;s water flowing
              since 1968.
            </p>
          </Reveal>
        </div>
      </section>

      {/* B) Owner Portrait Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal animation="fade-up">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=80"
                alt="Dave Buckley, owner of Clearwater Plumbing"
                width={500}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="type-section mb-2">Dave Buckley</h2>
              <p className="type-small text-accent mb-4 uppercase tracking-wider">
                Owner &amp; Master Plumber
              </p>
              <p className="type-body-lg text-base-content/70">
                I grew up watching my dad fix pipes in the same Kingston
                neighbourhoods where my grandfather started. When you call
                Clearwater, you&apos;re not getting a faceless corporation
                &mdash; you&apos;re getting a family that&apos;s staked its
                reputation on every job for over 55 years. I personally oversee
                every major project because your home deserves that level of
                care.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* C) Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal animation="fade-up">
          <h2 className="type-section text-center mb-12">Our Story</h2>
        </Reveal>
        <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-8">
          {timelineEntries.map((entry, i) => (
            <Reveal key={entry.year} animation="fade-up" delay={0.1 * (i + 1)}>
              <div className="relative pl-8 pb-10 last:pb-0">
                <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-1" />
                <span className="type-small text-accent font-bold">
                  {entry.year}
                </span>
                <h3 className="type-card mb-1">{entry.title}</h3>
                <p className="type-body text-base-content/70">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* D) Values Section */}
      <section className="section-standard section-bg-texture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2 className="type-section text-center mb-12">
              What We Stand For
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} animation="fade-up" delay={0.1 * (i + 1)}>
                <div className="pool-depth-card p-8 text-center">
                  <value.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="type-card mb-2">{value.title}</h3>
                  <p className="type-body text-base-content/70">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
