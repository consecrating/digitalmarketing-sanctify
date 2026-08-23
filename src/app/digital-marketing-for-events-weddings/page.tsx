import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Events & Weddings in Goa",
  description: "digital marketing for events in Goa. Sanctify offers specialized digital marketing strategies for events & weddings businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/digital-marketing-for-events-weddings/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="Events & Weddings"
      industrySlug="events-weddings"
      keyword="digital marketing for events in Goa"
    />
  );
}
