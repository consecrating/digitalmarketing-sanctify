import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Panaji, Goa — Best Content Agency",
  description: "Looking for content services in Panaji, Goa? Sanctify offers professional content marketing for businesses in Panaji (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-panaji/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Panaji"
      locationSlug="panaji"
      area="North Goa"
      keyword="content Panaji Goa"
    />
  );
}
