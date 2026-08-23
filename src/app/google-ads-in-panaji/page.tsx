import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Panaji, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Panaji, Goa? Sanctify offers professional google ads management for businesses in Panaji (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-panaji/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Panaji"
      locationSlug="panaji"
      area="North Goa"
      keyword="google ads Panaji Goa"
    />
  );
}
