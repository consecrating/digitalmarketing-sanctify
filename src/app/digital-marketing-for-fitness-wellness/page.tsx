import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Fitness & Wellness in Goa",
  description: "digital marketing for fitness in Goa. Sanctify offers specialized digital marketing strategies for fitness & wellness businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-fitness-wellness/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Fitness & Wellness"
      industrySlug="fitness-wellness"
      keyword="digital marketing for fitness in Goa"
    />
  );
}
