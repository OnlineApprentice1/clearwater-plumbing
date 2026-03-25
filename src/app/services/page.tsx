import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Plumbing Services",
  description: "Emergency drains, water heaters, heritage re-piping, bathroom renovations, and backflow prevention. Serving Kingston and Frontenac County.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
