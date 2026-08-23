import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Old Goa, Goa — Best Content Agency",
  description: "Looking for content services in Old Goa, Goa? Sanctify offers professional content marketing for businesses in Old Goa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-old-goa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Old Goa"
      locationSlug="old-goa"
      area="North Goa"
      keyword="content Old Goa Goa"
    />
  );
}
