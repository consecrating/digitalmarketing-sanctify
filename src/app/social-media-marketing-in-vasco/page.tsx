import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing in Vasco da Gama, Goa — Best Social Media Agency",
  description: "Looking for social media services in Vasco da Gama, Goa? Sanctify offers professional social media marketing for businesses in Vasco da Gama (South Goa). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/social-media-marketing-in-vasco/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="Social Media Marketing"
      serviceSlug="social-media-marketing"
      locationName="Vasco da Gama"
      locationSlug="vasco"
      area="South Goa"
      keyword="social media Vasco da Gama Goa"
    />
  );
}
