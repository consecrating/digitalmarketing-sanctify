import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Sanctify is one of the best digital media marketing agencies in Goa. I advertised my company through them and received an excellent response.",
    name: "S. Nizami Interior Decorator",
    place: "Margao, Goa",
    sector: "Interiors",
  },
  {
    quote: "One of the best digital marketing service providers in Goa. Completely professional and efficient — the returns on investment speak for themselves.",
    name: "Travel LIFE",
    place: "Chicalim, Goa",
    sector: "Travel",
  },
  {
    quote: "I recommend Sanctify for web design and digital media marketing. They built a professional hotel website for us that drives direct bookings.",
    name: "Hotel Supreme Grande",
    place: "Calangute, Goa",
    sector: "Hospitality",
  },
  {
    quote: "I joined Sanctify as an intern and recommend them for digital media marketing. Genuinely expert team with proven strategies.",
    name: "Praveen Manvi",
    place: "Belgaum, Karnataka",
    sector: "Alumni",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-paper py-20 md:py-28 overflow-hidden" aria-label="Client testimonials">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="type-eyebrow text-electric">Client words</p>
            <h2 className="mt-3 type-display text-ink">
              Trusted across
              <br />
              <span className="type-accent-italic text-slate">the state.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-ink text-white rounded-full pl-5 pr-6 py-3">
            <div className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={13} className="fill-acid text-acid" />
              ))}
            </div>
            <span className="text-sm">
              <strong className="font-bold">4.8</strong>
              <span className="text-white/50"> / 128 reviews</span>
            </span>
          </div>
        </div>

        {/* Offset masonry-ish grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`relative rounded-2xl p-7 md:p-8 lift ${
                i % 3 === 0
                  ? "bg-ink text-white grain"
                  : "bg-white edge-soft text-ink"
              } ${i === 1 ? "md:mt-8" : ""} ${i === 3 ? "md:-mt-8" : ""}`}
            >
              <Quote
                size={28}
                className={i % 3 === 0 ? "text-acid/40" : "text-electric/20"}
                aria-hidden="true"
              />
              <blockquote className={`mt-4 text-base md:text-lg leading-relaxed ${i % 3 === 0 ? "text-white/85" : "text-ink/80"}`}>
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t flex items-center justify-between gap-4"
                style={{ borderColor: i % 3 === 0 ? "rgba(255,255,255,0.1)" : "rgba(26,33,66,0.08)" }}
              >
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className={`text-xs mt-0.5 ${i % 3 === 0 ? "text-white/45" : "text-slate"}`}>{r.place}</p>
                </div>
                <span
                  className={`type-eyebrow px-2.5 py-1 rounded-full shrink-0 ${
                    i % 3 === 0 ? "bg-white/[0.08] text-acid" : "bg-electric-50 text-electric"
                  }`}
                >
                  {r.sector}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
