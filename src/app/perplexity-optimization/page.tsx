import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "Perplexity Optimisation in Goa — Perplexity optimisation Goa",
  description: "Perplexity optimisation from Sanctify, Goa. Become a cited source in AI answers that link back and drive referral traffic. Free audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/perplexity-optimization/" },
  openGraph: {
    title: "Perplexity Optimisation in Goa | Sanctify",
    description: "Perplexity optimisation from Sanctify, Goa. Become a cited source in AI answers that link back and drive referral traffic. Free audit.",
    url: "https://www.digitalmarketing.sanctify.in/perplexity-optimization/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"Perplexity Optimisation"}
      fullTitle={"Perplexity Optimisation"}
      slug={"perplexity-optimization"}
      heroDesc={"Perplexity attributes its answers to sources, which makes citation there directly valuable — it sends real referral traffic. Sanctify works on making your pages the kind of source it draws from."}
      whatIs={"Perplexity composes researched answers and credits the pages it used, unlike assistants that answer without attribution. Optimising for it means producing the content types it favours as sources: clearly structured explanations, specific figures, original observations, and pages where a claim can be verified quickly. Citation there produces measurable click-through rather than brand mention alone."}
      whyUs={"Because Perplexity attributes sources, this is one of the few AI surfaces where results are directly observable — we can see which client pages get cited and on which queries. That feedback loop informs the work. We test against an agreed query set, strengthen the pages that nearly qualify, and report on citations gained."}
    />
  );
}
