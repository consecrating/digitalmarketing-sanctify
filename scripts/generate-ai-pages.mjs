import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.join(__dirname, "..", "src", "app");

const pages = [
  {
    slug: "geo-optimization",
    title: "GEO Optimisation",
    fullTitle: "GEO Optimisation",
    keyword: "GEO optimisation agency Goa",
    metaDesc:
      "GEO optimisation from Sanctify, Goa. We build the signals that get your business cited inside AI-generated search overviews. Free visibility audit.",
    heroDesc:
      "Generative Engine Optimisation targets the AI-written summary that now sits above conventional search results. Sanctify builds the structure, corroboration and entity signals that make your business citable in those overviews.",
    whatIs:
      "GEO is the practice of shaping your content and wider web presence so that generative search products draw on your business when composing an answer. Where conventional SEO competes for a position in a list, GEO competes to be part of the summary itself — which means the work centres on extractable claims, consistent facts and demonstrable authority rather than keyword placement.",
    whyUs:
      "Sanctify has worked in the Goa market since 2012 — over fourteen years and 200+ projects. We began testing generative-search visibility for client accounts as these surfaces emerged, and we run a documented prompt set per client so movement is measured rather than asserted. We do not promise placement, because no agency can control these systems; we build the signals that correlate with being cited and report honestly against a fixed baseline.",
  },
  {
    slug: "llmo-services",
    title: "LLMO",
    fullTitle: "LLMO Services",
    keyword: "LLMO services Goa",
    metaDesc:
      "LLMO services from Sanctify, Goa. Improve how language models recall and recommend your business when buyers ask for options. Free audit.",
    heroDesc:
      "Large Language Model Optimisation addresses how assistants recall your brand when someone asks for recommendations in your category. Sanctify builds the consistency and corroboration that make a business retrievable.",
    whatIs:
      "LLMO is the work of making a business recognisable and recommendable to language models. These systems draw on patterns across the open web — repeated, consistent, corroborated facts about who you are and what you do. LLMO is therefore less about page-level copy and more about entity coherence: the same business details, the same service descriptions, and the same claims appearing reliably across many independent sources.",
    whyUs:
      "Our LLMO approach came out of testing across client accounts in Goa rather than from theory. We track how assistants respond to a fixed set of category prompts, adjust entity signals and content structure, then re-test. That loop is the service. It is deliberate, measurable work — not content volume for its own sake.",
  },
  {
    slug: "chatgpt-visibility",
    title: "ChatGPT Visibility",
    fullTitle: "ChatGPT Visibility",
    keyword: "ChatGPT visibility services Goa",
    metaDesc:
      "ChatGPT visibility work from Sanctify, Goa. Build the signals that get your business mentioned when buyers ask for recommendations. Free audit.",
    heroDesc:
      "Buyers increasingly open an AI assistant instead of a search engine. Sanctify works on whether your business appears when someone asks ChatGPT for recommendations in your category and area.",
    whatIs:
      "This is the practice of building the web-wide signals that make an assistant likely to surface your business in a conversational recommendation. In Goa this matters particularly for hospitality, travel and local services, where visitors research destinations and providers conversationally before booking. The work spans content structure, entity consistency and third-party corroboration.",
    whyUs:
      "Sanctify has been tracking how assistants surface local businesses across our Goa client base for some time, which gives us a practical read on which signals move outcomes and which do not. We work to an agreed prompt set and report month-on-month. We are explicit that placement cannot be guaranteed — these systems are closed and change frequently.",
  },
  {
    slug: "aeo-services",
    title: "AEO",
    fullTitle: "AEO Services",
    keyword: "AEO services Goa",
    metaDesc:
      "Answer Engine Optimisation from Sanctify, Goa. Structure content to win featured snippets, People Also Ask and voice answers. Free audit.",
    heroDesc:
      "Answer Engine Optimisation targets the direct answer — featured snippets, People Also Ask, and voice results. Sanctify structures content so it can be lifted cleanly as the response.",
    whatIs:
      "AEO is about being the answer rather than a link beneath it. It requires a specific discipline: identifying the questions buyers actually ask, answering each one concisely and unambiguously near the top of a section, and marking it up so machines can extract it without guesswork. The same structure that wins a featured snippet also makes content easy for AI systems to quote.",
    whyUs:
      "We have built answer-structured content for clients across hospitality, healthcare, property and education in Goa. The method is consistent: map the real question set, answer each in a self-contained passage, mark it up correctly, then measure which passages get lifted. It is systematic work and we report on it directly.",
  },
  {
    slug: "ai-seo",
    title: "AI SEO",
    fullTitle: "AI SEO",
    keyword: "AI SEO services Goa",
    metaDesc:
      "AI SEO from Sanctify, Goa. One programme covering conventional search rankings and AI assistant visibility. Operating since 2012. Free audit.",
    heroDesc:
      "Conventional SEO and AI visibility share most of the same underlying work. Sanctify runs them as a single programme so effort is not duplicated and recommendations do not conflict.",
    whatIs:
      "AI SEO is the consolidation of conventional search optimisation with AI-surface optimisation — GEO, AEO and LLMO — into one strategy. The rationale is practical: technical health, topical depth, entity consistency and genuine authority serve both ecosystems. Splitting them across separate scopes creates duplicated work and contradictory advice.",
    whyUs:
      "We have run conventional SEO in Goa since 2012 and added AI-surface work as those channels became commercially relevant. That combination is the point — we are not an AI-only shop with no ranking discipline, nor a traditional agency treating AI as a bolt-on. One team owns both, measured together.",
  },
  {
    slug: "perplexity-optimization",
    title: "Perplexity Optimisation",
    fullTitle: "Perplexity Optimisation",
    keyword: "Perplexity optimisation Goa",
    metaDesc:
      "Perplexity optimisation from Sanctify, Goa. Become a cited source in AI answers that link back and drive referral traffic. Free audit.",
    heroDesc:
      "Perplexity attributes its answers to sources, which makes citation there directly valuable — it sends real referral traffic. Sanctify works on making your pages the kind of source it draws from.",
    whatIs:
      "Perplexity composes researched answers and credits the pages it used, unlike assistants that answer without attribution. Optimising for it means producing the content types it favours as sources: clearly structured explanations, specific figures, original observations, and pages where a claim can be verified quickly. Citation there produces measurable click-through rather than brand mention alone.",
    whyUs:
      "Because Perplexity attributes sources, this is one of the few AI surfaces where results are directly observable — we can see which client pages get cited and on which queries. That feedback loop informs the work. We test against an agreed query set, strengthen the pages that nearly qualify, and report on citations gained.",
  },
  {
    slug: "gemini-optimization",
    title: "Gemini Optimisation",
    fullTitle: "Gemini Optimisation",
    keyword: "Gemini AI optimisation Goa",
    metaDesc:
      "Google Gemini optimisation from Sanctify, Goa. Work toward inclusion in AI Overviews that appear above conventional results. Free audit.",
    heroDesc:
      "Google's AI Overviews now sit above conventional results for many queries. Sanctify works on the content structure and authority signals associated with inclusion in those summaries.",
    whatIs:
      "Gemini powers the AI Overviews that increasingly occupy the top of Google's results page. Being represented there is the most prominent position available on the page. The work overlaps heavily with strong conventional SEO — clear structure, credible authorship, accurate structured data — with additional emphasis on passages that can be summarised without distortion.",
    whyUs:
      "Fourteen years of Google-focused SEO in this market is directly relevant here, because AI Overview inclusion draws on the same authority and quality signals that drive conventional rankings. We treat it as an extension of established practice rather than a separate discipline, which keeps the work grounded.",
  },
];

function write(p) {
  const dir = path.join(APP, p.slug);
  fs.mkdirSync(dir, { recursive: true });

  const content = `import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "${p.fullTitle} in Goa — ${p.keyword}",
  description: "${p.metaDesc}",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/${p.slug}/" },
  openGraph: {
    title: "${p.fullTitle} in Goa | Sanctify",
    description: "${p.metaDesc}",
    url: "https://www.digitalmarketing.sanctify.in/${p.slug}/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={${JSON.stringify(p.title)}}
      fullTitle={${JSON.stringify(p.fullTitle)}}
      slug={${JSON.stringify(p.slug)}}
      heroDesc={${JSON.stringify(p.heroDesc)}}
      whatIs={${JSON.stringify(p.whatIs)}}
      whyUs={${JSON.stringify(p.whyUs)}}
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

pages.forEach((p) => { write(p); console.log("  regenerated:", p.slug); });
console.log("\nDone —", pages.length, "AI pages rebuilt on the new design system.");
