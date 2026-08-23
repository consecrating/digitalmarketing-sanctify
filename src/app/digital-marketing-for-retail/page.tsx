import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Retail & E-commerce in Goa",
  description: "digital marketing for retail in Goa. Sanctify offers specialized digital marketing strategies for retail & e-commerce businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-retail/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Retail & E-commerce"
      industrySlug="retail"
      keyword="digital marketing for retail in Goa"
    />
  );
}
