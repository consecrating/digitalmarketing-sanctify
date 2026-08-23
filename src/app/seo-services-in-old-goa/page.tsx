import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Old Goa, Goa — Best SEO Agency",
  description: "Looking for seo services in Old Goa, Goa? Sanctify offers professional seo services for businesses in Old Goa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-old-goa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Old Goa"
      locationSlug="old-goa"
      area="North Goa"
      keyword="seo Old Goa Goa"
    />
  );
}
