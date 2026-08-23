import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing in Margao, Goa — Best Social Media Agency",
  description: "Looking for social media services in Margao, Goa? Sanctify offers professional social media marketing for businesses in Margao (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/social-media-marketing-in-margao/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Social Media Marketing"
      serviceSlug="social-media-marketing"
      locationName="Margao"
      locationSlug="margao"
      area="South Goa"
      keyword="social media Margao Goa"
    />
  );
}
