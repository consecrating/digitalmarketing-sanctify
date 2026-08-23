import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Mapusa, Goa — Best Web Design Agency",
  description: "Looking for web design services in Mapusa, Goa? Sanctify offers professional web design & development for businesses in Mapusa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-mapusa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Mapusa"
      locationSlug="mapusa"
      area="North Goa"
      keyword="web design Mapusa Goa"
    />
  );
}
