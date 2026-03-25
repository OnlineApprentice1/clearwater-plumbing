import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free plumbing estimate. 24/7 emergency service in Kingston, Napanee, Gananoque, and Frontenac County. Call (613) 555-0187.",
};

export default function ContactPage() {
  return <ContactContent />;
}
