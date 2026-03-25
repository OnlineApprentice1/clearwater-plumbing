import Link from "next/link";
import { Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="section-spacious section-bg-deep text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="water-divider max-w-xs mx-auto mb-16"
          aria-hidden="true"
        />
        <h2 className="type-section mb-6">Ready for Reliable Plumbing?</h2>
        <p className="type-body-lg text-base-content/70 mb-8 max-w-xl mx-auto">
          Whether it&rsquo;s an emergency at midnight or a renovation
          you&rsquo;ve been planning for months, we&rsquo;re here. Get a free
          estimate with transparent pricing — no surprises, no hidden fees.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-profile ripple-hover">
            Get a Free Estimate
          </Link>
          <a
            href="tel:6135550187"
            className="btn-profile-ghost flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            (613) 555-0187
          </a>
        </div>
      </div>
    </section>
  );
}
