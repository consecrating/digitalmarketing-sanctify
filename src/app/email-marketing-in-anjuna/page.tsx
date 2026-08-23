import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Anjuna, Goa — Best Email Agency",
  description: "Looking for email services in Anjuna, Goa? Sanctify offers professional email marketing for businesses in Anjuna (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-anjuna/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Anjuna"
      locationSlug="anjuna"
      area="North Goa"
      keyword="email Anjuna Goa"
    />
  );
}
