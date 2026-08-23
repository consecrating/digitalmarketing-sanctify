"use client";
import { Search, Share2, Layout, MousePointerClick, PenTool, Brain, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Search, title: "Search Engine Optimization (SEO)", tag: "Organic Growth", desc: "Dominate Google rankings with technical SEO, on-page optimization, local SEO for Goa, and high-authority link building. We optimize for AI search engines too — GEO & AEO ready.", keywords: "SEO company in Goa" },
  { icon: Share2, title: "Social Media Marketing", tag: "Brand Awareness", desc: "Strategic social media management across Facebook, Instagram, LinkedIn & YouTube. Content creation, community management, and paid social campaigns that build loyal audiences.", keywords: "social media marketing agency Goa" },
  { icon: Layout, title: "Web Design & Development", tag: "Digital Presence", desc: "Stunning, conversion-optimized websites built with modern technology. Fast loading, mobile-first, SEO-ready designs that turn visitors into customers.", keywords: "web design agency Goa" },
  { icon: MousePointerClick, title: "Google Ads & PPC", tag: "Instant Traffic", desc: "Maximize ROI with expertly managed Google Ads campaigns. Search ads, display network, YouTube ads, and remarketing — all optimized for your best cost-per-lead.", keywords: "Google Ads agency Goa" },
  { icon: PenTool, title: "Content Marketing", tag: "Authority Building", desc: "Strategic content that ranks and converts — blog posts, articles, infographics, video scripts. Building topical authority that makes you the go-to brand in your industry.", keywords: "content marketing Goa" },
  { icon: Brain, title: "AI-Powered Marketing", tag: "Next-Gen Growth", desc: "Leverage artificial intelligence for predictive analytics, automated campaigns, AI-generated creative content, and GEO/AEO optimization to get cited by ChatGPT, Gemini & Perplexity.", keywords: "AI marketing agency Goa" },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-50/60 rounded-full -translate-y-1/2 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm font-semibold">Our Digital Marketing Services in Goa</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark">
            Full-Stack <span className="text-primary">Digital Marketing</span> Solutions
          </h2>
          <p className="mt-4 text-gray text-base md:text-lg leading-relaxed">
            From SEO to AI marketing — everything your business needs to dominate the digital landscape in Goa and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={i} className="group bg-white border border-gray-100 hover:border-primary/20 rounded-2xl p-6 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/50 group-hover:to-transparent transition-all duration-500" />
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary-50 px-2.5 py-1 rounded-md mb-4">{s.tag}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center mb-4 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-dark font-bold text-lg mb-2 flex items-center gap-2">
                  {s.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                </h3>
                <p className="text-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
