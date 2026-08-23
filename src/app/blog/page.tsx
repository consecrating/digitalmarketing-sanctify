import type { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Blog — Tips, Guides & Insights for Goa Businesses",
  description: "Expert digital marketing blog from Sanctify Goa. SEO tips, social media strategies, Google Ads guides, and growth insights for businesses in Goa. Updated weekly.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/" },
};

const posts = [
  { slug: "why-digital-marketing-important-goa-businesses", title: "Why Digital Marketing is Important for Goa Businesses in 2026", category: "Strategy", date: "Aug 2026" },
  { slug: "seo-tips-small-business-goa", title: "10 SEO Tips for Small Businesses in Goa", category: "SEO", date: "Aug 2026" },
  { slug: "facebook-ads-guide-goa", title: "Complete Guide to Facebook Ads for Goa Businesses", category: "Paid Ads", date: "Aug 2026" },
  { slug: "instagram-marketing-hotels-goa", title: "Instagram Marketing for Hotels in Goa — Complete Guide", category: "Social Media", date: "Jul 2026" },
  { slug: "google-business-profile-goa", title: "How to Optimize Google Business Profile for Goa Businesses", category: "Local SEO", date: "Jul 2026" },
  { slug: "local-seo-guide-goa", title: "Local SEO Guide for Goa — Rank in Google Maps", category: "SEO", date: "Jul 2026" },
  { slug: "best-time-post-social-media-goa", title: "Best Time to Post on Social Media for Goa Audience", category: "Social Media", date: "Jun 2026" },
  { slug: "website-cost-goa", title: "How Much Does a Website Cost in Goa? [2026 Guide]", category: "Web Design", date: "Jun 2026" },
  { slug: "digital-marketing-vs-traditional-advertising-goa", title: "Digital Marketing vs Traditional Advertising for Goa Businesses", category: "Strategy", date: "Jun 2026" },
  { slug: "ai-marketing-future-goa", title: "AI Marketing: The Future of Digital Advertising in Goa", category: "AI", date: "May 2026" },
  { slug: "content-marketing-strategy-goa", title: "How to Build a Content Marketing Strategy for Your Goa Business", category: "Content", date: "May 2026" },
  { slug: "google-ads-vs-facebook-ads-goa", title: "Google Ads vs Facebook Ads — Which is Better for Goa Businesses?", category: "Paid Ads", date: "May 2026" },
  { slug: "ecommerce-marketing-goa", title: "E-commerce Marketing Strategies for Goa Businesses", category: "E-commerce", date: "Apr 2026" },
  { slug: "video-marketing-goa-tourism", title: "Video Marketing for Goa Tourism Industry", category: "Video", date: "Apr 2026" },
  { slug: "whatsapp-marketing-goa", title: "WhatsApp Marketing for Goa Businesses — Complete Guide", category: "Marketing", date: "Apr 2026" },
  { slug: "reputation-management-hotels-goa", title: "Online Reputation Management for Hotels in Goa", category: "ORM", date: "Mar 2026" },
  { slug: "ppc-advertising-goa", title: "PPC Advertising for Goa Businesses — Maximize Your ROI", category: "Paid Ads", date: "Mar 2026" },
  { slug: "social-media-trends-goa-2026", title: "Social Media Trends in Goa for 2026", category: "Social Media", date: "Mar 2026" },
  { slug: "seo-vs-ppc-goa", title: "SEO vs PPC: Which Should Your Goa Business Invest In?", category: "Strategy", date: "Feb 2026" },
  { slug: "digital-marketing-roi-goa", title: "Measuring Digital Marketing ROI for Goa Businesses", category: "Analytics", date: "Feb 2026" },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
              <li className="text-white/80">Blog</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Blog</span>
          </h1>
          <p className="mt-4 text-white/65 text-lg max-w-2xl">Expert tips, guides, and insights to help your Goa business grow online. Updated weekly by our team.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <a key={i} href={`/blog/${post.slug}/`} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary/20 hover-lift transition-all block">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary-50 px-2.5 py-1 rounded-md mb-3">{post.category}</span>
                <h2 className="text-dark font-bold text-base mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray text-xs"><Calendar size={12} /> {post.date}</span>
                  <span className="text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Read <ArrowRight size={12} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
