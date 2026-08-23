import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Finance & Insurance in Goa",
  description: "digital marketing for finance in Goa. Sanctify offers specialized digital marketing strategies for finance & insurance businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-finance/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Finance & Insurance"
      industrySlug="finance"
      keyword="digital marketing for finance in Goa"
    />
  );
}
