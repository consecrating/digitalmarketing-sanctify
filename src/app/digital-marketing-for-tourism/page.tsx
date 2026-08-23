import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Tourism & Travel in Goa",
  description: "digital marketing for tourism in Goa. Sanctify offers specialized digital marketing strategies for tourism & travel businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-tourism/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Tourism & Travel"
      industrySlug="tourism"
      keyword="digital marketing for tourism in Goa"
    />
  );
}
