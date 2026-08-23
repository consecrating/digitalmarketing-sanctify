import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "AI-Powered Marketing in Mapusa, Goa — Best AI Marketing Agency",
  description: "Looking for ai marketing services in Mapusa, Goa? Sanctify offers professional ai-powered marketing for businesses in Mapusa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/ai-marketing-in-mapusa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="AI-Powered Marketing"
      serviceSlug="ai-marketing"
      locationName="Mapusa"
      locationSlug="mapusa"
      area="North Goa"
      keyword="ai marketing Mapusa Goa"
    />
  );
}
