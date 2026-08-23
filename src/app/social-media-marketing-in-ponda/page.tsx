import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing in Ponda, Goa — Best Social Media Agency",
  description: "Looking for social media services in Ponda, Goa? Sanctify offers professional social media marketing for businesses in Ponda (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/social-media-marketing-in-ponda/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Social Media Marketing"
      serviceSlug="social-media-marketing"
      locationName="Ponda"
      locationSlug="ponda"
      area="South Goa"
      keyword="social media Ponda Goa"
    />
  );
}
