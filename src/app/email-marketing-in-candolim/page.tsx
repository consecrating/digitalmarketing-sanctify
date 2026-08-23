import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Candolim, Goa — Best Email Agency",
  description: "Looking for email services in Candolim, Goa? Sanctify offers professional email marketing for businesses in Candolim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-candolim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Candolim"
      locationSlug="candolim"
      area="North Goa"
      keyword="email Candolim Goa"
    />
  );
}
