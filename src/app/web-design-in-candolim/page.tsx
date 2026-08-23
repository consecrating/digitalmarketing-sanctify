import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Candolim, Goa — Best Web Design Agency",
  description: "Looking for web design services in Candolim, Goa? Sanctify offers professional web design & development for businesses in Candolim (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design-in-candolim/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Web Design & Development"
      serviceSlug="web-design"
      locationName="Candolim"
      locationSlug="candolim"
      area="North Goa"
      keyword="web design Candolim Goa"
    />
  );
}
