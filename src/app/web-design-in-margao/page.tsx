import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Margao, Goa — Best Web Design Agency",
  description: "Looking for web design services in Margao, Goa? Sanctify offers professional web design & development for businesses in Margao (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-margao/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Margao"
      locationSlug="margao"
      area="South Goa"
      keyword="web design Margao Goa"
    />
  );
}
