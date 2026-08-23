import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Candolim, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Candolim, Goa? Sanctify offers professional google ads management for businesses in Candolim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-candolim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Candolim"
      locationSlug="candolim"
      area="North Goa"
      keyword="google ads Candolim Goa"
    />
  );
}
