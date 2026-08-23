import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "AI-Powered Marketing in Vasco da Gama, Goa — Best AI Marketing Agency",
  description: "Looking for ai marketing services in Vasco da Gama, Goa? Sanctify offers professional ai-powered marketing for businesses in Vasco da Gama (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/ai-marketing-in-vasco/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="AI-Powered Marketing"
      serviceSlug="ai-marketing"
      locationName="Vasco da Gama"
      locationSlug="vasco"
      area="South Goa"
      keyword="ai marketing Vasco da Gama Goa"
    />
  );
}
