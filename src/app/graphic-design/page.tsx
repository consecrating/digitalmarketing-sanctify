import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Graphic Design & Branding in Goa — graphic design agency Goa",
  description: "Logo design, brand identity, social media creatives, brochures, packaging design, and visual branding that communicates your story. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Design partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/graphic-design/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Graphic Design & Branding"
      keyword="graphic design agency Goa"
      description="Logo design, brand identity, social media creatives, brochures, packaging design, and visual branding that communicates your story."
      slug="graphic-design"
    />
  );
}
