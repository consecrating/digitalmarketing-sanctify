import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Education & Coaching in Goa",
  description: "digital marketing for education in Goa. Sanctify offers specialized digital marketing strategies for education & coaching businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-education/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Education & Coaching"
      industrySlug="education"
      keyword="digital marketing for education in Goa"
    />
  );
}
