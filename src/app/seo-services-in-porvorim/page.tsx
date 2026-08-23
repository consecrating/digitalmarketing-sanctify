import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Porvorim, Goa — Best SEO Agency",
  description: "Looking for seo services in Porvorim, Goa? Sanctify offers professional seo services for businesses in Porvorim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-porvorim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Porvorim"
      locationSlug="porvorim"
      area="North Goa"
      keyword="seo Porvorim Goa"
    />
  );
}
