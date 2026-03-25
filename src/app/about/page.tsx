import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Three generations of plumbing expertise in Kingston, Ontario. Meet the Buckley family and learn our story since 1968.",
};

export default function AboutPage() {
  return <AboutContent />;
}
