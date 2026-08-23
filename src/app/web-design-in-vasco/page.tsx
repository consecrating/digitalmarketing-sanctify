import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Vasco da Gama, Goa — Best Web Design Agency",
  description: "Looking for web design services in Vasco da Gama, Goa? Sanctify offers professional web design & development for businesses in Vasco da Gama (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-vasco/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Vasco da Gama"
      locationSlug="vasco"
      area="South Goa"
      keyword="web design Vasco da Gama Goa"
    />
  );
}
