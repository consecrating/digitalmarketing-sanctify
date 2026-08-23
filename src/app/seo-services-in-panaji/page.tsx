import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Panaji, Goa — Best SEO Agency",
  description: "Looking for seo services in Panaji, Goa? Sanctify offers professional seo services for businesses in Panaji (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-panaji/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Panaji"
      locationSlug="panaji"
      area="North Goa"
      keyword="seo Panaji Goa"
    />
  );
}
