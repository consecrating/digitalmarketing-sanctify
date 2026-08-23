import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing in Goa — social media marketing agency Goa",
  description: "Strategic social media management across Facebook, Instagram, LinkedIn & YouTube. Content creation, community management, and paid campaigns. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Social Media partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/social-media-marketing/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Social Media Marketing"
      keyword="social media marketing agency Goa"
      description="Strategic social media management across Facebook, Instagram, LinkedIn & YouTube. Content creation, community management, and paid campaigns."
      slug="social-media-marketing"
    />
  );
}
