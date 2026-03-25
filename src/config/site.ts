/**
 * Site Configuration — Single source of truth for business details
 *
 * During scaffold (Phase 1), this file is generated with real values
 * from the intake brief. This template provides the type shape and
 * placeholder values so templates can be type-checked.
 */

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  location: {
    city: string;
    province: string;
    country: string;
    mapEmbedUrl?: string;
  };
  socials?: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Clearwater Plumbing & Drains",
  description: "Third-generation plumbing experts serving Kingston and Frontenac County since 1968. Emergency drains, heritage re-piping, water heaters, and renovations.",
  url: "https://clearwaterplumbing.ca",
  phone: "(613) 555-0187",
  email: "info@clearwaterplumbing.ca",
  location: {
    city: "Kingston",
    province: "ON",
    country: "CA",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91854.97706039498!2d-76.5738!3d44.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab0673bf0fcf%3A0x61e5e16e30017258!2sKingston%2C%20ON!5e0!3m2!1sen!2sca!4v1711234567890!5m2!1sen!2sca",
  },
};
