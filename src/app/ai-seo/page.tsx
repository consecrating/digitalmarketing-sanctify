import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "AI SEO in Goa — AI SEO services Goa",
  description: "AI SEO from Sanctify, Goa. One programme covering conventional search rankings and AI assistant visibility. Operating since 2012. Free audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/ai-seo/" },
  openGraph: {
    title: "AI SEO in Goa | Sanctify",
    description: "AI SEO from Sanctify, Goa. One programme covering conventional search rankings and AI assistant visibility. Operating since 2012. Free audit.",
    url: "https://www.digitalmarketing.sanctify.in/ai-seo/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"AI SEO"}
      fullTitle={"AI SEO"}
      slug={"ai-seo"}
      heroDesc={"Conventional SEO and AI visibility share most of the same underlying work. Sanctify runs them as a single programme so effort is not duplicated and recommendations do not conflict."}
      whatIs={"AI SEO is the consolidation of conventional search optimisation with AI-surface optimisation — GEO, AEO and LLMO — into one strategy. The rationale is practical: technical health, topical depth, entity consistency and genuine authority serve both ecosystems. Splitting them across separate scopes creates duplicated work and contradictory advice."}
      whyUs={"We have run conventional SEO in Goa since 2012 and added AI-surface work as those channels became commercially relevant. That combination is the point — we are not an AI-only shop with no ranking discipline, nor a traditional agency treating AI as a bolt-on. One team owns both, measured together."}
    />
  );
}
