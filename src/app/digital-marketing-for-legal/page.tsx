import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Legal Services in Goa",
  description: "digital marketing for lawyers in Goa. Sanctify offers specialized digital marketing strategies for legal services businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-legal/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Legal Services"
      industrySlug="legal"
      keyword="digital marketing for lawyers in Goa"
    />
  );
}
