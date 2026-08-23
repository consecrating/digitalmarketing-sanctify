"use client";
import { Phone, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grid-pattern" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
          Ready to Dominate Digital in Goa?
        </h2>
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          Get a free digital marketing consultation from Goa&apos;s most trusted agency. We&apos;ll analyze your business and recommend a custom growth strategy — no obligations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/contact/" className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all text-base">
            Get Free Strategy Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:+919923352923" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
            <Phone size={18} /> +91 9923352923
          </a>
        </div>
        <p className="mt-6 text-white/40 text-sm">Trusted by 200+ businesses across Goa · Rated 4.8/5 from 128 reviews</p>
      </div>
    </section>
  );
}
