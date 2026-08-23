import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Anjuna, Goa — Best Web Design Agency",
  description: "Looking for web design services in Anjuna, Goa? Sanctify offers professional web design & development for businesses in Anjuna (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-anjuna/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Anjuna"
      locationSlug="anjuna"
      area="North Goa"
      keyword="web design Anjuna Goa"
    />
  );
}
