import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Automotive in Goa",
  description: "digital marketing for automotive in Goa. Sanctify offers specialized digital marketing strategies for automotive businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-automotive/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Automotive"
      industrySlug="automotive"
      keyword="digital marketing for automotive in Goa"
    />
  );
}
