import type { Metadata } from "next";
import { Contact as ContactSection } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Sanctify — Digital Marketing Agency in Goa",
  description: "Contact Sanctify for a free digital marketing consultation. Office: Zuarinagar, Goa. Call +91 9923352923. Email help@sanctify.in. Offices in Goa, Italy & Varanasi.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/contact/" },
};

export default function ContactPage() {
  return <ContactSection />;
}
