import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Anjuna, Goa — Best SEO Agency",
  description: "Looking for seo services in Anjuna, Goa? Sanctify offers professional seo services for businesses in Anjuna (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-anjuna/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Anjuna"
      locationSlug="anjuna"
      area="North Goa"
      keyword="seo Anjuna Goa"
    />
  );
}
