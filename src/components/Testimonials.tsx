"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "S. Nizami Interior Decorator", location: "Margao, Goa", text: "SANCTIFY is one of the best Digital Media Marketing Agency in Goa. I advertised my company through them and received excellent response. Highly recommended!" },
  { name: "Travel LIFE", location: "Chicalim, Goa", text: "One of the best digital marketing service providers in Goa. Guaranteed returns on investment — completely professional and efficient in digital services." },
  { name: "Hotel Supreme Grande", location: "Calangute, Goa", text: "I recommend SANCTIFY for Web-designing & Digital Media Marketing. They designed a professional hotel website for us that drives direct bookings." },
  { name: "Praveen Manvi", location: "Belgaum, Karnataka", text: "I joined SANCTIFY as an Intern and recommend them for Digital Media Marketing. They are truly the best at what they do — expert team and proven strategies." },
];

export function Testimonials() {
  // JSON-LD for reviews
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sanctify - Digital Marketing Agency",
    review: testimonials.map(t => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
    })),
  };

  return (
    <section className="relative py-20 md:py-28 bg-gray-light overflow-hidden" aria-label="Client testimonials">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-accent-dark text-sm font-semibold">Client Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark">
            Trusted by Businesses <span className="text-primary">Across Goa</span>
          </h2>
          <p className="mt-4 text-gray text-base md:text-lg">Real results from real Goa businesses — see what our clients say</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover-lift transition-all">
              <Quote size={24} className="text-primary/20 mb-3" />
              <p className="text-dark/80 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-dark font-bold text-sm">{t.name}</p>
                  <p className="text-gray text-xs">{t.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-accent fill-accent" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
