import type { Metadata } from "next";
import { ArrowRight, Phone, Brain, Sparkles, Globe, Target, CheckCircle } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "ChatGPT Visibility & Optimization Services in Goa | Sanctify",
  description: "Get your Goa business mentioned by ChatGPT! Sanctify's ChatGPT Visibility service ensures you're recommended when users ask about your industry. First agency in Goa.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/chatgpt-visibility/" },
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
                <li className="text-white/80">ChatGPT Visibility</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Sanctify AI Marketing Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              ChatGPT Visibility & Optimization Services<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">by Sanctify, Goa</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">When over 200 million people ask ChatGPT questions every week — is YOUR Goa business in the answers? Sanctify's ChatGPT Visibility service ensures your brand gets mentioned and recommended in relevant AI conversations.</p>
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
              <p className="text-gray text-sm leading-relaxed">Sanctify is Goa&apos;s FIRST agency offering dedicated ChatGPT Visibility services. Early adopters are already seeing results — don&apos;t let competitors get ahead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>What is ChatGPT Visibility?</h2>
          <p>ChatGPT Visibility is the practice of ensuring your brand appears in ChatGPT's responses when users ask about products, services, or recommendations in your industry. With 200M+ weekly active users, ChatGPT has become a primary discovery tool — especially for tourists researching Goa trips, finding local services, and comparing businesses.</p>

          <h2>Why Sanctify for ChatGPT Visibility in Goa?</h2>
          <p>Sanctify has been tracking ChatGPT's citation patterns since early 2024. We've identified the specific authority signals, content structures, and web presence factors that determine which Goa businesses get recommended. Our clients see measurable improvements in AI mentions within 60-90 days of implementing our ChatGPT visibility strategy.</p>

          <h2>Sanctify&apos;s ChatGPT Visibility Process</h2>
          <ul>
            <li><strong>AI Visibility Audit</strong> — Sanctify checks how your brand currently appears across ChatGPT, Gemini, Perplexity, and AI Overviews. We document every mention (or lack thereof).</li>
            <li><strong>Gap Analysis</strong> — We identify what your competitors are doing that earns them AI citations, and what&apos;s missing from your digital footprint.</li>
            <li><strong>Content Architecture</strong> — Sanctify restructures and creates content specifically designed to be citation-worthy for AI systems.</li>
            <li><strong>Authority Building</strong> — Strategic placement of brand mentions, expert citations, and structured data across high-authority platforms.</li>
            <li><strong>Schema Implementation</strong> — Advanced structured data markup that AI systems can easily parse and reference.</li>
            <li><strong>Monthly Monitoring</strong> — Regular tracking of your AI visibility with detailed reports showing improvements and next steps.</li>
          </ul>

          <h2>How ChatGPT Visibility Differs from Traditional SEO</h2>
          <ul>
            <li><strong>Traditional SEO</strong> — Ranks your pages in Google&apos;s blue links. Users click through to your website.</li>
            <li><strong>ChatGPT Visibility</strong> — Gets your brand MENTIONED in AI-generated responses. Users see your brand name alongside the answer, building trust and recognition.</li>
          </ul>
          <p>Sanctify delivers BOTH — we never sacrifice traditional rankings for AI visibility. Our unified approach builds authority that compounds across all search platforms.</p>

          <h2>Industries Sanctify Serves with ChatGPT Visibility in Goa</h2>
          <ul>
            <li><strong>Hotels & Tourism</strong> — &ldquo;Best hotel in Calangute&rdquo; queries on ChatGPT/Perplexity</li>
            <li><strong>Restaurants</strong> — &ldquo;Top restaurants in Panaji&rdquo; AI recommendations</li>
            <li><strong>Healthcare</strong> — Medical facility recommendations in AI answers</li>
            <li><strong>Real Estate</strong> — Property and locality information in AI responses</li>
            <li><strong>Professional Services</strong> — Service provider recommendations by AI platforms</li>
          </ul>

          <h2>Sanctify&apos;s ChatGPT Visibility Results</h2>
          <ul>
            <li>✓ 60-90 days to first AI citations for most Goa businesses</li>
            <li>✓ Consistent brand mentions across ChatGPT, Gemini, and Perplexity</li>
            <li>✓ Average 40% increase in branded search following AI visibility gains</li>
            <li>✓ Improved E-E-A-T signals that boost traditional Google rankings simultaneously</li>
            <li>✓ Monthly visibility reports with competitive benchmarking</li>
          </ul>

          <h2>Get Started with Sanctify&apos;s ChatGPT Visibility</h2>
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
