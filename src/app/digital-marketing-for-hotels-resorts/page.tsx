import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Hotels & Resorts in Goa",
  description: "digital marketing for hotels in Goa. Sanctify offers specialized digital marketing strategies for hotels & resorts businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-hotels-resorts/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Hotels & Resorts"
      industrySlug="hotels-resorts"
      keyword="digital marketing for hotels in Goa"
    />
  );
}
