import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Real Estate in Goa",
  description: "digital marketing for real estate in Goa. Sanctify offers specialized digital marketing strategies for real estate businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-real-estate/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Real Estate"
      industrySlug="real-estate"
      keyword="digital marketing for real estate in Goa"
    />
  );
}
