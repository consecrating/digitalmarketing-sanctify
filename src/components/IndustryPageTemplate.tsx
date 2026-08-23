"use client";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

interface Props {
  industryName: string;
  industrySlug: string;
  keyword: string;
}

export function IndustryPageTemplate({ industryName, industrySlug, keyword }: Props) {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-white/50 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
                <li><a href="/#services" className="hover:text-white">Industries</a></li><li>/</li>
                <li className="text-white/80">{industryName}</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Digital Marketing for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">{industryName} in Goa</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-2xl">
              Specialized digital marketing strategies designed exclusively for the {industryName.toLowerCase()} sector in Goa. We understand your industry challenges and know exactly how to drive qualified leads and bookings.
            </p>
            <a href="/contact/" className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark px-7 py-4 rounded-xl font-bold transition-all">
              Get Industry-Specific Strategy <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>Digital Marketing Solutions for {industryName} in Goa</h2>
          <p>The {industryName.toLowerCase()} industry in Goa has unique digital marketing needs. Generic strategies don&apos;t work — you need an agency that understands the {industryName.toLowerCase()} sector&apos;s specific challenges, customer journey, and competitive landscape. That&apos;s exactly what Sanctify delivers.</p>
          <p>Since 2012, we&apos;ve helped numerous {industryName.toLowerCase()} businesses in Goa grow their online presence, generate qualified leads, and increase revenue through targeted <strong>{keyword}</strong> strategies.</p>

          <h2>Our Services for {industryName} Businesses</h2>
          <ul>
            <li><strong>SEO for {industryName}</strong> — Rank for industry-specific keywords that your customers search for. Local SEO to dominate Google Maps.</li>
            <li><strong>Social Media for {industryName}</strong> — Engaging content that resonates with your target audience. Platform-specific strategies.</li>
            <li><strong>Google Ads for {industryName}</strong> — Targeted PPC campaigns that reach potential customers at the moment of intent.</li>
            <li><strong>Website Design for {industryName}</strong> — Industry-optimized websites that convert visitors into customers/leads.</li>
            <li><strong>Content Marketing for {industryName}</strong> — Authority-building content that educates, engages, and converts.</li>
            <li><strong>Reputation Management</strong> — Review management, brand monitoring, and positive online presence building.</li>
          </ul>

          <h2>Why {industryName} Businesses in Goa Need Digital Marketing</h2>
          <p>The {industryName.toLowerCase()} market in Goa is increasingly competitive. Whether your customers are locals, tourists, or businesses — they&apos;re searching online before making decisions. Here&apos;s why digital marketing is essential:</p>
          <ul>
            <li><strong>Visibility</strong> — Be found when potential customers search for {industryName.toLowerCase()} services in Goa</li>
            <li><strong>Trust</strong> — Build credibility through reviews, content, and consistent online presence</li>
            <li><strong>Lead Generation</strong> — Convert website visitors and social followers into paying customers</li>
            <li><strong>Competitive Edge</strong> — Stay ahead of competitors who are already investing in digital</li>
            <li><strong>Measurable ROI</strong> — Track every rupee spent and optimize for maximum returns</li>
          </ul>

          <h2>Results We&apos;ve Achieved for {industryName} Clients</h2>
          <ul>
            <li>✓ 150%+ average increase in organic traffic within 6 months</li>
            <li>✓ 3X improvement in lead generation through targeted campaigns</li>
            <li>✓ 40% reduction in cost-per-acquisition through optimized ads</li>
            <li>✓ 200% increase in social media engagement and follower growth</li>
            <li>✓ Top-3 local rankings for high-intent industry keywords</li>
          </ul>

          <h2>Our {industryName} Marketing Process</h2>
          <ul>
            <li><strong>Industry Research</strong> — Deep dive into {industryName.toLowerCase()} trends, competitors, and opportunities in Goa</li>
            <li><strong>Customer Persona Mapping</strong> — Understanding your ideal customer&apos;s journey and touchpoints</li>
            <li><strong>Channel Strategy</strong> — Selecting the right mix of SEO, social, paid, and content for your goals</li>
            <li><strong>Campaign Execution</strong> — Professional implementation by industry-experienced team members</li>
            <li><strong>Performance Optimization</strong> — Continuous A/B testing, bid management, and strategy refinement</li>
            <li><strong>Monthly Reporting</strong> — Clear dashboards showing leads, conversions, and business impact</li>
          </ul>

          <h2>Get Started — Free {industryName} Marketing Consultation</h2>
          <p>Book a free 30-minute consultation where we&apos;ll analyze your {industryName.toLowerCase()} business&apos;s digital presence and recommend a custom growth strategy. No obligations, no pushy sales — just expert advice.</p>
          <ul>
            <li>📞 <a href="tel:+919923352923">+91 9923352923</a></li>
            <li>📧 <a href="mailto:help@sanctify.in">help@sanctify.in</a></li>
            <li>🌐 <a href="/contact/">Request a callback →</a></li>
          </ul>

          <h2>Explore Our Full Service Range</h2>
          <p>
            <a href="/seo-services/">SEO Services</a> · <a href="/social-media-marketing/">Social Media Marketing</a> · <a href="/web-design/">Web Design</a> · <a href="/google-ads/">Google Ads</a> · <a href="/content-marketing/">Content Marketing</a> · <a href="/ai-marketing/">AI Marketing</a> · <a href="/pricing/">View Pricing</a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">Grow Your {industryName} Business in Goa</h2>
          <p className="mt-4 text-white/70 text-lg">Free consultation + custom strategy for your industry</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all">Book Free Consultation</a>
            <a href="tel:+919923352923" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Call +91 9923352923</a>
          </div>
        </div>
      </section>
    </>
  );
}
