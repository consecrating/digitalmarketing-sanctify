import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Panaji, Goa — Best Email Agency",
  description: "Looking for email services in Panaji, Goa? Sanctify offers professional email marketing for businesses in Panaji (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-panaji/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Panaji"
      locationSlug="panaji"
      area="North Goa"
      keyword="email Panaji Goa"
    />
  );
}
