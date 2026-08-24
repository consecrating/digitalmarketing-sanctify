import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const SITE = "https://www.digitalmarketing.sanctify.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Digital Marketing Agency in Goa | Sanctify — SEO, Social & AI Search",
    template: "%s | Sanctify Digital Marketing Goa",
  },
  description:
    "Sanctify is a digital marketing agency in Goa delivering SEO, social media, Google Ads, web design and AI search visibility. Operating since 2012 · 200+ projects · Rated 4.8/5. Serving Panaji, Margao, Mapusa and all Goa.",
  keywords: [
    "digital marketing agency in Goa",
    "best digital marketing company in Goa",
    "SEO company in Goa",
    "social media marketing agency Goa",
    "web design agency Goa",
    "Google Ads agency Goa",
    "AI marketing agency Goa",
    "GEO optimisation Goa",
    "advertising agency Goa",
  ],
  authors: [{ name: "Sanctify", url: SITE }],
  creator: "Sanctify",
  publisher: "Sanctify — Advertising & Marketing Agency",
  category: "Marketing & Advertising",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE,
    siteName: "Sanctify Digital Marketing",
    title: "Digital Marketing Agency in Goa | Sanctify",
    description:
      "SEO, social media, Google Ads, web design and AI search visibility for ambitious businesses across Goa. Operating since 2012.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sanctify — Digital Marketing Agency in Goa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Goa | Sanctify",
    description: "SEO, social, paid media and AI search visibility. Goa, since 2012.",
    images: ["/images/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-GA",
    "geo.placename": "Zuarinagar, Vasco-da-Gama, Goa",
    "geo.position": "15.3983;73.8389",
    ICBM: "15.3983, 73.8389",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  /* ---------- Organisation / LocalBusiness ---------- */
  const organisation = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": `${SITE}/#organization`,
    name: "Sanctify — Digital Marketing Agency",
    alternateName: ["Sanctify", "Sanctify Advertising & Marketing Agency Goa"],
    url: SITE,
    logo: { "@type": "ImageObject", url: `${SITE}/images/logo.png`, width: 512, height: 512 },
    image: `${SITE}/images/og-image.jpg`,
    description:
      "Digital marketing agency in Goa providing SEO, social media marketing, Google Ads, web design, content and AI search visibility (GEO, AEO, LLMO). Operating from South Goa since 2012.",
    slogan: "Search visibility that compounds.",
    telephone: "+919923352923",
    email: "help@sanctify.in",
    foundingDate: "2012",
    founder: { "@type": "Person", name: "Punit Sahay", jobTitle: "Founder & Proprietor" },
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 25 },
    knowsLanguage: ["en", "hi", "kok", "mr"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "#176/1-A, MES College Road, Bharat Nagar Colony",
      addressLocality: "Zuarinagar, Vasco-da-Gama",
      addressRegion: "Goa",
      postalCode: "403726",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 15.3983, longitude: 73.8389 },
    hasMap: "https://maps.google.com/?q=Zuarinagar+Vasco-da-Gama+Goa+403726",
    areaServed: [
      { "@type": "State", name: "Goa" },
      { "@type": "City", name: "Panaji" },
      { "@type": "City", name: "Margao" },
      { "@type": "City", name: "Mapusa" },
      { "@type": "City", name: "Vasco da Gama" },
      { "@type": "City", name: "Calangute" },
      { "@type": "City", name: "Porvorim" },
      { "@type": "City", name: "Ponda" },
      { "@type": "City", name: "Candolim" },
      { "@type": "Country", name: "India" },
    ],
    serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 15.3983, longitude: 73.8389 }, geoRadius: "80000" },
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, UPI, Credit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services in Goa",
      itemListElement: [
        "Search Engine Optimisation (SEO)",
        "Social Media Marketing",
        "Google Ads & PPC Management",
        "Web Design & Development",
        "Content Marketing",
        "AI Marketing & Search Visibility",
        "GEO — Generative Engine Optimisation",
        "AEO — Answer Engine Optimisation",
        "LLMO — Large Language Model Optimisation",
        "Email Marketing",
        "Graphic Design & Branding",
        "Video Marketing",
        "Online Reputation Management",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, provider: { "@id": `${SITE}/#organization` }, areaServed: { "@type": "State", name: "Goa" } },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919923352923",
        contactType: "sales",
        email: "help@sanctify.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Konkani", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+393208058390",
        contactType: "customer support",
        areaServed: "IT",
        availableLanguage: ["English", "Italian"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/sanctify.in",
      "https://www.instagram.com/sanctify.in",
      "https://www.linkedin.com/company/sanctify",
      "https://www.crunchbase.com/organization/sanctify",
    ],
  };

  /* ---------- WebSite ---------- */
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "Sanctify Digital Marketing",
    url: SITE,
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE}/blog/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  /* ---------- Founder (E-E-A-T) ---------- */
  const founder = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#punit-sahay`,
    name: "Punit Sahay",
    jobTitle: "Founder & Proprietor",
    worksFor: { "@id": `${SITE}/#organization` },
    description:
      "Punit Sahay founded Sanctify in 2012 to bring national-standard advertising and digital marketing practice to businesses in Goa.",
    knowsAbout: [
      "Search Engine Optimisation",
      "Digital Marketing Strategy",
      "Generative Engine Optimisation",
      "Paid Media",
      "Brand Strategy",
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="canonical" href={SITE} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#0A0A0F" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founder) }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-[62px] md:pt-[98px]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
