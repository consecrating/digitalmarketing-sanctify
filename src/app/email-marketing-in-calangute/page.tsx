import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Calangute, Goa — Best Email Agency",
  description: "Looking for email services in Calangute, Goa? Sanctify offers professional email marketing for businesses in Calangute (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-calangute/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Calangute"
      locationSlug="calangute"
      area="North Goa"
      keyword="email Calangute Goa"
    />
  );
}
