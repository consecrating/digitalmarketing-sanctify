import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Porvorim, Goa — Best Web Design Agency",
  description: "Looking for web design services in Porvorim, Goa? Sanctify offers professional web design & development for businesses in Porvorim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-porvorim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Porvorim"
      locationSlug="porvorim"
      area="North Goa"
      keyword="web design Porvorim Goa"
    />
  );
}
