import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Margao, Goa — Best Content Agency",
  description: "Looking for content services in Margao, Goa? Sanctify offers professional content marketing for businesses in Margao (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-margao/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Margao"
      locationSlug="margao"
      area="South Goa"
      keyword="content Margao Goa"
    />
  );
}
