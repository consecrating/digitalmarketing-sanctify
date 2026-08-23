"use client";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 gradient-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
              <Send size={14} className="text-secondary" />
              <span className="text-secondary text-sm font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Grow Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">in Goa?</span>
            </h2>
            <p className="mt-4 text-white/55 text-base md:text-lg leading-relaxed">
              Get a free digital marketing consultation. We&apos;ll analyze your current online presence and recommend a custom strategy.
            </p>

            <div className="mt-10 space-y-4">
              <a href="tel:+919923352923" className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-primary/30 rounded-xl p-5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0"><Phone size={20} className="text-primary-light" /></div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">Call Us</p>
                  <p className="text-white font-semibold text-lg">+91 9923352923</p>
                </div>
              </a>
              <a href="mailto:info@sanctify.in" className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-secondary/30 rounded-xl p-5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0"><Mail size={20} className="text-secondary" /></div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">Email</p>
                  <p className="text-white font-semibold">info@sanctify.in</p>
                </div>
              </a>
              <div className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0"><MapPin size={20} className="text-primary-light" /></div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">Office — Goa</p>
                  <p className="text-white/80 text-sm leading-relaxed mt-1">#176/1-A, MES College Road,<br />Zuarinagar, Goa 403726, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0"><Clock size={20} className="text-accent" /></div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-medium">Working Hours</p>
                  <p className="text-white/80 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/[0.04] border border-white/[0.1] rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-white font-bold text-xl mb-2">Get Your Free Strategy Session</h3>
              <p className="text-white/50 text-sm mb-6">Fill the form and our team will get back within 24 hours</p>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full bg-white/[0.06] border border-white/10 focus:border-primary/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/[0.06] border border-white/10 focus:border-primary/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/[0.06] border border-white/10 focus:border-primary/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors" />
                <select className="w-full bg-white/[0.06] border border-white/10 focus:border-primary/50 rounded-xl px-5 py-3.5 text-white/50 text-sm outline-none transition-colors">
                  <option value="">Select Service Interested In</option>
                  <option value="seo">SEO</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="ads">Google Ads / PPC</option>
                  <option value="web">Web Design</option>
                  <option value="content">Content Marketing</option>
                  <option value="ai">AI Marketing</option>
                  <option value="all">Complete Digital Marketing</option>
                </select>
                <textarea placeholder="Tell us about your business..." rows={3} className="w-full bg-white/[0.06] border border-white/10 focus:border-primary/50 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm outline-none transition-colors resize-none" />
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-base transition-all shadow-primary flex items-center justify-center gap-2">
                  <MessageCircle size={18} /> Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
