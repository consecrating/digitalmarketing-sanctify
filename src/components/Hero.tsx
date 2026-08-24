import { ArrowUpRight, Star, MapPin, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden mesh-ink grain">
      <div className="absolute inset-0 field-grid-light" />

      {/* Rotating badge */}
      <div className="absolute top-28 right-6 lg:right-16 hidden md:block z-20">
        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full anim-spin-slow">
            <defs>
              <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-acid" style={{ fontSize: "9px", letterSpacing: "0.22em", fontWeight: 700 }}>
              <textPath href="#circlePath">GOA · SINCE 2012 · GOA · SINCE 2012 ·</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-acid font-black text-2xl lg:text-3xl">12</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 anim-rise">
          <span className="inline-flex items-center gap-2 bg-acid text-ink px-3.5 py-1.5 rounded-full type-eyebrow">
            <Star size={11} className="fill-ink" /> Rated 4.8 / 5
          </span>
          <span className="inline-flex items-center gap-2 edge-light bg-white/[0.04] text-white/60 px-3.5 py-1.5 rounded-full type-eyebrow">
            <MapPin size={11} /> Zuarinagar · All Goa
          </span>
        </div>

        {/* Mega headline */}
        <h1 className="mt-7 type-mega text-white anim-rise d-1">
          Digital
          <br />
          Marketing
          <br />
          <span className="text-electric-light">Agency</span>{" "}
          <span className="type-accent-italic text-acid">in Goa</span>
        </h1>

        {/* Two-column meta row under headline */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-6 anim-rise d-2">
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
              We build search visibility that compounds. SEO, social, paid media
              and AI-search optimisation for ambitious businesses across{" "}
              <span className="text-white/90 font-medium">Panaji, Margao, Mapusa</span>{" "}
              and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact/"
                className="group inline-flex items-center gap-2 bg-acid text-ink px-6 py-3.5 rounded-full font-bold text-sm press shadow-hard-acid"
              >
                Get a free audit
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/seo-services/"
                className="inline-flex items-center gap-2 edge-light bg-white/[0.05] hover:bg-white/[0.11] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-colors"
              >
                Explore services
              </a>
            </div>
          </div>

          {/* Bento metric stack */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3 anim-rise d-3">
            <div className="sm:col-span-2 edge-light bg-white/[0.05] rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-acid font-black text-3xl md:text-4xl leading-none">+284%</p>
                  <p className="text-white/45 text-xs mt-2">Avg. organic traffic lift in 6 months</p>
                </div>
                <TrendingUp size={20} className="text-acid shrink-0" />
              </div>
            </div>
            <div className="edge-light bg-white/[0.05] rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-white font-black text-2xl md:text-3xl leading-none">200+</p>
              <p className="text-white/45 text-xs mt-2">Projects shipped</p>
            </div>
            <div className="edge-light bg-white/[0.05] rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-white font-black text-2xl md:text-3xl leading-none">128</p>
              <p className="text-white/45 text-xs mt-2">Verified reviews</p>
            </div>
            <div className="sm:col-span-2 mesh-electric rounded-2xl p-5 relative overflow-hidden">
              <div className="relative z-10">
                <p className="type-eyebrow text-white/70">AI Search Ready</p>
                <p className="text-white font-bold text-sm mt-1.5 leading-snug">
                  GEO · AEO · LLMO — get cited by ChatGPT, Gemini &amp; Perplexity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative z-10 border-t border-white/[0.08] bg-white/[0.02] py-4">
        <div className="marquee marquee--slow">
          <div className="marquee__track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-10 shrink-0">
                {["Search Engine Optimisation", "Social Media", "Google Ads", "Web Design", "AI Search Visibility", "Content Strategy", "Email", "Brand Design"].map((item) => (
                  <span key={item} className="flex items-center gap-10 shrink-0">
                    <span className="type-eyebrow text-white/35 whitespace-nowrap">{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-acid/50 shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
