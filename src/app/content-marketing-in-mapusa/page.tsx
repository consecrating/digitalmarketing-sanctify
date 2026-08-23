import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Mapusa, Goa — Best Content Agency",
  description: "Looking for content services in Mapusa, Goa? Sanctify offers professional content marketing for businesses in Mapusa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-mapusa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Mapusa"
      locationSlug="mapusa"
      area="North Goa"
      keyword="content Mapusa Goa"
    />
  );
}
