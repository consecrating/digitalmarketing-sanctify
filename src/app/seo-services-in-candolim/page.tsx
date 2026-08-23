import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Candolim, Goa — Best SEO Agency",
  description: "Looking for seo services in Candolim, Goa? Sanctify offers professional seo services for businesses in Candolim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/seo-services-in-candolim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="SEO Services"
      serviceSlug="seo-services"
      locationName="Candolim"
      locationSlug="candolim"
      area="North Goa"
      keyword="seo Candolim Goa"
    />
  );
}
