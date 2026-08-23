import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Vasco da Gama, Goa — Best SEO Agency",
  description: "Looking for seo services in Vasco da Gama, Goa? Sanctify offers professional seo services for businesses in Vasco da Gama (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-vasco/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Vasco da Gama"
      locationSlug="vasco"
      area="South Goa"
      keyword="seo Vasco da Gama Goa"
    />
  );
}
