/** Maps page slugs to generated imagery in /public/images. */

export const IMG = {
  heroTeam: "/images/hero-team.webp",
  officeCollab: "/images/office-collab.webp",
  seoAnalytics: "/images/seo-analytics.webp",
  socialContent: "/images/social-content.webp",
  webDesign: "/images/web-design.webp",
  paidAds: "/images/paid-ads.webp",
  aiSearch: "/images/ai-search.webp",
  contentWriting: "/images/content-writing.webp",
  hospitality: "/images/hospitality-goa.webp",
  restaurant: "/images/restaurant-goa.webp",
  realEstate: "/images/realestate-goa.webp",
  goaCity: "/images/goa-city.webp",
  clientMeeting: "/images/meeting-client.webp",
} as const;

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "seo-services": { src: IMG.seoAnalytics, alt: "Search analytics dashboard showing organic growth" },
  "social-media-marketing": { src: IMG.socialContent, alt: "Content being produced for social channels" },
  "web-design": { src: IMG.webDesign, alt: "Designer working on a website layout" },
  "google-ads": { src: IMG.paidAds, alt: "Paid advertising performance dashboard" },
  "content-marketing": { src: IMG.contentWriting, alt: "Writer drafting content at a workspace" },
  "ai-marketing": { src: IMG.aiSearch, alt: "Abstract visual representing AI-driven search" },
  "email-marketing": { src: IMG.contentWriting, alt: "Email campaign being planned at a desk" },
  "graphic-design": { src: IMG.webDesign, alt: "Brand design work in progress" },
  "video-marketing": { src: IMG.socialContent, alt: "Video content production setup" },
  "reputation-management": { src: IMG.clientMeeting, alt: "Client review discussion in an office" },
};

const INDUSTRY_IMAGES: Record<string, { src: string; alt: string }> = {
  "hotels-resorts": { src: IMG.hospitality, alt: "Boutique hotel exterior with pool in Goa" },
  "restaurants-cafes": { src: IMG.restaurant, alt: "Warmly lit restaurant interior in Goa" },
  "real-estate": { src: IMG.realEstate, alt: "Contemporary villa exterior in Goa" },
  tourism: { src: IMG.goaCity, alt: "Aerial view of the Panaji waterfront in Goa" },
  healthcare: { src: IMG.clientMeeting, alt: "Professional consultation in a bright office" },
  education: { src: IMG.officeCollab, alt: "Team reviewing plans together" },
  retail: { src: IMG.socialContent, alt: "Product photography setup for retail" },
  "it-companies": { src: IMG.webDesign, alt: "Developer working at a monitor" },
  "fitness-wellness": { src: IMG.socialContent, alt: "Lifestyle content production" },
  "events-weddings": { src: IMG.restaurant, alt: "Event venue interior in Goa" },
  automotive: { src: IMG.paidAds, alt: "Campaign performance review" },
  construction: { src: IMG.realEstate, alt: "Modern architecture in Goa" },
  legal: { src: IMG.clientMeeting, alt: "Professional client meeting" },
  finance: { src: IMG.seoAnalytics, alt: "Analytics and reporting on screen" },
  "ngos-nonprofits": { src: IMG.officeCollab, alt: "Team collaborating around a table" },
};

export function serviceImage(slug: string) {
  return SERVICE_IMAGES[slug] ?? { src: IMG.officeCollab, alt: "Sanctify team at work in Goa" };
}

export function industryImage(slug: string) {
  return INDUSTRY_IMAGES[slug] ?? { src: IMG.officeCollab, alt: "Sanctify team at work in Goa" };
}

/** Rotates through scene imagery so blog cards are not all identical. */
const BLOG_POOL = [
  IMG.seoAnalytics, IMG.socialContent, IMG.aiSearch, IMG.paidAds,
  IMG.contentWriting, IMG.webDesign, IMG.goaCity, IMG.officeCollab,
  IMG.hospitality, IMG.clientMeeting, IMG.restaurant, IMG.realEstate,
];

export function blogImage(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) % 9973;
  return BLOG_POOL[h % BLOG_POOL.length];
}
