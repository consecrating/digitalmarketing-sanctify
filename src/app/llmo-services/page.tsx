import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "LLMO Services in Goa — LLMO services Goa",
  description: "LLMO services from Sanctify, Goa. Improve how language models recall and recommend your business when buyers ask for options. Free audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/llmo-services/" },
  openGraph: {
    title: "LLMO Services in Goa | Sanctify",
    description: "LLMO services from Sanctify, Goa. Improve how language models recall and recommend your business when buyers ask for options. Free audit.",
    url: "https://www.digitalmarketing.sanctify.in/llmo-services/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"LLMO"}
      fullTitle={"LLMO Services"}
      slug={"llmo-services"}
      heroDesc={"Large Language Model Optimisation addresses how assistants recall your brand when someone asks for recommendations in your category. Sanctify builds the consistency and corroboration that make a business retrievable."}
      whatIs={"LLMO is the work of making a business recognisable and recommendable to language models. These systems draw on patterns across the open web — repeated, consistent, corroborated facts about who you are and what you do. LLMO is therefore less about page-level copy and more about entity coherence: the same business details, the same service descriptions, and the same claims appearing reliably across many independent sources."}
      whyUs={"Our LLMO approach came out of testing across client accounts in Goa rather than from theory. We track how assistants respond to a fixed set of category prompts, adjust entity signals and content structure, then re-test. That loop is the service. It is deliberate, measurable work — not content volume for its own sake."}
    />
  );
}
