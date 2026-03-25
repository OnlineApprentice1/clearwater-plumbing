"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency phone strip */}
      <div className="bg-accent/90 text-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-between h-8">
          <span className="type-caption font-semibold hidden sm:block">24/7 Emergency Plumbing Service</span>
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1.5 type-caption font-bold">
            <Phone className="w-3 h-3" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="backdrop-blur-md bg-base-100/80 border-b border-base-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="type-card text-primary font-bold">
            {siteConfig.name}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="type-small text-base-content/70 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-profile">Get a Free Estimate</Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-base-100/95 backdrop-blur-md border-b border-base-300/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className="type-body text-base-content/70 hover:text-primary transition-colors py-2">{link.label}</Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-profile w-fit">Get a Free Estimate</Link>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 type-small text-accent font-semibold py-2">
                <Phone className="w-4 h-4" />
                {siteConfig.phone} — 24/7 Emergency
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
