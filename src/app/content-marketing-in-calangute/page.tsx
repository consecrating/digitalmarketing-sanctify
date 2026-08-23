import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Calangute, Goa — Best Content Agency",
  description: "Looking for content services in Calangute, Goa? Sanctify offers professional content marketing for businesses in Calangute (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-calangute/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Calangute"
      locationSlug="calangute"
      area="North Goa"
      keyword="content Calangute Goa"
    />
  );
}
