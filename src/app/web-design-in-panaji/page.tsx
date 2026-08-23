import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Panaji, Goa — Best Web Design Agency",
  description: "Looking for web design services in Panaji, Goa? Sanctify offers professional web design & development for businesses in Panaji (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-panaji/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Panaji"
      locationSlug="panaji"
      area="North Goa"
      keyword="web design Panaji Goa"
    />
  );
}
