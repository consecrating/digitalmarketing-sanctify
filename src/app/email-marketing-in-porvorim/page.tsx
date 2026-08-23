import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Email Marketing in Porvorim, Goa — Best Email Agency",
  description: "Looking for email services in Porvorim, Goa? Sanctify offers professional email marketing for businesses in Porvorim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/email-marketing-in-porvorim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Email Marketing"
      serviceSlug="email-marketing"
      locationName="Porvorim"
      locationSlug="porvorim"
      area="North Goa"
      keyword="email Porvorim Goa"
    />
  );
}
