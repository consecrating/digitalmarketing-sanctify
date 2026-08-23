import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Goa — content marketing agency Goa",
  description: "Strategic content that ranks and converts — blog posts, articles, infographics, video scripts. Building topical authority for your brand. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Content partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Content Marketing"
      keyword="content marketing agency Goa"
      description="Strategic content that ranks and converts — blog posts, articles, infographics, video scripts. Building topical authority for your brand."
      slug="content-marketing"
    />
  );
}
