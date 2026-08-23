import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Ponda, Goa — Best Content Agency",
  description: "Looking for content services in Ponda, Goa? Sanctify offers professional content marketing for businesses in Ponda (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-ponda/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Ponda"
      locationSlug="ponda"
      area="South Goa"
      keyword="content Ponda Goa"
    />
  );
}
