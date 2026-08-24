import { ArrowUpRight, Star, MapPin, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* Photographic base — lifts the section out of flat black */}
      <div className="absolute inset-0">
        <img
          src="/images/goa-city.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/92 via-electric-900/80 to-ink/70" />
      </div>
      <div className="absolute inset-0 field-grid-light opacity-50" aria-hidden="true" />
      <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-electric/25 blur-[130px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-acid/10 blur-[120px]" aria-hidden="true" />

      {/* Rotating credential badge */}
      <div className="absolute top-24 right-6 lg:right-16 hidden md:block z-20">
        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full anim-spin-slow" aria-hidden="true">
            <defs>
              <path id="badgeArc" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-acid" style={{ fontSize: "8.5px", letterSpacing: "0.2em", fontWeight: 700 }}>
              <textPath href="#badgeArc">GOA · SINCE 2012 · GOA · SINCE 2012 ·</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
            <span className="text-acid font-black text-2xl lg:text-3xl">14</span>
            <span className="text-white/45 text-[0.5rem] tracking-[0.12em] uppercase mt-0.5">years</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-14 md:pt-20 md:pb-18">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-2.5 anim-rise">
          <span className="inline-flex items-center gap-1.5 bg-acid text-ink px-3 py-1.5 rounded-full type-eyebrow">
            <Star size={10} className="fill-ink" /> Rated 4.8 / 5
          </span>
          <span className="inline-flex items-center gap-1.5 border border-white/[0.16] bg-white/[0.06] backdrop-blur-sm text-white/65 px-3 py-1.5 rounded-full type-eyebrow">
            <MapPin size={10} /> Zuarinagar · All Goa
          </span>
        </div>

        <div className="mt-7 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <h1 className="type-mega text-white anim-rise d-1">
              Digital
              <br />
              Marketing
              <br />
              <span className="text-electric-light">Agency</span>{" "}
              <span className="type-accent-italic text-acid">in Goa</span>
            </h1>

            <p className="mt-7 text-white/65 text-base md:text-lg leading-relaxed max-w-xl anim-rise d-2">
              We build search visibility that compounds. SEO, social, paid media
              and AI-search optimisation for ambitious businesses across{" "}
              <span className="text-white/90 font-medium">Panaji, Margao, Mapusa</span>{" "}
              and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 anim-rise d-3">
              <a
                href="/contact/"
                className="group inline-flex items-center gap-2 bg-acid text-ink px-6 py-3.5 rounded-[6px] font-bold text-sm hover:bg-white transition-colors"
              >
                Get a free audit
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/seo-services/"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/45 hover:bg-white/[0.06] text-white px-6 py-3.5 rounded-[6px] font-semibold text-sm transition-colors"
              >
                Explore services
              </a>
            </div>
          </div>

          {/* Visual column — real imagery + overlaid metrics */}
          <div className="lg:col-span-5 anim-rise d-4">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl">
                <img
                  src="/images/hero-team.webp"
                  alt="Sanctify strategists reviewing campaign performance data"
                  width={900}
                  height={600}
                  className="w-full h-[280px] md:h-[340px] object-cover"
                />
              </div>

              {/* Metric card — traffic */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 shadow-float anim-drift">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-acid text-ink grid place-items-center shrink-0">
                    <TrendingUp size={16} />
                  </span>
                  <div>
                    <p className="font-black text-ink text-lg leading-none">+284%</p>
                    <p className="text-slate text-[0.6875rem] mt-1">Median traffic lift</p>
                  </div>
                </div>
              </div>

              {/* Metric card — projects */}
              <div className="absolute -top-4 -right-3 bg-electric text-white rounded-xl px-4 py-3 shadow-float">
                <p className="font-black text-lg leading-none">200+</p>
                <p className="text-white/70 text-[0.6875rem] mt-1">Projects shipped</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metric strip */}
        <dl className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 anim-rise d-5">
          {[
            { v: "14+", k: "Years operating", d: "Founded 2012" },
            { v: "200+", k: "Projects delivered", d: "15 sectors" },
            { v: "128", k: "Verified reviews", d: "4.8 average" },
            { v: "GEO · AEO · LLMO", k: "AI search ready", d: "Cited by assistants", wide: true },
          ].map((m) => (
            <div
              key={m.k}
              className={`border border-white/[0.12] rounded-xl p-5 backdrop-blur-sm ${
                m.wide ? "bg-electric/25" : "bg-white/[0.06]"
              }`}
            >
              <dd className={`font-black text-white leading-none ${m.wide ? "text-base" : "text-2xl md:text-3xl"}`}>
                {m.v}
              </dd>
              <dt className="text-white/80 text-xs font-semibold mt-2">{m.k}</dt>
              <p className="text-white/40 text-[0.6875rem] mt-0.5">{m.d}</p>
            </div>
          ))}
        </dl>
      </div>

      {/* Marquee */}
      <div className="relative z-10 border-t border-white/[0.1] bg-ink/60 backdrop-blur-sm py-4">
        <div className="marquee marquee--slow">
          <div className="marquee__track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-10 shrink-0">
                {["Search Engine Optimisation", "Social Media", "Google Ads", "Web Design", "AI Search Visibility", "Content Strategy", "Email", "Brand Design"].map((item) => (
                  <span key={item} className="flex items-center gap-10 shrink-0">
                    <span className="type-eyebrow text-white/40 whitespace-nowrap">{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-acid/50 shrink-0" aria-hidden="true" />
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
