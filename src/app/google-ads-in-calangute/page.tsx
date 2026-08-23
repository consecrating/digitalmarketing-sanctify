import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Calangute, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Calangute, Goa? Sanctify offers professional google ads management for businesses in Calangute (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-calangute/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Calangute"
      locationSlug="calangute"
      area="North Goa"
      keyword="google ads Calangute Goa"
    />
  );
}
