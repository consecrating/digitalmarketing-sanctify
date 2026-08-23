import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Porvorim, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Porvorim, Goa? Sanctify offers professional google ads management for businesses in Porvorim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-porvorim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Porvorim"
      locationSlug="porvorim"
      area="North Goa"
      keyword="google ads Porvorim Goa"
    />
  );
}
