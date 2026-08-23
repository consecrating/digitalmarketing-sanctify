"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What makes Sanctify the best digital marketing agency in Goa?",
    a: "Sanctify combines 8+ years of experience, deep Goa-local market expertise, AI-powered tools, and a data-driven approach. We've served 200+ clients across Panaji, Margao, Mapusa, Vasco, and Calangute with proven results in SEO, social media, and paid advertising."
  },
  {
    q: "How much does digital marketing cost in Goa?",
    a: "Our digital marketing packages start from ₹15,000/month for basic social media management. Most growing businesses invest ₹30,000-60,000/month for comprehensive SEO + social media + paid ads. We offer free consultations to recommend the best package for your budget and goals."
  },
  {
    q: "How long does SEO take to show results in Goa?",
    a: "For local SEO in Goa, you can expect to see improvements in 3-4 months, with significant ranking gains in 6-8 months. Competitive keywords like 'hotels in Goa' may take longer. We provide monthly progress reports so you can track every improvement."
  },
  {
    q: "Do you work with businesses outside of Goa?",
    a: "Yes! While our office is in Zuarinagar, Goa, we serve clients across India and internationally. Our digital marketing strategies are effective regardless of location. We have clients in Karnataka, Maharashtra, and even abroad."
  },
  {
    q: "What social media platforms do you manage?",
    a: "We manage Facebook, Instagram, LinkedIn, YouTube, Twitter/X, and Google Business Profile. For Goa businesses, we typically recommend Facebook and Instagram as primary channels, with LinkedIn for B2B. Our team creates custom content for each platform."
  },
  {
    q: "Can you help my hotel/restaurant rank higher on Google?",
    a: "Absolutely! Tourism and hospitality is our specialty in Goa. We optimize Google Business Profile, manage reviews, create SEO-optimized content targeting 'best hotel in [area]' keywords, and run targeted Google Ads and social media campaigns for maximum bookings."
  },
  {
    q: "What is AI marketing and do you offer it?",
    a: "AI marketing uses artificial intelligence for content creation, predictive analytics, automated ad optimization, and search optimization for AI engines (GEO/AEO). We use AI tools to create content that gets your business cited by ChatGPT, Gemini, and Perplexity alongside traditional Google rankings."
  },
  {
    q: "Do you offer website design as part of your digital marketing services?",
    a: "Yes! We design modern, fast-loading, mobile-responsive websites optimized for conversions and SEO. A well-designed website is the foundation of effective digital marketing. Our web design packages start from ₹25,000 for a complete business website."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-gray-light overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark">
            Questions About <span className="text-primary">Digital Marketing</span> in Goa?
          </h2>
          <p className="mt-4 text-gray text-base md:text-lg">Everything you need to know about our digital marketing services</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-50/30 transition-colors"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-dark font-semibold text-sm md:text-base pr-4">{faq.q}</h3>
                {openIndex === i ? <Minus size={18} className="text-primary shrink-0" /> : <Plus size={18} className="text-gray shrink-0" />}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 border-t border-gray-50">
                  <p className="text-gray text-sm leading-relaxed mt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
