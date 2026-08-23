import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Candolim, Goa — Best Content Agency",
  description: "Looking for content services in Candolim, Goa? Sanctify offers professional content marketing for businesses in Candolim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-candolim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Candolim"
      locationSlug="candolim"
      area="North Goa"
      keyword="content Candolim Goa"
    />
  );
}
