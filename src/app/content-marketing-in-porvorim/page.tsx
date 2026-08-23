import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Porvorim, Goa — Best Content Agency",
  description: "Looking for content services in Porvorim, Goa? Sanctify offers professional content marketing for businesses in Porvorim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-porvorim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Porvorim"
      locationSlug="porvorim"
      area="North Goa"
      keyword="content Porvorim Goa"
    />
  );
}
