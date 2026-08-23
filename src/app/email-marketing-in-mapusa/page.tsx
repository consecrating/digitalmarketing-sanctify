import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Mapusa, Goa — Best Email Agency",
  description: "Looking for email services in Mapusa, Goa? Sanctify offers professional email marketing for businesses in Mapusa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-mapusa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Mapusa"
      locationSlug="mapusa"
      area="North Goa"
      keyword="email Mapusa Goa"
    />
  );
}
