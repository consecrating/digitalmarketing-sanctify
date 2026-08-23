import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Old Goa, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Old Goa, Goa? Sanctify offers professional google ads management for businesses in Old Goa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-old-goa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Old Goa"
      locationSlug="old-goa"
      area="North Goa"
      keyword="google ads Old Goa Goa"
    />
  );
}
