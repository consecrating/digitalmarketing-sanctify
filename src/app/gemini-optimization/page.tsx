import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "Gemini Optimisation in Goa — Gemini AI optimisation Goa",
  description: "Google Gemini optimisation from Sanctify, Goa. Work toward inclusion in AI Overviews that appear above conventional results. Free audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/gemini-optimization/" },
  openGraph: {
    title: "Gemini Optimisation in Goa | Sanctify",
    description: "Google Gemini optimisation from Sanctify, Goa. Work toward inclusion in AI Overviews that appear above conventional results. Free audit.",
    url: "https://www.digitalmarketing.sanctify.in/gemini-optimization/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"Gemini Optimisation"}
      fullTitle={"Gemini Optimisation"}
      slug={"gemini-optimization"}
      heroDesc={"Google's AI Overviews now sit above conventional results for many queries. Sanctify works on the content structure and authority signals associated with inclusion in those summaries."}
      whatIs={"Gemini powers the AI Overviews that increasingly occupy the top of Google's results page. Being represented there is the most prominent position available on the page. The work overlaps heavily with strong conventional SEO — clear structure, credible authorship, accurate structured data — with additional emphasis on passages that can be summarised without distortion."}
      whyUs={"Fourteen years of Google-focused SEO in this market is directly relevant here, because AI Overview inclusion draws on the same authority and quality signals that drive conventional rankings. We treat it as an extension of established practice rather than a separate discipline, which keeps the work grounded."}
    />
  );
}
