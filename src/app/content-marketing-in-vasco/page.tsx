import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Content Marketing in Vasco da Gama, Goa — Best Content Agency",
  description: "Looking for content services in Vasco da Gama, Goa? Sanctify offers professional content marketing for businesses in Vasco da Gama (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/content-marketing-in-vasco/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Content Marketing"
      serviceSlug="content-marketing"
      locationName="Vasco da Gama"
      locationSlug="vasco"
      area="South Goa"
      keyword="content Vasco da Gama Goa"
    />
  );
}
