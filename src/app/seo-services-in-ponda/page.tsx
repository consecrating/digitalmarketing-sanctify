import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Ponda, Goa — Best SEO Agency",
  description: "Looking for seo services in Ponda, Goa? Sanctify offers professional seo services for businesses in Ponda (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-ponda/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Ponda"
      locationSlug="ponda"
      area="South Goa"
      keyword="seo Ponda Goa"
    />
  );
}
