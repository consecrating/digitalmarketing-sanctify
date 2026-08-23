import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Margao, Goa — Best SEO Agency",
  description: "Looking for seo services in Margao, Goa? Sanctify offers professional seo services for businesses in Margao (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-margao/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Margao"
      locationSlug="margao"
      area="South Goa"
      keyword="seo Margao Goa"
    />
  );
}
