"use client";
import { ArrowRight, Star, MapPin, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
          alt="Digital marketing workspace with analytics dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-primary-900/80" />
      </div>
      <div className="absolute inset-0 grid-pattern" />
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div>
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-6">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-white/90 text-sm font-medium">Rated 4.8/5 — Top Digital Marketing Agency in Goa</span>
          </div>

          {/* H1 — Primary keyword */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary-light">Digital Marketing</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Agency in Goa</span>
            <br />
            <span className="text-white/80 text-2xl sm:text-3xl md:text-4xl font-bold mt-2 block">that actually moves the needle.</span>
          </h1>

          {/* Subtext with secondary keywords */}
          <p className="mt-6 text-white/65 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Sanctify is Goa&apos;s leading <strong className="text-white/90">SEO company</strong>, <strong className="text-white/90">social media marketing agency</strong>, and <strong className="text-white/90">web design</strong> partner. We help businesses across Panaji, Margao, Mapusa &amp; all of Goa grow with data-driven digital strategies.
          </p>

          {/* Location trust signal */}
          <div className="mt-4 flex items-center gap-2 text-white/50 text-sm">
            <MapPin size={14} />
            <span>Zuarinagar, Goa — Serving all of Goa since 2012</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact/" className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark px-7 py-4 rounded-xl font-bold text-base transition-all shadow-lg">
              Get Free Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-7 py-4 rounded-xl font-bold text-base transition-all backdrop-blur-sm">
              Our Services
            </a>
          </div>

          {/* Quick proof points */}
          <div className="mt-10 flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /><span>12+ Years Experience</span></div>
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /><span>200+ Projects Delivered</span></div>
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /><span>AI-Powered Strategies</span></div>
          </div>
          </div>

          {/* Right - Image with floating cards */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                  alt="Digital marketing analytics dashboard showing growth metrics"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating card - SEO growth */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-premium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-dark font-bold text-sm">+284% Traffic</p>
                    <p className="text-gray text-xs">Organic growth in 6 months</p>
                  </div>
                </div>
              </div>
              {/* Floating card - Rating */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-premium">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (<Star key={i} size={14} className="text-accent fill-accent" />))}
                  </div>
                  <span className="text-dark font-bold text-sm">4.8/5</span>
                </div>
                <p className="text-gray text-xs mt-1">128 Google Reviews</p>
              </div>
              {/* Floating card - Clients */}
              <div className="absolute top-1/2 -right-8 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <p className="text-dark font-bold text-xs">200+ Clients</p>
                <p className="text-gray text-[10px]">Across Goa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
