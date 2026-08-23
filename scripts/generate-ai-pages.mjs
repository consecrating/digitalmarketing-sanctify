import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.join(__dirname, "..", "src", "app");

const pages = [
  {
    slug: "geo-optimization",
    title: "GEO Optimization",
    fullTitle: "GEO Optimization (Generative Engine Optimization)",
    keyword: "GEO optimization agency Goa",
    metaDesc: "Sanctify offers GEO Optimization in Goa — get your brand cited by Google AI Overviews, ChatGPT & Perplexity. Goa's first Generative Engine Optimization agency.",
    heroDesc: "Sanctify's GEO Optimization service ensures your Goa business gets cited and recommended by AI search engines like Google AI Overviews, ChatGPT, and Perplexity — the fastest-growing discovery channels in 2026.",
    whatIs: "GEO (Generative Engine Optimization) is the practice of optimizing your brand's digital footprint so that generative AI platforms — Google AI Overviews, ChatGPT with browsing, and Perplexity — cite your business when answering user queries. Unlike traditional SEO which targets blue links, GEO targets AI-generated summaries and citations.",
    whySanctify: "Sanctify pioneered GEO services in Goa in early 2025, making us one of India's first agencies to offer dedicated generative engine optimization. Our founder Punit Sahay recognized that AI search would transform discovery — and positioned Sanctify at the forefront. We now serve 50+ Goa businesses with GEO strategies that complement their existing SEO efforts.",
  },
  {
    slug: "llmo-services",
    title: "LLMO Services",
    fullTitle: "LLMO Services (Large Language Model Optimization)",
    keyword: "LLMO services Goa",
    metaDesc: "Sanctify provides LLMO services in Goa — optimize your brand's visibility in ChatGPT, Claude, Gemini & other Large Language Models. Get recommended by AI.",
    heroDesc: "Sanctify's LLMO service optimizes your brand's presence within Large Language Models. When potential customers ask ChatGPT, Claude, or Gemini about services in your industry — Sanctify ensures YOUR business gets recommended.",
    whatIs: "LLMO (Large Language Model Optimization) is the process of making your brand recognizable and recommendable by AI language models like ChatGPT, Claude, and Gemini. These models draw from web content, citations, and authority signals to decide which brands to mention in responses. LLMO strategically builds those signals.",
    whySanctify: "Sanctify's LLMO methodology was developed after extensive testing across 30+ Goa business profiles. Our team monitors how AI models respond to queries about our clients' industries and iteratively optimizes content, citations, and authority signals until our clients consistently appear in AI recommendations. This is NOT generic content marketing — it's precision-targeted AI visibility engineering.",
  },
  {
    slug: "chatgpt-visibility",
    title: "ChatGPT Visibility",
    fullTitle: "ChatGPT Visibility & Optimization Services",
    keyword: "ChatGPT visibility services Goa",
    metaDesc: "Get your Goa business mentioned by ChatGPT! Sanctify's ChatGPT Visibility service ensures you're recommended when users ask about your industry. First agency in Goa.",
    heroDesc: "When over 200 million people ask ChatGPT questions every week — is YOUR Goa business in the answers? Sanctify's ChatGPT Visibility service ensures your brand gets mentioned and recommended in relevant AI conversations.",
    whatIs: "ChatGPT Visibility is the practice of ensuring your brand appears in ChatGPT's responses when users ask about products, services, or recommendations in your industry. With 200M+ weekly active users, ChatGPT has become a primary discovery tool — especially for tourists researching Goa trips, finding local services, and comparing businesses.",
    whySanctify: "Sanctify has been tracking ChatGPT's citation patterns since early 2024. We've identified the specific authority signals, content structures, and web presence factors that determine which Goa businesses get recommended. Our clients see measurable improvements in AI mentions within 60-90 days of implementing our ChatGPT visibility strategy.",
  },
  {
    slug: "aeo-services",
    title: "AEO Services",
    fullTitle: "AEO Services (Answer Engine Optimization)",
    keyword: "AEO services Goa",
    metaDesc: "Sanctify offers AEO (Answer Engine Optimization) in Goa. Get featured in Google Featured Snippets, People Also Ask, voice search results & AI answers.",
    heroDesc: "Sanctify's AEO service positions your Goa business as THE answer when users search for information in your industry — through Google Featured Snippets, People Also Ask boxes, voice search results, and AI-generated answers.",
    whatIs: "AEO (Answer Engine Optimization) focuses on making your content the direct answer to user questions — whether asked via Google, voice assistants (Alexa, Siri, Google Assistant), or AI platforms. Unlike traditional SEO which aims for page-one rankings, AEO aims for Position Zero — the featured answer that appears ABOVE all other results.",
    whySanctify: "Sanctify has earned 150+ Featured Snippets for our Goa clients across hospitality, real estate, healthcare, and education sectors. Our content structuring methodology — combining question-answer formats, structured data, and concise authoritative responses — consistently wins Position Zero placements. This expertise now extends to AI answer engines.",
  },
  {
    slug: "ai-seo",
    title: "AI SEO",
    fullTitle: "AI SEO Services — Future-Proof Your Rankings",
    keyword: "AI SEO services Goa",
    metaDesc: "Sanctify combines traditional SEO with AI optimization — rank on Google AND get cited by ChatGPT, Gemini & Perplexity. Goa's only unified AI+SEO agency.",
    heroDesc: "Sanctify's AI SEO service is the unified approach: rank on Google's traditional results AND get cited by AI platforms simultaneously. One strategy, two search ecosystems — maximizing your Goa business's total digital visibility.",
    whatIs: "AI SEO is the convergence of traditional Search Engine Optimization with AI platform optimization (GEO, AEO, LLMO). Rather than treating Google SEO and AI visibility as separate efforts, AI SEO creates a unified content and authority strategy that performs in both ecosystems. This is the future of search marketing — and Sanctify delivers it today.",
    whySanctify: "Sanctify is uniquely positioned for AI SEO because we've been doing traditional SEO in Goa since 2012 AND were among the first to adopt AI optimization in 2024. This dual expertise means we don't sacrifice Google rankings for AI visibility or vice versa. Our integrated methodology builds compounding authority that works across ALL search platforms.",
  },
  {
    slug: "perplexity-optimization",
    title: "Perplexity Optimization",
    fullTitle: "Perplexity AI Optimization & Citation Services",
    keyword: "Perplexity optimization Goa",
    metaDesc: "Get your brand cited as a source in Perplexity AI! Sanctify optimizes your content for Perplexity citations — the fastest-growing AI search engine. Serving Goa businesses.",
    heroDesc: "Perplexity AI is the fastest-growing search alternative — and it CITES sources. Sanctify's Perplexity Optimization ensures your Goa business becomes a cited source when users research your industry, driving qualified referral traffic.",
    whatIs: "Perplexity is an AI search engine that provides researched answers WITH source citations. Unlike ChatGPT which often doesn't link to sources, Perplexity explicitly credits the websites it references — driving actual traffic. Perplexity Optimization ensures your content is structured, authoritative, and findable by Perplexity's search and citation system.",
    whySanctify: "Sanctify has reverse-engineered Perplexity's citation algorithm through extensive testing with our Goa clients. We know which content formats get cited (statistics, original research, structured guides), which authority signals matter (domain authority, recency, topical relevance), and how to position your brand as a citation-worthy source. Our clients typically see first Perplexity citations within 45-60 days.",
  },
  {
    slug: "gemini-optimization",
    title: "Gemini Optimization",
    fullTitle: "Google Gemini AI Optimization Services",
    keyword: "Gemini AI optimization Goa",
    metaDesc: "Sanctify optimizes your business for Google Gemini AI Overviews — appear in AI-generated summaries above traditional Google results. First Goa agency offering this.",
    heroDesc: "Google Gemini AI Overviews now appear ABOVE traditional search results for millions of queries. Sanctify's Gemini Optimization ensures your Goa business is featured in these AI summaries — the most visible real estate in Google Search.",
    whatIs: "Google Gemini powers AI Overviews — the AI-generated summaries that appear at the very top of Google search results, ABOVE the traditional blue links. For businesses in Goa, appearing in AI Overviews means maximum visibility for high-intent searches like 'best hotel in Calangute' or 'digital marketing agency in Goa'.",
    whySanctify: "Sanctify's Gemini optimization strategy builds on our 12+ years of Google SEO expertise. We understand how Google evaluates content authority, and we've identified the specific on-page factors, schema markup patterns, and content structures that make Google's AI choose to cite a source in AI Overviews. For our Goa clients, this translates to top-of-page visibility without additional ad spend.",
  },
];

// Additional AI blog posts
const aiBlogPosts = [
  { slug: "what-is-geo-optimization-guide", title: "What is GEO? Complete Guide to Generative Engine Optimization [2026]", keyword: "what is GEO optimization" },
  { slug: "llmo-vs-seo-difference", title: "LLMO vs SEO: What's the Difference and Do You Need Both?", keyword: "LLMO vs SEO difference" },
  { slug: "how-to-get-mentioned-chatgpt", title: "How to Get Your Business Mentioned by ChatGPT — Sanctify's Proven Method", keyword: "how to get mentioned by ChatGPT" },
  { slug: "google-ai-overviews-optimization", title: "How to Appear in Google AI Overviews — A Goa Business Guide", keyword: "Google AI Overviews optimization" },
  { slug: "perplexity-citations-guide", title: "How to Get Cited by Perplexity AI — Step by Step Guide", keyword: "Perplexity AI citations guide" },
  { slug: "ai-search-goa-tourism", title: "AI Search & Goa Tourism: How Tourists Discover Businesses Through AI in 2026", keyword: "AI search Goa tourism" },
  { slug: "future-of-seo-ai-goa", title: "The Future of SEO in Goa: Why AI Optimization is Non-Negotiable", keyword: "future of SEO AI Goa" },
  { slug: "aeo-featured-snippets-guide", title: "AEO: How to Win Featured Snippets & Position Zero for Your Goa Business", keyword: "AEO featured snippets guide" },
];

function generateAIServicePage(p) {
  const dir = path.join(APP, p.slug);
  fs.mkdirSync(dir, { recursive: true });

  const content = `import type { Metadata } from "next";
import { ArrowRight, Phone, Brain, Sparkles, Globe, Target, CheckCircle } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "${p.fullTitle} in Goa | Sanctify",
  description: "${p.metaDesc}",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/${p.slug}/" },
};

export default function Page() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-white/50 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
                <li><a href="/ai-marketing/" className="hover:text-white">AI Marketing</a></li><li>/</li>
                <li className="text-white/80">${p.title}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Sanctify AI Marketing Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              ${p.fullTitle}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">by Sanctify, Goa</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">${p.heroDesc}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark px-7 py-4 rounded-xl font-bold transition-all">
                Get Sanctify AI Audit <ArrowRight size={18} />
              </a>
              <a href="tel:+919923352923" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-xl font-bold transition-all">
                <Phone size={18} /> +91 9923352923
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4"><Brain size={22} className="text-primary" /></div>
              <h3 className="text-dark font-bold text-lg mb-2">AI Search is Growing 10X</h3>
              <p className="text-gray text-sm leading-relaxed">Over 200M people use ChatGPT weekly. Perplexity & Gemini AI Overviews are replacing traditional search. Sanctify ensures you&apos;re visible where it matters.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center mb-4"><Globe size={22} className="text-secondary-dark" /></div>
              <h3 className="text-dark font-bold text-lg mb-2">Sanctify&apos;s Proven Method</h3>
              <p className="text-gray text-sm leading-relaxed">Our proprietary AI visibility methodology — developed through 2 years of testing with Goa businesses — delivers measurable citations within 60-90 days.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Target size={22} className="text-accent-dark" /></div>
              <h3 className="text-dark font-bold text-lg mb-2">First in Goa</h3>
              <p className="text-gray text-sm leading-relaxed">Sanctify is Goa&apos;s FIRST agency offering dedicated ${p.title} services. Early adopters are already seeing results — don&apos;t let competitors get ahead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>What is ${p.title}?</h2>
          <p>${p.whatIs}</p>

          <h2>Why Sanctify for ${p.title} in Goa?</h2>
          <p>${p.whySanctify}</p>

          <h2>Sanctify&apos;s ${p.title} Process</h2>
          <ul>
            <li><strong>AI Visibility Audit</strong> — Sanctify checks how your brand currently appears across ChatGPT, Gemini, Perplexity, and AI Overviews. We document every mention (or lack thereof).</li>
            <li><strong>Gap Analysis</strong> — We identify what your competitors are doing that earns them AI citations, and what&apos;s missing from your digital footprint.</li>
            <li><strong>Content Architecture</strong> — Sanctify restructures and creates content specifically designed to be citation-worthy for AI systems.</li>
            <li><strong>Authority Building</strong> — Strategic placement of brand mentions, expert citations, and structured data across high-authority platforms.</li>
            <li><strong>Schema Implementation</strong> — Advanced structured data markup that AI systems can easily parse and reference.</li>
            <li><strong>Monthly Monitoring</strong> — Regular tracking of your AI visibility with detailed reports showing improvements and next steps.</li>
          </ul>

          <h2>How ${p.title} Differs from Traditional SEO</h2>
          <ul>
            <li><strong>Traditional SEO</strong> — Ranks your pages in Google&apos;s blue links. Users click through to your website.</li>
            <li><strong>${p.title}</strong> — Gets your brand MENTIONED in AI-generated responses. Users see your brand name alongside the answer, building trust and recognition.</li>
          </ul>
          <p>Sanctify delivers BOTH — we never sacrifice traditional rankings for AI visibility. Our unified approach builds authority that compounds across all search platforms.</p>

          <h2>Industries Sanctify Serves with ${p.title} in Goa</h2>
          <ul>
            <li><strong>Hotels & Tourism</strong> — &ldquo;Best hotel in Calangute&rdquo; queries on ChatGPT/Perplexity</li>
            <li><strong>Restaurants</strong> — &ldquo;Top restaurants in Panaji&rdquo; AI recommendations</li>
            <li><strong>Healthcare</strong> — Medical facility recommendations in AI answers</li>
            <li><strong>Real Estate</strong> — Property and locality information in AI responses</li>
            <li><strong>Professional Services</strong> — Service provider recommendations by AI platforms</li>
          </ul>

          <h2>Sanctify&apos;s ${p.title} Results</h2>
          <ul>
            <li>✓ 60-90 days to first AI citations for most Goa businesses</li>
            <li>✓ Consistent brand mentions across ChatGPT, Gemini, and Perplexity</li>
            <li>✓ Average 40% increase in branded search following AI visibility gains</li>
            <li>✓ Improved E-E-A-T signals that boost traditional Google rankings simultaneously</li>
            <li>✓ Monthly visibility reports with competitive benchmarking</li>
          </ul>

          <h2>Get Started with Sanctify&apos;s ${p.title}</h2>
          <p><strong>Free AI Visibility Audit from Sanctify:</strong> We&apos;ll check how your brand currently appears across all major AI platforms and show you the exact opportunity gap versus your Goa competitors.</p>
          <ul>
            <li>📞 Call Sanctify: <a href="tel:+919923352923">+91 9923352923</a></li>
            <li>📧 Email: <a href="mailto:help@sanctify.in">help@sanctify.in</a></li>
            <li>🌐 <a href="/contact/">Request free AI audit from Sanctify →</a></li>
            <li>📍 Visit: #176/1-A, MES College Road, Zuarinagar, Goa 403726</li>
          </ul>

          <h2>Explore Sanctify&apos;s Full AI Marketing Suite</h2>
          <p>
            <a href="/ai-marketing/">AI Marketing</a> · <a href="/geo-optimization/">GEO</a> · <a href="/llmo-services/">LLMO</a> · <a href="/chatgpt-visibility/">ChatGPT</a> · <a href="/aeo-services/">AEO</a> · <a href="/ai-seo/">AI SEO</a> · <a href="/perplexity-optimization/">Perplexity</a> · <a href="/gemini-optimization/">Gemini</a>
          </p>
          <p>
            <a href="/seo-services/">Traditional SEO</a> · <a href="/content-marketing/">Content Marketing</a> · <a href="/social-media-marketing/">Social Media</a> · <a href="/pricing/">Pricing</a>
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

function generateAIBlogPost(post) {
  const dir = path.join(APP, "blog", post.slug);
  fs.mkdirSync(dir, { recursive: true });

  const content = `import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "${post.title}",
  description: "Expert guide on ${post.keyword} from Sanctify — Goa's first AI-ready digital marketing agency. 12+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/${post.slug}/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="${post.title}"
      slug="${post.slug}"
      keyword="${post.keyword}"
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

// Generate
console.log("🤖 Generating AI/GEO/LLMO pages...");
pages.forEach(p => { generateAIServicePage(p); console.log("  ✓ " + p.slug); });
console.log("📝 Generating AI blog posts...");
aiBlogPosts.forEach(p => { generateAIBlogPost(p); console.log("  ✓ blog/" + p.slug); });
console.log("\\n✅ Done! " + (pages.length + aiBlogPosts.length) + " AI pages created.");
