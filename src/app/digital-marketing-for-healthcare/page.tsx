import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Healthcare & Clinics in Goa",
  description: "digital marketing for healthcare in Goa. Sanctify offers specialized digital marketing strategies for healthcare & clinics businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-healthcare/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Healthcare & Clinics"
      industrySlug="healthcare"
      keyword="digital marketing for healthcare in Goa"
    />
  );
}
