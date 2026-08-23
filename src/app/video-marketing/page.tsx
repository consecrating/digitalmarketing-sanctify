import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Video Marketing in Goa — video marketing agency Goa",
  description: "Professional video content — promotional videos, reels, YouTube content, corporate videos, and video advertising that captures attention. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Video partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/video-marketing/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Video Marketing"
      keyword="video marketing agency Goa"
      description="Professional video content — promotional videos, reels, YouTube content, corporate videos, and video advertising that captures attention."
      slug="video-marketing"
    />
  );
}
