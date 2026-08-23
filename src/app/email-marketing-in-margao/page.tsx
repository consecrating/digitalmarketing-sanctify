import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Margao, Goa — Best Email Agency",
  description: "Looking for email services in Margao, Goa? Sanctify offers professional email marketing for businesses in Margao (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-margao/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Margao"
      locationSlug="margao"
      area="South Goa"
      keyword="email Margao Goa"
    />
  );
}
