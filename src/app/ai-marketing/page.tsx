import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI-Powered Marketing in Goa — AI marketing agency Goa",
  description: "Leverage AI for predictive analytics, automated campaigns, GEO/AEO optimization — get cited by ChatGPT, Gemini & Perplexity. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted AI Marketing partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/ai-marketing/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="AI-Powered Marketing"
      keyword="AI marketing agency Goa"
      description="Leverage AI for predictive analytics, automated campaigns, GEO/AEO optimization — get cited by ChatGPT, Gemini & Perplexity."
      slug="ai-marketing"
    />
  );
}
