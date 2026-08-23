import type { Metadata } from "next";
import { Pricing as PricingSection } from "@/components/Pricing";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Digital Marketing Pricing in Goa — Packages from ₹15,000/month",
  description: "Transparent digital marketing pricing for Goa businesses. SEO, social media, Google Ads, web design packages starting ₹15,000/month. Free consultation included. No hidden costs.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-white/50 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
                <li className="text-white/80">Pricing</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
              Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Pricing</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg">Transparent, flexible packages for every Goa business size. No hidden costs, no long-term lock-in.</p>
          </div>
        </div>
      </section>
      <PricingSection />
      <CTABanner />
    </>
  );
}
