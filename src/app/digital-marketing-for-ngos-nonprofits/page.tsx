import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for NGOs & Non-Profits in Goa",
  description: "digital marketing for NGOs in Goa. Sanctify offers specialized digital marketing strategies for ngos & non-profits businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-ngos-nonprofits/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="NGOs & Non-Profits"
      industrySlug="ngos-nonprofits"
      keyword="digital marketing for NGOs in Goa"
    />
  );
}
