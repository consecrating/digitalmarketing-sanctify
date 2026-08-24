import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "GEO Optimisation in Goa — GEO optimisation agency Goa",
  description: "GEO optimisation from Sanctify, Goa. We build the signals that get your business cited inside AI-generated search overviews. Free visibility audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/geo-optimization/" },
  openGraph: {
    title: "GEO Optimisation in Goa | Sanctify",
    description: "GEO optimisation from Sanctify, Goa. We build the signals that get your business cited inside AI-generated search overviews. Free visibility audit.",
    url: "https://www.digitalmarketing.sanctify.in/geo-optimization/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"GEO Optimisation"}
      fullTitle={"GEO Optimisation"}
      slug={"geo-optimization"}
      heroDesc={"Generative Engine Optimisation targets the AI-written summary that now sits above conventional search results. Sanctify builds the structure, corroboration and entity signals that make your business citable in those overviews."}
      whatIs={"GEO is the practice of shaping your content and wider web presence so that generative search products draw on your business when composing an answer. Where conventional SEO competes for a position in a list, GEO competes to be part of the summary itself — which means the work centres on extractable claims, consistent facts and demonstrable authority rather than keyword placement."}
      whyUs={"Sanctify has worked in the Goa market since 2012 — over fourteen years and 200+ projects. We began testing generative-search visibility for client accounts as these surfaces emerged, and we run a documented prompt set per client so movement is measured rather than asserted. We do not promise placement, because no agency can control these systems; we build the signals that correlate with being cited and report honestly against a fixed baseline."}
    />
  );
}
