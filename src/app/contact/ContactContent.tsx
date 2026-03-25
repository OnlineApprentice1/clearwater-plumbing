"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please call us directly.");
    }
  }

  const inputClasses =
    "w-full rounded-lg bg-base-100 border border-base-300 px-4 py-3 type-body text-base-content focus:border-primary focus:outline-none transition-colors";
  const labelClasses = "type-small text-base-content/70 mb-1 block";

  return (
    <main>
      {/* Hero Banner */}
      <section className="section-compact section-bg-gradient pt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h1 className="type-hero text-center mb-4">Contact Us</h1>
            <p className="type-body-lg text-center text-base-content/70 max-w-2xl mx-auto">
              Whether it&apos;s a burst pipe at 2 AM or a kitchen renovation
              you&apos;ve been planning for months, we&apos;re here to help.
            </p>
          </Reveal>

          {/* Emergency Banner */}
          <Reveal animation="fade-up" delay={0.1}>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8 mt-8 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-accent" />
                <span className="type-body font-semibold">
                  24/7 Emergency? Call{" "}
                </span>
                <a
                  href="tel:6135550187"
                  className="text-accent font-bold underline"
                >
                  (613) 555-0187
                </a>
                <span className="type-body">
                  {" "}
                  — we respond within 30 minutes
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Split Layout: Form + Map */}
      <section className="section-standard">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT — Contact Form */}
            <Reveal animation="fade-up" delay={0.1}>
              <div className="pool-depth-card p-8">
                <h2 className="type-section mb-6">Get a Free Estimate</h2>

                {status === "success" && (
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
                    <p className="type-body text-success">{statusMessage}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-error/10 border border-error/20 rounded-lg p-4 mb-6">
                    <p className="type-body text-error">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="(613) 555-0000"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClasses}>
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={inputClasses}
                    >
                      <option value="">Select a service...</option>
                      <option value="emergency-drain">
                        Emergency Drain Clearing
                      </option>
                      <option value="water-heater">
                        Water Heater Installation
                      </option>
                      <option value="heritage-repiping">
                        Heritage Home Re-piping
                      </option>
                      <option value="renovations">
                        Bathroom &amp; Kitchen Renovations
                      </option>
                      <option value="backflow">
                        Backflow Prevention &amp; Testing
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="Tell us about your plumbing needs..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-profile w-full flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>

            {/* RIGHT — Map + Contact Info */}
            <Reveal animation="fade-up" delay={0.2}>
              <div className="flex flex-col gap-6">
                {/* Google Maps */}
                <iframe
                  src={siteConfig.location.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Clearwater Plumbing location"
                />

                {/* Contact Details */}
                <div className="pool-depth-card p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <a
                      href="tel:6135550187"
                      className="type-body text-base-content/70 hover:text-accent transition-colors"
                    >
                      (613) 555-0187
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <a
                      href="mailto:info@clearwaterplumbing.ca"
                      className="type-body text-base-content/70 hover:text-accent transition-colors"
                    >
                      info@clearwaterplumbing.ca
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="type-body text-base-content/70">
                      Kingston, Ontario
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="type-body text-base-content/70">
                      Mon-Fri: 7 AM - 6 PM | Emergency: 24/7
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
