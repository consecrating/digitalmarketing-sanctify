import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Goa — SEO company in Goa",
  description: "Search engine optimization to rank your business #1 on Google. Technical SEO, local SEO, link building, and content optimization. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted SEO partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="SEO Services"
      keyword="SEO company in Goa"
      description="Search engine optimization to rank your business #1 on Google. Technical SEO, local SEO, link building, and content optimization."
      slug="seo-services"
    />
  );
}
