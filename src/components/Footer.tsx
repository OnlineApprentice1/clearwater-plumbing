import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const services = [
  "Emergency Drain Clearing",
  "Water Heater Installation",
  "Heritage Home Re-piping",
  "Bathroom & Kitchen Renos",
  "Backflow Prevention",
];

const serviceAreas = ["Kingston", "Napanee", "Gananoque", "Frontenac County"];

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      {/* Water divider line */}
      <div className="water-divider" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="type-card text-primary mb-3">{siteConfig.name}</h3>
            <p className="type-small text-base-content/70 max-w-xs mb-4">{siteConfig.description}</p>
            <div className="flex items-center gap-2 badge-label">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Certified Backflow Tester</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="type-small font-bold uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="type-small text-base-content/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="type-small text-base-content/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="type-small text-base-content/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="type-small text-base-content/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="type-small font-bold uppercase tracking-wider mb-3">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="type-small text-base-content/70 hover:text-primary transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="type-small font-bold uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-3 type-small text-base-content/70">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                {siteConfig.location.city}, {siteConfig.location.province}
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="badge-label">{area}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-base-300 flex flex-col sm:flex-row justify-between items-center gap-4 type-caption text-base-content/50">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
