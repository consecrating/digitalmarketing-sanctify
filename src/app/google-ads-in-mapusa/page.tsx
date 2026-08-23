import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Mapusa, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Mapusa, Goa? Sanctify offers professional google ads management for businesses in Mapusa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-mapusa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Mapusa"
      locationSlug="mapusa"
      area="North Goa"
      keyword="google ads Mapusa Goa"
    />
  );
}
