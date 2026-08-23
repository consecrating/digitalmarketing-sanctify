import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Margao, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Margao, Goa? Sanctify offers professional google ads management for businesses in Margao (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-margao/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Margao"
      locationSlug="margao"
      area="South Goa"
      keyword="google ads Margao Goa"
    />
  );
}
