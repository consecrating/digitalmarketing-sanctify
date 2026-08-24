import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "AEO Services in Goa — AEO services Goa",
  description: "Answer Engine Optimisation from Sanctify, Goa. Structure content to win featured snippets, People Also Ask and voice answers. Free audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/aeo-services/" },
  openGraph: {
    title: "AEO Services in Goa | Sanctify",
    description: "Answer Engine Optimisation from Sanctify, Goa. Structure content to win featured snippets, People Also Ask and voice answers. Free audit.",
    url: "https://www.digitalmarketing.sanctify.in/aeo-services/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"AEO"}
      fullTitle={"AEO Services"}
      slug={"aeo-services"}
      heroDesc={"Answer Engine Optimisation targets the direct answer — featured snippets, People Also Ask, and voice results. Sanctify structures content so it can be lifted cleanly as the response."}
      whatIs={"AEO is about being the answer rather than a link beneath it. It requires a specific discipline: identifying the questions buyers actually ask, answering each one concisely and unambiguously near the top of a section, and marking it up so machines can extract it without guesswork. The same structure that wins a featured snippet also makes content easy for AI systems to quote."}
      whyUs={"We have built answer-structured content for clients across hospitality, healthcare, property and education in Goa. The method is consistent: map the real question set, answer each in a self-contained passage, mark it up correctly, then measure which passages get lifted. It is systematic work and we report on it directly."}
    />
  );
}
