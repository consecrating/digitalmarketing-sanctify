import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Ponda, Goa — Best Email Agency",
  description: "Looking for email services in Ponda, Goa? Sanctify offers professional email marketing for businesses in Ponda (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-ponda/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Ponda"
      locationSlug="ponda"
      area="South Goa"
      keyword="email Ponda Goa"
    />
  );
}
