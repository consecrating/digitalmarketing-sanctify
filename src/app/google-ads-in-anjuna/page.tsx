import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Anjuna, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Anjuna, Goa? Sanctify offers professional google ads management for businesses in Anjuna (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-anjuna/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Anjuna"
      locationSlug="anjuna"
      area="North Goa"
      keyword="google ads Anjuna Goa"
    />
  );
}
