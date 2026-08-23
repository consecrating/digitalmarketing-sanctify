import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing in Panaji, Goa — Best Social Media Agency",
  description: "Looking for social media services in Panaji, Goa? Sanctify offers professional social media marketing for businesses in Panaji (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/social-media-marketing-in-panaji/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Social Media Marketing"
      serviceSlug="social-media-marketing"
      locationName="Panaji"
      locationSlug="panaji"
      area="North Goa"
      keyword="social media Panaji Goa"
    />
  );
}
