import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalmarketing.sanctify.in"),
  title: {
    default: "Digital Marketing Agency in Goa | Sanctify — #1 SEO & Social Media Company",
    template: "%s | Sanctify Digital Marketing Goa",
  },
  description:
    "Sanctify is the best digital marketing agency in Goa offering SEO, social media marketing, Google Ads, web design & AI-powered growth strategies. Serving Panaji, Margao, Mapusa & all Goa. Call +91 9923352923.",
  keywords: [
    "digital marketing agency in Goa",
    "best digital marketing company in Goa",
    "social media marketing agency Goa",
    "SEO company in Goa",
    "web design agency Goa",
    "digital marketing services Goa",
    "Google Ads agency Goa",
    "advertising agency Goa",
  ],
  authors: [{ name: "Sanctify", url: "https://www.digitalmarketing.sanctify.in" }],
  creator: "Sanctify",
  publisher: "Sanctify - Advertising & Marketing Agency",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.digitalmarketing.sanctify.in",
    siteName: "Sanctify Digital Marketing",
    title: "Digital Marketing Agency in Goa | Sanctify — SEO, Social Media & Web Design",
    description: "Goa's leading digital marketing agency. Expert SEO, social media, Google Ads, web design & AI marketing. 8+ years. Free consultation!",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sanctify - Digital Marketing Agency in Goa" }],
  },
  twitter: { card: "summary_large_image", title: "Digital Marketing Agency in Goa | Sanctify", description: "Goa's #1 digital marketing agency." },
  other: { "geo.region": "IN-GA", "geo.placename": "Zuarinagar, Goa", "geo.position": "15.3983;73.8389", "ICBM": "15.3983, 73.8389" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.digitalmarketing.sanctify.in/#organization",
    name: "Sanctify - Digital Marketing Agency",
    alternateName: "Sanctify Advertising & Marketing Agency Goa",
    url: "https://www.digitalmarketing.sanctify.in",
    logo: "https://www.digitalmarketing.sanctify.in/images/logo.png",
    image: "https://www.digitalmarketing.sanctify.in/images/og-image.jpg",
    description: "Best digital marketing agency in Goa offering SEO, social media marketing, Google Ads, web design and AI-powered growth strategies since 2016.",
    telephone: "+919923352923",
    email: "help@sanctify.in",
    foundingDate: "2012",
    founder: { "@type": "Person", name: "Punit Sahay" },
    address: { "@type": "PostalAddress", streetAddress: "#176/1-A, MES College Road, Bharat Nagar Colony", addressLocality: "Zuarinagar, Vasco-da-Gama", addressRegion: "Goa", postalCode: "403726", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: 15.3983, longitude: 73.8389 },
    areaServed: [
      { "@type": "City", name: "Panaji" }, { "@type": "City", name: "Margao" },
      { "@type": "City", name: "Mapusa" }, { "@type": "City", name: "Vasco da Gama" },
      { "@type": "City", name: "Calangute" }, { "@type": "City", name: "Porvorim" },
      { "@type": "State", name: "Goa" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization (SEO)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Marketing" } },
      ],
    },
    priceRange: "₹₹",
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "18:00" }],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "128", bestRating: "5" },
    sameAs: ["https://www.facebook.com/sanctify.in", "https://www.instagram.com/sanctify.in", "https://www.linkedin.com/company/sanctify"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sanctify Digital Marketing",
    url: "https://www.digitalmarketing.sanctify.in",
    potentialAction: { "@type": "SearchAction", target: "https://www.digitalmarketing.sanctify.in/?s={search_term_string}", "query-input": "required name=search_term_string" },
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.digitalmarketing.sanctify.in" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
