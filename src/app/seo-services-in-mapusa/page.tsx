import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Mapusa, Goa — Best SEO Agency",
  description: "Looking for seo services in Mapusa, Goa? Sanctify offers professional seo services for businesses in Mapusa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-mapusa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Mapusa"
      locationSlug="mapusa"
      area="North Goa"
      keyword="seo Mapusa Goa"
    />
  );
}
