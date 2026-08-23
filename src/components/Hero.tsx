"use client";
import { ArrowRight, Star, MapPin, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern" />
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-40">
        <div className="max-w-4xl">
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
            <span>Zuarinagar, Goa — Serving all of Goa since 2016</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark px-7 py-4 rounded-xl font-bold text-base transition-all shadow-lg">
              Get Free Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-7 py-4 rounded-xl font-bold text-base transition-all backdrop-blur-sm">
              Our Services
            </a>
          </div>

          {/* Quick proof points */}
          <div className="mt-10 flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /><span>8+ Years Experience</span></div>
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /><span>200+ Projects Delivered</span></div>
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /><span>AI-Powered Strategies</span></div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
