import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Anjuna, Goa — Best Content Agency",
  description: "Looking for content services in Anjuna, Goa? Sanctify offers professional content marketing for businesses in Anjuna (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-anjuna/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Anjuna"
      locationSlug="anjuna"
      area="North Goa"
      keyword="content Anjuna Goa"
    />
  );
}
