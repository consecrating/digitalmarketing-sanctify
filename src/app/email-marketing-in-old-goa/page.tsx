import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Old Goa, Goa — Best Email Agency",
  description: "Looking for email services in Old Goa, Goa? Sanctify offers professional email marketing for businesses in Old Goa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-old-goa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Old Goa"
      locationSlug="old-goa"
      area="North Goa"
      keyword="email Old Goa Goa"
    />
  );
}
