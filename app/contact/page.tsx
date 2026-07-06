import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lauren Lee via email or LinkedIn.",
};

export default function Contact() {
  return <ContactForm />;
}
