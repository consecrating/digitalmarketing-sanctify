"use client";
import { Search, Share2, Layout, MousePointerClick, PenTool, Brain, Mail, Palette, Video, Shield, ArrowRight } from "lucide-react";

const services = [
  { icon: Search, title: "SEO Services", href: "/seo-services/", desc: "Dominate Google rankings with technical SEO, local SEO, and AI-ready optimization.", color: "bg-primary-50 text-primary" },
  { icon: Share2, title: "Social Media Marketing", href: "/social-media-marketing/", desc: "Strategic management of Facebook, Instagram, LinkedIn & YouTube for brand growth.", color: "bg-secondary-50 text-secondary-dark" },
  { icon: Layout, title: "Web Design", href: "/web-design/", desc: "Stunning, fast-loading, conversion-optimized websites built for results.", color: "bg-accent/10 text-accent-dark" },
  { icon: MousePointerClick, title: "Google Ads", href: "/google-ads/", desc: "Maximize ROI with expert PPC campaigns — Search, Display & YouTube ads.", color: "bg-primary-50 text-primary" },
  { icon: PenTool, title: "Content Marketing", href: "/content-marketing/", desc: "Authority-building content that ranks on Google and converts readers to customers.", color: "bg-secondary-50 text-secondary-dark" },
  { icon: Brain, title: "AI Marketing", href: "/ai-marketing/", desc: "Get cited by ChatGPT, Gemini & Perplexity with GEO/AEO optimization.", color: "bg-accent/10 text-accent-dark" },
  { icon: Mail, title: "Email Marketing", href: "/email-marketing/", desc: "Automated email campaigns for nurturing leads and driving repeat business.", color: "bg-primary-50 text-primary" },
  { icon: Palette, title: "Graphic Design", href: "/graphic-design/", desc: "Professional branding, social creatives, packaging & visual communication.", color: "bg-secondary-50 text-secondary-dark" },
  { icon: Video, title: "Video Marketing", href: "/video-marketing/", desc: "Engaging video content — reels, ads, corporate videos & YouTube strategy.", color: "bg-accent/10 text-accent-dark" },
  { icon: Shield, title: "Reputation Management", href: "/reputation-management/", desc: "Protect and enhance your online reputation with review & brand management.", color: "bg-primary-50 text-primary" },
];

export function ServicesOverview() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-50/40 rounded-full -translate-y-1/2 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm font-semibold">Our Digital Marketing Services in Goa</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark">
            10 Services to <span className="text-primary">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-gray text-base md:text-lg leading-relaxed">
            Full-spectrum digital marketing solutions — from SEO to AI. Everything your Goa business needs to dominate online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <a key={i} href={s.href} className="group bg-white border border-gray-100 hover:border-primary/20 rounded-xl p-5 transition-all duration-300 hover-lift block">
              <div className={`w-11 h-11 rounded-lg ${s.color.split(' ')[0]} flex items-center justify-center mb-3`}>
                <s.icon size={20} className={s.color.split(' ')[1]} />
              </div>
              <h3 className="text-dark font-bold text-sm mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-gray text-xs leading-relaxed">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
