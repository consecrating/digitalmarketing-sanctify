import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Restaurants & Cafes in Goa",
  description: "digital marketing for restaurants in Goa. Sanctify offers specialized digital marketing strategies for restaurants & cafes businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-restaurants-cafes/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Restaurants & Cafes"
      industrySlug="restaurants-cafes"
      keyword="digital marketing for restaurants in Goa"
    />
  );
}
