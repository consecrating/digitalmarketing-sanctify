import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, User, TrendingUp, Search, Share2, Brain, PenTool, MousePointerClick, BarChart3, Layout, Video, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Blog — Tips, Guides & Insights for Goa Businesses",
  description: "Expert digital marketing blog from Sanctify Goa. SEO tips, social media strategies, Google Ads guides, and growth insights for businesses in Goa. Updated weekly.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/" },
};

const posts = [
  { slug: "why-digital-marketing-important-goa-businesses", title: "Why Digital Marketing is Important for Goa Businesses in 2026", category: "Strategy", date: "Aug 22, 2026", readTime: "8 min", excerpt: "Discover why digital marketing has become non-negotiable for businesses in Goa — from tourism seasonality to mobile-first audiences.", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=75", featured: true },
  { slug: "seo-tips-small-business-goa", title: "10 SEO Tips for Small Businesses in Goa", category: "SEO", date: "Aug 18, 2026", readTime: "10 min", excerpt: "Actionable SEO strategies that Goa's small businesses can implement today to start ranking on Google.", image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=75", featured: true },
  { slug: "facebook-ads-guide-goa", title: "Complete Guide to Facebook Ads for Goa Businesses", category: "Paid Ads", date: "Aug 12, 2026", readTime: "12 min", excerpt: "Everything you need to know about running profitable Facebook Ad campaigns targeting Goa audiences.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=75", featured: true },
  { slug: "instagram-marketing-hotels-goa", title: "Instagram Marketing for Hotels in Goa — Complete Guide", category: "Social Media", date: "Jul 28, 2026", readTime: "9 min", excerpt: "How Goa hotels can leverage Instagram Reels, Stories, and posts to drive direct bookings.", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=75", featured: false },
  { slug: "google-business-profile-goa", title: "How to Optimize Google Business Profile for Goa Businesses", category: "Local SEO", date: "Jul 20, 2026", readTime: "7 min", excerpt: "Step-by-step guide to optimizing your Google Business Profile for maximum local visibility in Goa.", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=75", featured: false },
  { slug: "local-seo-guide-goa", title: "Local SEO Guide for Goa — Rank in Google Maps", category: "SEO", date: "Jul 15, 2026", readTime: "11 min", excerpt: "The definitive guide to ranking in Google's local pack for Goa-based businesses.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75", featured: false },
  { slug: "best-time-post-social-media-goa", title: "Best Time to Post on Social Media for Goa Audience", category: "Social Media", date: "Jun 25, 2026", readTime: "6 min", excerpt: "Data-driven analysis of optimal posting times for Goa audiences across Facebook, Instagram, and LinkedIn.", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75", featured: false },
  { slug: "website-cost-goa", title: "How Much Does a Website Cost in Goa? [2026 Guide]", category: "Web Design", date: "Jun 18, 2026", readTime: "8 min", excerpt: "Transparent breakdown of website development costs in Goa — from basic sites to e-commerce platforms.", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=75", featured: false },
  { slug: "digital-marketing-vs-traditional-advertising-goa", title: "Digital Marketing vs Traditional Advertising for Goa Businesses", category: "Strategy", date: "Jun 10, 2026", readTime: "7 min", excerpt: "A fair comparison of digital vs traditional marketing channels for Goa's unique business landscape.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=75", featured: false },
  { slug: "ai-marketing-future-goa", title: "AI Marketing: The Future of Digital Advertising in Goa", category: "AI", date: "May 28, 2026", readTime: "9 min", excerpt: "How AI is transforming digital marketing in Goa and what businesses need to do to stay ahead.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75", featured: false },
  { slug: "content-marketing-strategy-goa", title: "How to Build a Content Marketing Strategy for Your Goa Business", category: "Content", date: "May 20, 2026", readTime: "10 min", excerpt: "A framework for creating content that attracts, engages, and converts your target audience in Goa.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=75", featured: false },
  { slug: "google-ads-vs-facebook-ads-goa", title: "Google Ads vs Facebook Ads — Which is Better for Goa Businesses?", category: "Paid Ads", date: "May 12, 2026", readTime: "8 min", excerpt: "A data-backed comparison to help you decide where to invest your Goa business's ad budget.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75", featured: false },
  { slug: "ecommerce-marketing-goa", title: "E-commerce Marketing Strategies for Goa Businesses", category: "E-commerce", date: "Apr 28, 2026", readTime: "9 min", excerpt: "How Goa retailers can compete online with targeted e-commerce marketing strategies.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75", featured: false },
  { slug: "video-marketing-goa-tourism", title: "Video Marketing for Goa Tourism Industry", category: "Video", date: "Apr 20, 2026", readTime: "7 min", excerpt: "Leveraging video content to showcase Goa's tourism offerings and drive bookings.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=75", featured: false },
  { slug: "whatsapp-marketing-goa", title: "WhatsApp Marketing for Goa Businesses — Complete Guide", category: "Marketing", date: "Apr 12, 2026", readTime: "8 min", excerpt: "Tap into WhatsApp's massive user base in Goa for customer engagement and direct sales.", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=75", featured: false },
  { slug: "reputation-management-hotels-goa", title: "Online Reputation Management for Hotels in Goa", category: "ORM", date: "Mar 28, 2026", readTime: "7 min", excerpt: "How Goa hotels can manage reviews, respond to feedback, and build a stellar online reputation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75", featured: false },
  { slug: "ppc-advertising-goa", title: "PPC Advertising for Goa Businesses — Maximize Your ROI", category: "Paid Ads", date: "Mar 20, 2026", readTime: "9 min", excerpt: "Advanced PPC strategies to squeeze maximum ROI from every rupee spent on Google Ads.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75", featured: false },
  { slug: "social-media-trends-goa-2026", title: "Social Media Trends in Goa for 2026", category: "Social Media", date: "Mar 10, 2026", readTime: "6 min", excerpt: "The latest social media trends shaping how Goa businesses connect with their audiences.", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=75", featured: false },
  { slug: "seo-vs-ppc-goa", title: "SEO vs PPC: Which Should Your Goa Business Invest In?", category: "Strategy", date: "Feb 25, 2026", readTime: "8 min", excerpt: "Understanding when to invest in organic SEO vs paid PPC for sustainable business growth.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75", featured: false },
  { slug: "digital-marketing-roi-goa", title: "Measuring Digital Marketing ROI for Goa Businesses", category: "Analytics", date: "Feb 15, 2026", readTime: "7 min", excerpt: "How to track and measure the true ROI of your digital marketing investments.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75", featured: false },
];

const categories = ["All", "SEO", "Social Media", "Paid Ads", "Strategy", "AI", "Web Design", "Content", "Local SEO"];

const categoryIcons: Record<string, typeof Search> = {
  "SEO": Search,
  "Social Media": Share2,
  "Paid Ads": MousePointerClick,
  "Strategy": TrendingUp,
  "AI": Brain,
  "Web Design": Layout,
  "Content": PenTool,
  "Local SEO": Search,
  "Video": Video,
  "ORM": Shield,
  "Analytics": BarChart3,
  "E-commerce": Layout,
  "Marketing": Share2,
};

export default function BlogPage() {
  const featured = posts.filter(p => p.featured);
  const regular = posts.filter(p => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
              <li className="text-white/80">Blog</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
              Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Blog</span>
            </h1>
            <p className="mt-4 text-white/65 text-lg max-w-2xl">Expert tips, guides, and actionable insights to help your Goa business dominate online. Written by our team of specialists with 12+ years of experience.</p>
          </div>

          {/* Category pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${i === 0 ? "bg-white text-primary" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Large cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-dark">Featured Articles</h2>
            <span className="text-gray text-sm">{posts.length} articles</span>
          </div>

          {/* Featured grid - 1 large + 2 side */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {/* Main featured */}
            <a href={`/blog/${featured[0].slug}/`} className="group relative rounded-2xl overflow-hidden h-[400px] md:h-[480px] block shadow-premium">
              <img src={featured[0].image} alt={featured[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3">{featured[0].category}</span>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-snug mb-3 group-hover:text-secondary-light transition-colors">{featured[0].title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{featured[0].excerpt}</p>
                <div className="flex items-center gap-4 text-white/50 text-xs">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {featured[0].date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {featured[0].readTime} read</span>
                  <span className="flex items-center gap-1.5"><User size={12} /> Sanctify Team</span>
                </div>
              </div>
            </a>

            {/* Side featured */}
            <div className="flex flex-col gap-6">
              {featured.slice(1, 3).map((post, i) => (
                <a key={i} href={`/blog/${post.slug}/`} className="group flex gap-4 md:gap-6 bg-gray-light rounded-2xl overflow-hidden h-[220px] md:h-[225px] hover-lift transition-all">
                  <div className="w-2/5 shrink-0 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center py-4 pr-4 md:pr-6">
                    <span className="inline-block w-fit text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary-50 px-2.5 py-1 rounded-md mb-2">{post.category}</span>
                    <h3 className="text-dark font-bold text-sm md:text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray text-xs line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-gray text-[11px]">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* All Posts Grid */}
          <h2 className="text-2xl md:text-3xl font-black text-dark mb-8">All Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post, i) => {
              const Icon = categoryIcons[post.category] || PenTool;
              return (
                <a key={i} href={`/blog/${post.slug}/`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/20 hover-lift transition-all block">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white bg-dark/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                        <Icon size={10} /> {post.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-dark font-bold text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray text-xs leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray text-[11px]">
                        <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                      </div>
                      <span className="text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Read <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-white font-black text-2xl md:text-3xl">Get Digital Marketing Tips in Your Inbox</h3>
            <p className="text-white/70 text-base mt-3 max-w-xl mx-auto">Join 1,000+ Goa business owners who get our weekly insights on SEO, social media, and growth strategies.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/40 transition-colors" />
              <button className="bg-accent hover:bg-accent-dark text-dark px-6 py-3.5 rounded-xl font-bold text-sm transition-colors shrink-0">Subscribe</button>
            </div>
            <p className="text-white/40 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
}
