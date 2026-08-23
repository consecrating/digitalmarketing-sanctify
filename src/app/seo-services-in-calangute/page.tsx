import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Calangute, Goa — Best SEO Agency",
  description: "Looking for seo services in Calangute, Goa? Sanctify offers professional seo services for businesses in Calangute (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-calangute/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Calangute"
      locationSlug="calangute"
      area="North Goa"
      keyword="seo Calangute Goa"
    />
  );
}
