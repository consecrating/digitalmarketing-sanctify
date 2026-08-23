/**
 * Page Generator Script
 * Generates 150+ SEO-optimized pages for digitalmarketing.sanctify.in
 * Run with: npx tsx scripts/generate-pages.ts
 */

import * as fs from "fs";
import * as path from "path";

const APP_DIR = path.join(__dirname, "..", "src", "app");

// ====== DATA ======

const services = [
  { slug: "seo-services", name: "SEO Services", keyword: "SEO company in Goa", shortName: "SEO", icon: "Search", desc: "Search engine optimization to rank your business #1 on Google. Technical SEO, local SEO, link building, and content optimization." },
  { slug: "social-media-marketing", name: "Social Media Marketing", keyword: "social media marketing agency Goa", shortName: "Social Media", icon: "Share2", desc: "Strategic social media management across Facebook, Instagram, LinkedIn & YouTube. Content creation, community management, and paid campaigns." },
  { slug: "web-design", name: "Web Design & Development", keyword: "web design agency Goa", shortName: "Web Design", icon: "Layout", desc: "Stunning, fast-loading, mobile-responsive websites that convert visitors into customers. Modern UI/UX with SEO-ready architecture." },
  { slug: "google-ads", name: "Google Ads Management", keyword: "Google Ads agency Goa", shortName: "Google Ads", icon: "MousePointerClick", desc: "Maximize ROI with expertly managed Google Ads campaigns. Search, display, YouTube, and remarketing — optimized for your best cost-per-lead." },
  { slug: "content-marketing", name: "Content Marketing", keyword: "content marketing agency Goa", shortName: "Content", icon: "PenTool", desc: "Strategic content that ranks and converts — blog posts, articles, infographics, video scripts. Building topical authority for your brand." },
  { slug: "ai-marketing", name: "AI-Powered Marketing", keyword: "AI marketing agency Goa", shortName: "AI Marketing", icon: "Brain", desc: "Leverage AI for predictive analytics, automated campaigns, GEO/AEO optimization — get cited by ChatGPT, Gemini & Perplexity." },
  { slug: "email-marketing", name: "Email Marketing", keyword: "email marketing services Goa", shortName: "Email", icon: "Mail", desc: "Personalized email campaigns for conversion, retention and nurturing. Automated workflows, newsletters, and drip campaigns." },
  { slug: "graphic-design", name: "Graphic Design & Branding", keyword: "graphic design agency Goa", shortName: "Design", icon: "Palette", desc: "Logo design, brand identity, social media creatives, brochures, packaging design, and visual branding that communicates your story." },
  { slug: "video-marketing", name: "Video Marketing", keyword: "video marketing agency Goa", shortName: "Video", icon: "Video", desc: "Professional video content — promotional videos, reels, YouTube content, corporate videos, and video advertising that captures attention." },
  { slug: "reputation-management", name: "Online Reputation Management", keyword: "reputation management Goa", shortName: "ORM", icon: "Shield", desc: "Monitor, manage, and improve your online reputation. Review management, crisis response, and building a positive digital footprint." },
];

const locations = [
  { slug: "panaji", name: "Panaji", altName: "Panjim", area: "North Goa" },
  { slug: "margao", name: "Margao", altName: "Madgaon", area: "South Goa" },
  { slug: "mapusa", name: "Mapusa", altName: "Mapusa", area: "North Goa" },
  { slug: "vasco", name: "Vasco da Gama", altName: "Vasco", area: "South Goa" },
  { slug: "calangute", name: "Calangute", altName: "Calangute-Baga", area: "North Goa" },
  { slug: "porvorim", name: "Porvorim", altName: "Porvorim", area: "North Goa" },
  { slug: "ponda", name: "Ponda", altName: "Ponda", area: "South Goa" },
  { slug: "candolim", name: "Candolim", altName: "Candolim", area: "North Goa" },
  { slug: "anjuna", name: "Anjuna", altName: "Anjuna-Vagator", area: "North Goa" },
  { slug: "old-goa", name: "Old Goa", altName: "Velha Goa", area: "North Goa" },
  { slug: "dona-paula", name: "Dona Paula", altName: "Dona Paula", area: "North Goa" },
  { slug: "colva", name: "Colva", altName: "Colva Beach", area: "South Goa" },
  { slug: "benaulim", name: "Benaulim", altName: "Benaulim", area: "South Goa" },
  { slug: "bicholim", name: "Bicholim", altName: "Bicholim", area: "North Goa" },
];

const industries = [
  { slug: "hotels-resorts", name: "Hotels & Resorts", keyword: "digital marketing for hotels in Goa" },
  { slug: "restaurants-cafes", name: "Restaurants & Cafes", keyword: "digital marketing for restaurants in Goa" },
  { slug: "real-estate", name: "Real Estate", keyword: "digital marketing for real estate in Goa" },
  { slug: "healthcare", name: "Healthcare & Clinics", keyword: "digital marketing for healthcare in Goa" },
  { slug: "education", name: "Education & Coaching", keyword: "digital marketing for education in Goa" },
  { slug: "tourism", name: "Tourism & Travel", keyword: "digital marketing for tourism in Goa" },
  { slug: "retail", name: "Retail & E-commerce", keyword: "digital marketing for retail in Goa" },
  { slug: "it-companies", name: "IT Companies", keyword: "digital marketing for IT companies in Goa" },
  { slug: "fitness-wellness", name: "Fitness & Wellness", keyword: "digital marketing for fitness in Goa" },
  { slug: "events-weddings", name: "Events & Weddings", keyword: "digital marketing for events in Goa" },
  { slug: "automotive", name: "Automotive", keyword: "digital marketing for automotive in Goa" },
  { slug: "construction", name: "Construction & Interior", keyword: "digital marketing for construction in Goa" },
  { slug: "legal", name: "Legal Services", keyword: "digital marketing for lawyers in Goa" },
  { slug: "finance", name: "Finance & Insurance", keyword: "digital marketing for finance in Goa" },
  { slug: "ngos-nonprofits", name: "NGOs & Non-Profits", keyword: "digital marketing for NGOs in Goa" },
];

const blogTopics = [
  { slug: "why-digital-marketing-important-goa-businesses", title: "Why Digital Marketing is Important for Goa Businesses in 2026", keyword: "digital marketing importance Goa" },
  { slug: "seo-tips-small-business-goa", title: "10 SEO Tips for Small Businesses in Goa", keyword: "SEO tips Goa small business" },
  { slug: "facebook-ads-guide-goa", title: "Complete Guide to Facebook Ads for Goa Businesses", keyword: "Facebook ads Goa guide" },
  { slug: "instagram-marketing-hotels-goa", title: "Instagram Marketing for Hotels in Goa — Complete Guide", keyword: "Instagram marketing hotels Goa" },
  { slug: "google-business-profile-goa", title: "How to Optimize Google Business Profile for Goa Businesses", keyword: "Google Business Profile optimization Goa" },
  { slug: "local-seo-guide-goa", title: "Local SEO Guide for Goa — Rank in Google Maps", keyword: "local SEO Goa guide" },
  { slug: "best-time-post-social-media-goa", title: "Best Time to Post on Social Media for Goa Audience", keyword: "best time post social media Goa" },
  { slug: "website-cost-goa", title: "How Much Does a Website Cost in Goa? [2026 Guide]", keyword: "website cost Goa" },
  { slug: "digital-marketing-vs-traditional-advertising-goa", title: "Digital Marketing vs Traditional Advertising for Goa Businesses", keyword: "digital marketing vs traditional Goa" },
  { slug: "ai-marketing-future-goa", title: "AI Marketing: The Future of Digital Advertising in Goa", keyword: "AI marketing future Goa" },
  { slug: "content-marketing-strategy-goa", title: "How to Build a Content Marketing Strategy for Your Goa Business", keyword: "content marketing strategy Goa" },
  { slug: "google-ads-vs-facebook-ads-goa", title: "Google Ads vs Facebook Ads — Which is Better for Goa Businesses?", keyword: "Google Ads vs Facebook Ads Goa" },
  { slug: "ecommerce-marketing-goa", title: "E-commerce Marketing Strategies for Goa Businesses", keyword: "ecommerce marketing Goa" },
  { slug: "video-marketing-goa-tourism", title: "Video Marketing for Goa Tourism Industry", keyword: "video marketing Goa tourism" },
  { slug: "whatsapp-marketing-goa", title: "WhatsApp Marketing for Goa Businesses — Complete Guide", keyword: "WhatsApp marketing Goa" },
  { slug: "reputation-management-hotels-goa", title: "Online Reputation Management for Hotels in Goa", keyword: "reputation management hotels Goa" },
  { slug: "ppc-advertising-goa", title: "PPC Advertising for Goa Businesses — Maximize Your ROI", keyword: "PPC advertising Goa" },
  { slug: "social-media-trends-goa-2026", title: "Social Media Trends in Goa for 2026", keyword: "social media trends Goa 2026" },
  { slug: "seo-vs-ppc-goa", title: "SEO vs PPC: Which Should Your Goa Business Invest In?", keyword: "SEO vs PPC Goa" },
  { slug: "digital-marketing-roi-goa", title: "Measuring Digital Marketing ROI for Goa Businesses", keyword: "digital marketing ROI Goa" },
];

// ====== GENERATORS ======

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateServicePage(service: typeof services[0]) {
  const dir = path.join(APP_DIR, service.slug);
  ensureDir(dir);
  const content = `import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "${service.name} in Goa — ${service.keyword}",
  description: "${service.desc} Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted ${service.shortName} partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/${service.slug}/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="${service.name}"
      keyword="${service.keyword}"
      description="${service.desc}"
      slug="${service.slug}"
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

function generateLocationServicePage(service: typeof services[0], location: typeof locations[0]) {
  const slug = `${service.slug}-in-${location.slug}`;
  const dir = path.join(APP_DIR, slug);
  ensureDir(dir);
  const title = `${service.name} in ${location.name}, Goa`;
  const keyword = `${service.shortName.toLowerCase()} ${location.name} Goa`;
  const content = `import type { Metadata } from "next";
import { LocationServiceTemplate } from "@/components/LocationServiceTemplate";

export const metadata: Metadata = {
  title: "${title} — Best ${service.shortName} Agency",
  description: "Looking for ${service.shortName.toLowerCase()} services in ${location.name}, Goa? Sanctify offers professional ${service.name.toLowerCase()} for businesses in ${location.name} (${location.area}). Free consultation. Call +91 9923352923.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/${slug}/" },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      serviceName="${service.name}"
      serviceSlug="${service.slug}"
      locationName="${location.name}"
      locationSlug="${location.slug}"
      area="${location.area}"
      keyword="${keyword}"
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

function generateIndustryPage(industry: typeof industries[0]) {
  const slug = `digital-marketing-for-${industry.slug}`;
  const dir = path.join(APP_DIR, slug);
  ensureDir(dir);
  const content = `import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for ${industry.name} in Goa",
  description: "${industry.keyword}. Sanctify offers specialized digital marketing strategies for ${industry.name.toLowerCase()} businesses in Goa. SEO, social media, Google Ads & more. Free consultation!",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/${slug}/" },
};

export default function Page() {
  return (
    <IndustryPageTemplate
      industryName="${industry.name}"
      industrySlug="${industry.slug}"
      keyword="${industry.keyword}"
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

function generateBlogPost(topic: typeof blogTopics[0]) {
  const dir = path.join(APP_DIR, "blog", topic.slug);
  ensureDir(dir);
  const content = `import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "${topic.title}",
  description: "Learn about ${topic.keyword}. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/${topic.slug}/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="${topic.title}"
      slug="${topic.slug}"
      keyword="${topic.keyword}"
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

// ====== EXECUTION ======

console.log("🚀 Generating pages...");

// Core service pages (10)
services.forEach(s => { generateServicePage(s); console.log(`  ✓ Service: ${s.slug}`); });

// Location × Service pages (10 services × 14 locations = 140 — pick top 7 services × 10 locations = 70)
const topServices = services.slice(0, 7);
const topLocations = locations.slice(0, 10);
topServices.forEach(s => {
  topLocations.forEach(l => {
    generateLocationServicePage(s, l);
  });
});
console.log(`  ✓ Location pages: ${topServices.length * topLocations.length}`);

// Industry pages (15)
industries.forEach(ind => { generateIndustryPage(ind); });
console.log(`  ✓ Industry pages: ${industries.length}`);

// Blog posts (20)
blogTopics.forEach(t => { generateBlogPost(t); });
console.log(`  ✓ Blog posts: ${blogTopics.length}`);

// Static pages
const staticPages = ["about", "contact", "pricing", "blog", "portfolio", "careers", "privacy-policy", "terms"];
staticPages.forEach(p => {
  const dir = path.join(APP_DIR, p);
  ensureDir(dir);
});

const totalPages = 1 + services.length + (topServices.length * topLocations.length) + industries.length + blogTopics.length + staticPages.length;
console.log(`\n✅ Total pages generated: ${totalPages}`);
console.log("   Run 'npm run build' to compile.");
