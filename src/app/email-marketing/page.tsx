import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Goa — email marketing services Goa",
  description: "Personalized email campaigns for conversion, retention and nurturing. Automated workflows, newsletters, and drip campaigns. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Email partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Email Marketing"
      keyword="email marketing services Goa"
      description="Personalized email campaigns for conversion, retention and nurturing. Automated workflows, newsletters, and drip campaigns."
      slug="email-marketing"
    />
  );
}
