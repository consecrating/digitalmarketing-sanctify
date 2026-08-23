import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Vasco da Gama, Goa — Best Google Ads Agency",
  description: "Looking for google ads services in Vasco da Gama, Goa? Sanctify offers professional google ads management for businesses in Vasco da Gama (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads-in-vasco/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Google Ads Management"
      serviceSlug="google-ads"
      locationName="Vasco da Gama"
      locationSlug="vasco"
      area="South Goa"
      keyword="google ads Vasco da Gama Goa"
    />
  );
}
