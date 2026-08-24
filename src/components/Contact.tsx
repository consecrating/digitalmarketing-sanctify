"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check, ArrowUpRight } from "lucide-react";

const services = [
  "SEO Services", "Social Media Marketing", "Web Design & Development",
  "Google Ads & PPC", "Content Marketing", "AI Search Visibility (GEO/AEO/LLMO)",
  "Email Marketing", "Graphic Design & Branding", "Video Marketing",
  "Reputation Management", "Full digital programme", "Not sure yet",
];

const budgets = [
  "Under ₹15,000/month", "₹15,000 – ₹30,000/month",
  "₹30,000 – ₹60,000/month", "₹60,000+/month",
  "One-time project", "Need guidance",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="relative bg-ink grain overflow-hidden">
        <div className="absolute inset-0 field-grid-light opacity-70" aria-hidden="true" />
        <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-electric/20 blur-[130px]" aria-hidden="true" />

        <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-14 md:pt-16 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex items-center gap-2 text-[0.6875rem] text-white/40">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-white/20" aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">Contact</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="type-eyebrow text-acid anim-rise">Get in touch</p>
              <h1 className="mt-3 type-display text-white anim-rise d-1">
                Start with an audit,
                <br />
                <span className="type-accent-italic text-electric-light">not a pitch.</span>
              </h1>
              <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed max-w-2xl anim-rise d-2">
                Send us your website and we&apos;ll return a written summary: where you
                currently stand on Google and in AI answers, how local competitors compare,
                and the three changes we would prioritise. No cost, no obligation.
              </p>
            </div>

            <div className="lg:col-span-5 anim-rise d-3">
              <dl className="grid grid-cols-2 gap-3">
                {[
                  { k: "Response time", v: "Within 24 hours" },
                  { k: "Consultation", v: "Free of charge" },
                  { k: "Contract terms", v: "No lock-in" },
                  { k: "Operating since", v: "2012 · 14+ years" },
                ].map((f) => (
                  <div key={f.k} className="border border-white/[0.11] bg-white/[0.04] rounded-xl p-4">
                    <dt className="type-eyebrow text-white/35">{f.k}</dt>
                    <dd className="mt-1.5 font-bold text-white text-[0.9375rem] leading-tight">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white edge-soft rounded-2xl p-6 md:p-8 shadow-float">
                <h2 className="type-heading text-ink">Request your free audit</h2>
                <p className="mt-2 text-slate text-[0.9375rem]">
                  All fields marked with an asterisk are required.
                </p>

                {sent ? (
                  <div className="mt-8 bg-sand rounded-xl p-6 text-center" role="status">
                    <span className="w-12 h-12 rounded-full bg-ink text-acid grid place-items-center mx-auto">
                      <Check size={22} strokeWidth={2.5} />
                    </span>
                    <p className="mt-4 font-bold text-ink text-lg">Enquiry noted</p>
                    <p className="mt-2 text-slate text-sm leading-relaxed max-w-sm mx-auto">
                      This demo form does not transmit data. To reach us directly, please
                      call <a href="tel:+919923352923" className="text-electric font-semibold">+91 99233 52923</a> or
                      email <a href="mailto:help@sanctify.in" className="text-electric font-semibold">help@sanctify.in</a>.
                    </p>
                  </div>
                ) : (
                  <form
                    className="mt-7 space-y-4"
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block type-eyebrow text-slate-light mb-1.5">Full name *</label>
                        <input id="name" name="name" type="text" required
                          className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink placeholder:text-slate-light outline-none focus:border-electric transition-colors"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block type-eyebrow text-slate-light mb-1.5">Business name</label>
                        <input id="company" name="company" type="text"
                          className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink placeholder:text-slate-light outline-none focus:border-electric transition-colors"
                          placeholder="Company or brand" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block type-eyebrow text-slate-light mb-1.5">Email *</label>
                        <input id="email" name="email" type="email" required
                          className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink placeholder:text-slate-light outline-none focus:border-electric transition-colors"
                          placeholder="you@company.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block type-eyebrow text-slate-light mb-1.5">Phone *</label>
                        <input id="phone" name="phone" type="tel" required
                          className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink placeholder:text-slate-light outline-none focus:border-electric transition-colors"
                          placeholder="+91 …" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="website" className="block type-eyebrow text-slate-light mb-1.5">Website</label>
                      <input id="website" name="website" type="url"
                        className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink placeholder:text-slate-light outline-none focus:border-electric transition-colors"
                        placeholder="https://" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block type-eyebrow text-slate-light mb-1.5">Service of interest *</label>
                        <select id="service" name="service" required defaultValue=""
                          className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink outline-none focus:border-electric transition-colors">
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block type-eyebrow text-slate-light mb-1.5">Indicative budget</label>
                        <select id="budget" name="budget" defaultValue=""
                          className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink outline-none focus:border-electric transition-colors">
                          <option value="" disabled>Select a range</option>
                          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block type-eyebrow text-slate-light mb-1.5">What are you trying to achieve?</label>
                      <textarea id="message" name="message" rows={4}
                        className="w-full bg-sand border border-ink/[0.1] rounded-[6px] px-4 py-3 text-[0.875rem] text-ink placeholder:text-slate-light outline-none focus:border-electric transition-colors resize-none"
                        placeholder="A sentence or two about your goals and current situation" />
                    </div>

                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-ink hover:bg-electric text-white py-4 rounded-[6px] font-bold text-sm transition-colors">
                      <Send size={16} /> Send enquiry
                    </button>

                    <p className="text-slate text-[0.6875rem] leading-relaxed">
                      By submitting you agree to our{" "}
                      <a href="/privacy-policy/" className="text-electric font-medium underline">Privacy Policy</a>.
                      We use your details only to respond to this enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Details */}
            <aside className="lg:col-span-5 space-y-4">
              <a href="tel:+919923352923" className="group flex items-start gap-4 bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                <span className="w-11 h-11 rounded-xl bg-ink text-acid grid place-items-center shrink-0"><Phone size={18} /></span>
                <span>
                  <span className="block type-eyebrow text-slate-light">Call</span>
                  <span className="block font-bold text-ink text-lg mt-1">+91 99233 52923</span>
                  <span className="block text-slate text-xs mt-1">Mon–Sat, 09:00–18:00 IST</span>
                </span>
              </a>

              <a href="mailto:help@sanctify.in" className="group flex items-start gap-4 bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                <span className="w-11 h-11 rounded-xl bg-electric text-white grid place-items-center shrink-0"><Mail size={18} /></span>
                <span>
                  <span className="block type-eyebrow text-slate-light">Email</span>
                  <span className="block font-bold text-ink text-base mt-1">help@sanctify.in</span>
                  <span className="block text-slate text-xs mt-1">Reply within 24 hours</span>
                </span>
              </a>

              <div className="bg-sand rounded-2xl p-6">
                <span className="inline-flex items-center gap-2 type-eyebrow text-slate-light">
                  <MapPin size={12} /> Head office
                </span>
                <address className="mt-3 not-italic text-ink/80 text-[0.875rem] leading-relaxed">
                  #176/1-A, MES College Road,<br />
                  Bharat Nagar Colony, Zuarinagar,<br />
                  Vasco-da-Gama, Goa 403726, India
                </address>
                <p className="mt-4 pt-4 border-t border-ink/[0.1] inline-flex items-center gap-2 text-slate text-xs">
                  <Clock size={12} /> Monday–Saturday · 09:00–18:00 IST
                </p>
              </div>

              <div className="bg-white edge-soft rounded-2xl p-6">
                <p className="type-eyebrow text-slate-light mb-3">Other contact points</p>
                <div className="space-y-3 text-[0.8125rem]">
                  <div>
                    <p className="font-semibold text-ink">Varanasi, India</p>
                    <p className="text-slate leading-relaxed">D-50/35 BN, Dalmandi Road, Kazipura Kalan, Varanasi, UP 221001</p>
                  </div>
                  <div className="pt-3 border-t border-ink/[0.07]">
                    <p className="font-semibold text-ink">Fontanella, Italy</p>
                    <p className="text-slate leading-relaxed">Pran&apos;s Food snc, Via Circonvallazione 868, 24056 Fontanella</p>
                    <a href="tel:+393208058390" className="text-electric font-medium">+39 320 805 8390</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sand border-t border-ink/[0.07]" aria-label="Office location map">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-7">
            <div>
              <p className="type-eyebrow text-electric">Find us</p>
              <h2 className="mt-2.5 type-heading text-ink">Zuarinagar, Vasco-da-Gama</h2>
            </div>
            <a
              href="https://maps.google.com/?q=Sanctify+Digital+Marketing+Agency+Goa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink hover:bg-electric text-white px-5 py-3 rounded-[6px] font-semibold text-[0.8125rem] transition-colors"
            >
              Open in Google Maps <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden edge-soft shadow-float bg-white">
            <iframe
              title="Sanctify — Digital Marketing Agency, Zuarinagar, Goa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7732819802127!2d73.864098!3d15.388760099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc7c03d308173%3A0xa3af40d5786c68bb!2sSanctify%20%E2%80%94%20Digital%20Marketing%20Agency%20Goa!5e0!3m2!1sen!2sin!4v1787530981980!5m2!1sen!2sin"
              width="100%"
              height="460"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
