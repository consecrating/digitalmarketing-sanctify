import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing in Old Goa, Goa — Best Social Media Agency",
  description: "Looking for social media services in Old Goa, Goa? Sanctify offers professional social media marketing for businesses in Old Goa (North Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/social-media-marketing-in-old-goa/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Social Media Marketing"
      serviceSlug="social-media-marketing"
      locationName="Old Goa"
      locationSlug="old-goa"
      area="North Goa"
      keyword="social media Old Goa Goa"
    />
  );
}
