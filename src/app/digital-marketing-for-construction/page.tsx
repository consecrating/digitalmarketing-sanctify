import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Construction & Interior in Goa",
  description: "digital marketing for construction in Goa. Sanctify offers specialized digital marketing strategies for construction & interior businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-construction/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Construction & Interior"
      industrySlug="construction"
      keyword="digital marketing for construction in Goa"
    />
  );
}
