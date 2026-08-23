import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "AI-Powered Marketing in Calangute, Goa — Best AI Marketing Agency",
  description: "Looking for ai marketing services in Calangute, Goa? Sanctify offers professional ai-powered marketing for businesses in Calangute (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/ai-marketing-in-calangute/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="AI-Powered Marketing"
      serviceSlug="ai-marketing"
      locationName="Calangute"
      locationSlug="calangute"
      area="North Goa"
      keyword="ai marketing Calangute Goa"
    />
  );
}
