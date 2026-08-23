import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for IT Companies in Goa",
  description: "digital marketing for IT companies in Goa. Sanctify offers specialized digital marketing strategies for it companies businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-it-companies/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="IT Companies"
      industrySlug="it-companies"
      keyword="digital marketing for IT companies in Goa"
    />
  );
}
