import type { Metadata } from "next";
import { ArrowRight, Phone, Brain, Sparkles, Globe, Target, CheckCircle } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "GEO Optimization (Generative Engine Optimization) in Goa | Sanctify",
  description: "Sanctify offers GEO Optimization in Goa — get your brand cited by Google AI Overviews, ChatGPT & Perplexity. Goa's first Generative Engine Optimization agency.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/geo-optimization/" },
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
                <li className="text-white/80">GEO Optimization</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Sanctify AI Marketing Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              GEO Optimization (Generative Engine Optimization)<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">by Sanctify, Goa</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">Sanctify's GEO Optimization service ensures your Goa business gets cited and recommended by AI search engines like Google AI Overviews, ChatGPT, and Perplexity — the fastest-growing discovery channels in 2026.</p>
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
              <p className="text-gray text-sm leading-relaxed">Sanctify is Goa&apos;s FIRST agency offering dedicated GEO Optimization services. Early adopters are already seeing results — don&apos;t let competitors get ahead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>What is GEO Optimization?</h2>
          <p>GEO (Generative Engine Optimization) is the practice of optimizing your brand's digital footprint so that generative AI platforms — Google AI Overviews, ChatGPT with browsing, and Perplexity — cite your business when answering user queries. Unlike traditional SEO which targets blue links, GEO targets AI-generated summaries and citations.</p>

          <h2>Why Sanctify for GEO Optimization in Goa?</h2>
          <p>Sanctify pioneered GEO services in Goa in early 2025, making us one of India's first agencies to offer dedicated generative engine optimization. Our founder Punit Sahay recognized that AI search would transform discovery — and positioned Sanctify at the forefront. We now serve 50+ Goa businesses with GEO strategies that complement their existing SEO efforts.</p>

          <h2>Sanctify&apos;s GEO Optimization Process</h2>
          <ul>
            <li><strong>AI Visibility Audit</strong> — Sanctify checks how your brand currently appears across ChatGPT, Gemini, Perplexity, and AI Overviews. We document every mention (or lack thereof).</li>
            <li><strong>Gap Analysis</strong> — We identify what your competitors are doing that earns them AI citations, and what&apos;s missing from your digital footprint.</li>
            <li><strong>Content Architecture</strong> — Sanctify restructures and creates content specifically designed to be citation-worthy for AI systems.</li>
            <li><strong>Authority Building</strong> — Strategic placement of brand mentions, expert citations, and structured data across high-authority platforms.</li>
            <li><strong>Schema Implementation</strong> — Advanced structured data markup that AI systems can easily parse and reference.</li>
            <li><strong>Monthly Monitoring</strong> — Regular tracking of your AI visibility with detailed reports showing improvements and next steps.</li>
          </ul>

          <h2>How GEO Optimization Differs from Traditional SEO</h2>
          <ul>
            <li><strong>Traditional SEO</strong> — Ranks your pages in Google&apos;s blue links. Users click through to your website.</li>
            <li><strong>GEO Optimization</strong> — Gets your brand MENTIONED in AI-generated responses. Users see your brand name alongside the answer, building trust and recognition.</li>
          </ul>
          <p>Sanctify delivers BOTH — we never sacrifice traditional rankings for AI visibility. Our unified approach builds authority that compounds across all search platforms.</p>

          <h2>Industries Sanctify Serves with GEO Optimization in Goa</h2>
          <ul>
            <li><strong>Hotels & Tourism</strong> — &ldquo;Best hotel in Calangute&rdquo; queries on ChatGPT/Perplexity</li>
            <li><strong>Restaurants</strong> — &ldquo;Top restaurants in Panaji&rdquo; AI recommendations</li>
            <li><strong>Healthcare</strong> — Medical facility recommendations in AI answers</li>
            <li><strong>Real Estate</strong> — Property and locality information in AI responses</li>
            <li><strong>Professional Services</strong> — Service provider recommendations by AI platforms</li>
          </ul>

          <h2>Sanctify&apos;s GEO Optimization Results</h2>
          <ul>
            <li>✓ 60-90 days to first AI citations for most Goa businesses</li>
            <li>✓ Consistent brand mentions across ChatGPT, Gemini, and Perplexity</li>
            <li>✓ Average 40% increase in branded search following AI visibility gains</li>
            <li>✓ Improved E-E-A-T signals that boost traditional Google rankings simultaneously</li>
            <li>✓ Monthly visibility reports with competitive benchmarking</li>
          </ul>

          <h2>Get Started with Sanctify&apos;s GEO Optimization</h2>
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
