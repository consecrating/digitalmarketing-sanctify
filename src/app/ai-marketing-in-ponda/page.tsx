import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "AI-Powered Marketing in Ponda, Goa — Best AI Marketing Agency",
  description: "Looking for ai marketing services in Ponda, Goa? Sanctify offers professional ai-powered marketing for businesses in Ponda (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/ai-marketing-in-ponda/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="AI-Powered Marketing"
      serviceSlug="ai-marketing"
      locationName="Ponda"
      locationSlug="ponda"
      area="South Goa"
      keyword="ai marketing Ponda Goa"
    />
  );
}
