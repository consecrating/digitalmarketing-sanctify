"use client";
import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown, ChevronRight, Search, Share2, Layout,
  MousePointerClick, PenTool, Brain, Mail, Palette, Video, Shield,
  Sparkles, MessageSquare, Bot, Phone, MapPin,
} from "lucide-react";

/* ---------------- Navigation data ---------------- */

const serviceColumns = [
  {
    label: "Search & Content",
    items: [
      { href: "/seo-services/", label: "Search Engine Optimisation", icon: Search },
      { href: "/content-marketing/", label: "Content Marketing", icon: PenTool },
      { href: "/ai-seo/", label: "AI SEO", icon: Search },
      { href: "/reputation-management/", label: "Reputation Management", icon: Shield },
    ],
  },
  {
    label: "Paid & Social",
    items: [
      { href: "/google-ads/", label: "Google Ads & PPC", icon: MousePointerClick },
      { href: "/social-media-marketing/", label: "Social Media Marketing", icon: Share2 },
      { href: "/email-marketing/", label: "Email Marketing", icon: Mail },
      { href: "/video-marketing/", label: "Video Marketing", icon: Video },
    ],
  },
  {
    label: "AI Visibility",
    items: [
      { href: "/ai-marketing/", label: "AI Marketing", icon: Brain },
      { href: "/geo-optimization/", label: "GEO Optimisation", icon: Sparkles },
      { href: "/aeo-services/", label: "AEO Services", icon: MessageSquare },
      { href: "/llmo-services/", label: "LLMO Services", icon: Bot },
      { href: "/chatgpt-visibility/", label: "ChatGPT Visibility", icon: Bot },
    ],
  },
  {
    label: "Design & Build",
    items: [
      { href: "/web-design/", label: "Web Design & Development", icon: Layout },
      { href: "/graphic-design/", label: "Graphic Design & Branding", icon: Palette },
    ],
  },
];

const industryLinks = [
  { href: "/digital-marketing-for-hotels-resorts/", label: "Hotels & Resorts" },
  { href: "/digital-marketing-for-restaurants-cafes/", label: "Restaurants & Cafés" },
  { href: "/digital-marketing-for-real-estate/", label: "Real Estate" },
  { href: "/digital-marketing-for-healthcare/", label: "Healthcare" },
  { href: "/digital-marketing-for-tourism/", label: "Tourism & Travel" },
  { href: "/digital-marketing-for-education/", label: "Education" },
  { href: "/digital-marketing-for-retail/", label: "Retail & E-commerce" },
  { href: "/digital-marketing-for-it-companies/", label: "IT & Technology" },
];

const locationLinks = [
  { href: "/seo-services-in-panaji/", label: "Panaji" },
  { href: "/seo-services-in-margao/", label: "Margao" },
  { href: "/seo-services-in-mapusa/", label: "Mapusa" },
  { href: "/seo-services-in-vasco/", label: "Vasco da Gama" },
  { href: "/seo-services-in-calangute/", label: "Calangute" },
  { href: "/seo-services-in-porvorim/", label: "Porvorim" },
  { href: "/seo-services-in-ponda/", label: "Ponda" },
  { href: "/seo-services-in-candolim/", label: "Candolim" },
];

const companyLinks = [
  { href: "/about/", label: "About Sanctify", desc: "Founded 2012 · South Goa" },
  { href: "/portfolio/", label: "Portfolio", desc: "200+ delivered projects" },
  { href: "/pricing/", label: "Pricing", desc: "Retainers from ₹15,000/mo" },
  { href: "/blog/", label: "Insights", desc: "Guides & industry analysis" },
  { href: "/careers/", label: "Careers", desc: "Open roles in Goa" },
  { href: "/contact/", label: "Contact", desc: "Offices & enquiries" },
];

const legalLinks = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms & Conditions" },
];

type MenuKey = "services" | "industries" | "company" | null;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobilePanel, setMobilePanel] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenMenu(null); setMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navItem =
    "px-3 py-2 text-[0.8125rem] font-medium tracking-tight text-ink/70 hover:text-ink transition-colors inline-flex items-center gap-1";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* ---------- Utility bar ---------- */}
      <div className="hidden md:block bg-ink text-white/60">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 h-9 flex items-center justify-between text-[0.6875rem]">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={11} className="text-white/35" />
              Zuarinagar, Vasco-da-Gama, Goa 403726
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white/35">
              Mon–Sat · 09:00–18:00 IST
            </span>
          </div>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="/careers/" className="hover:text-white transition-colors">Careers</a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <a href="mailto:help@sanctify.in" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={11} /> help@sanctify.in
            </a>
            <a href="tel:+919923352923" className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-acid transition-colors">
              <Phone size={11} /> +91 99233 52923
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Primary bar ---------- */}
      <div
        className={`bg-paper transition-shadow duration-300 ${
          scrolled || openMenu ? "shadow-[0_1px_0_0_rgba(10,10,15,0.10),0_8px_24px_-16px_rgba(10,10,15,0.20)]" : "border-b border-ink/[0.08]"
        }`}
      >
        <nav
          className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 h-[62px] flex items-center justify-between gap-6"
          aria-label="Primary navigation"
        >
          {/* Wordmark */}
          <a href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Sanctify — home">
            <span className="w-8 h-8 rounded-[5px] bg-ink text-white grid place-items-center font-bold text-[0.8125rem] shrink-0 transition-colors group-hover:bg-electric">
              S
            </span>
            <span className="leading-none">
              <span className="block font-bold text-[0.9375rem] tracking-tight text-ink">Sanctify</span>
              <span className="block text-[0.5625rem] tracking-[0.16em] uppercase text-slate-light mt-[3px]">
                Digital Marketing
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center" onMouseLeave={() => setOpenMenu(null)}>
            <a href="/" className={navItem}>Home</a>

            {(["services", "industries", "company"] as const).map((key) => (
              <button
                key={key}
                onMouseEnter={() => setOpenMenu(key)}
                onClick={() => setOpenMenu((v) => (v === key ? null : key))}
                className={`${navItem} ${openMenu === key ? "text-ink" : ""}`}
                aria-expanded={openMenu === key}
                aria-haspopup="true"
              >
                {key === "services" ? "Services" : key === "industries" ? "Industries" : "Company"}
                <ChevronDown size={12} className={`transition-transform ${openMenu === key ? "rotate-180" : ""}`} />
              </button>
            ))}

            <a href="/pricing/" className={navItem}>Pricing</a>
            <a href="/blog/" className={navItem}>Insights</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="/contact/"
              className="hidden sm:inline-flex items-center gap-1.5 bg-ink hover:bg-electric text-white px-4 py-2.5 rounded-[6px] text-[0.8125rem] font-semibold transition-colors"
            >
              Request an audit
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-ink"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {/* ---------- MEGA PANELS ---------- */}
        <div
          className={`hidden lg:block absolute inset-x-0 top-full transition-all duration-200 ${
            openMenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onMouseEnter={() => openMenu && setOpenMenu(openMenu)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="bg-paper border-t border-ink/[0.07] border-b border-ink/[0.09] shadow-[0_18px_40px_-24px_rgba(10,10,15,0.28)]">
            <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-8">

              {/* SERVICES */}
              {openMenu === "services" && (
                <div className="grid grid-cols-12 gap-8">
                  {serviceColumns.map((col) => (
                    <div key={col.label} className="col-span-3">
                      <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-slate-light pb-2.5 mb-3 border-b border-ink/[0.08]">
                        {col.label}
                      </p>
                      <ul className="space-y-px">
                        {col.items.map((it) => (
                          <li key={it.href}>
                            <a
                              href={it.href}
                              className="group flex items-center gap-2.5 py-2 px-2 -mx-2 rounded-[5px] hover:bg-ink/[0.035] transition-colors"
                            >
                              <it.icon size={14} className="text-slate-light shrink-0 group-hover:text-electric transition-colors" />
                              <span className="text-[0.8125rem] text-ink/80 group-hover:text-ink font-medium leading-snug">
                                {it.label}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* INDUSTRIES */}
              {openMenu === "industries" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-slate-light pb-2.5 mb-3 border-b border-ink/[0.08]">
                      Sectors we specialise in
                    </p>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-px">
                      {industryLinks.map((it) => (
                        <li key={it.href}>
                          <a
                            href={it.href}
                            className="group flex items-center justify-between py-2.5 border-b border-ink/[0.05] hover:border-ink/20 transition-colors"
                          >
                            <span className="text-[0.8125rem] text-ink/80 group-hover:text-ink font-medium">
                              {it.label}
                            </span>
                            <ChevronRight size={13} className="text-slate-light opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-4">
                    <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-slate-light pb-2.5 mb-3 border-b border-ink/[0.08]">
                      Service areas
                    </p>
                    <ul className="grid grid-cols-2 gap-x-5 gap-y-px">
                      {locationLinks.map((it) => (
                        <li key={it.href}>
                          <a href={it.href} className="block py-2 text-[0.8125rem] text-ink/70 hover:text-electric transition-colors">
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* COMPANY */}
              {openMenu === "company" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-slate-light pb-2.5 mb-3 border-b border-ink/[0.08]">
                      Company
                    </p>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-px">
                      {companyLinks.map((it) => (
                        <li key={it.href}>
                          <a
                            href={it.href}
                            className="group block py-2.5 border-b border-ink/[0.05] hover:border-ink/20 transition-colors"
                          >
                            <span className="block text-[0.8125rem] font-semibold text-ink/85 group-hover:text-ink">
                              {it.label}
                            </span>
                            <span className="block text-[0.6875rem] text-slate mt-0.5">{it.desc}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-4">
                    <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-slate-light pb-2.5 mb-3 border-b border-ink/[0.08]">
                      Legal & governance
                    </p>
                    <ul className="space-y-px">
                      {legalLinks.map((it) => (
                        <li key={it.href}>
                          <a href={it.href} className="block py-2 text-[0.8125rem] text-ink/70 hover:text-electric transition-colors">
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-ink/[0.08]">
                      <p className="text-[0.6875rem] text-slate leading-relaxed">
                        Sanctify — Advertising &amp; Marketing Agency<br />
                        Head office: Zuarinagar, Goa<br />
                        Contact points: Varanasi · Italy
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Panel footer */}
              <div className="mt-7 pt-4 border-t border-ink/[0.08] flex items-center justify-between gap-6">
                <p className="text-[0.6875rem] text-slate">
                  Operating in Goa since 2012 · 200+ projects delivered · Rated 4.8/5 from 128 reviews
                </p>
                <a href="/contact/" className="text-[0.6875rem] font-semibold text-electric inline-flex items-center gap-1">
                  Request a free audit <ChevronRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE DRAWER ---------- */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[62px] bottom-0 bg-paper overflow-y-auto transition-all duration-250 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-5 py-5 pb-28">
          <a href="/" onClick={() => setMobileOpen(false)} className="block py-3 text-ink font-semibold text-[0.9375rem] border-b border-ink/[0.07]">
            Home
          </a>

          {([
            { key: "services" as const, label: "Services" },
            { key: "industries" as const, label: "Industries" },
            { key: "company" as const, label: "Company" },
          ]).map(({ key, label }) => (
            <div key={key}>
              <button
                onClick={() => setMobilePanel((v) => (v === key ? null : key))}
                className="w-full flex items-center justify-between py-3 text-ink font-semibold text-[0.9375rem] border-b border-ink/[0.07]"
                aria-expanded={mobilePanel === key}
              >
                {label}
                <ChevronDown size={15} className={`transition-transform text-slate ${mobilePanel === key ? "rotate-180" : ""}`} />
              </button>

              {mobilePanel === key && (
                <div className="py-3.5 space-y-4">
                  {key === "services" && serviceColumns.map((col) => (
                    <div key={col.label}>
                      <p className="text-[0.5625rem] font-bold tracking-[0.14em] uppercase text-slate-light mb-1.5">{col.label}</p>
                      <ul>
                        {col.items.map((it) => (
                          <li key={it.href}>
                            <a href={it.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-2 text-[0.8125rem] text-ink/80">
                              <it.icon size={14} className="text-slate-light shrink-0" />
                              {it.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {key === "industries" && (
                    <>
                      <div>
                        <p className="text-[0.5625rem] font-bold tracking-[0.14em] uppercase text-slate-light mb-1.5">Sectors</p>
                        <ul>
                          {industryLinks.map((it) => (
                            <li key={it.href}>
                              <a href={it.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[0.8125rem] text-ink/80">{it.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[0.5625rem] font-bold tracking-[0.14em] uppercase text-slate-light mb-1.5">Service areas</p>
                        <div className="grid grid-cols-2">
                          {locationLinks.map((it) => (
                            <a key={it.href} href={it.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[0.8125rem] text-ink/70">{it.label}</a>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {key === "company" && (
                    <>
                      <ul>
                        {companyLinks.map((it) => (
                          <li key={it.href}>
                            <a href={it.href} onClick={() => setMobileOpen(false)} className="block py-2">
                              <span className="block text-[0.8125rem] font-medium text-ink/85">{it.label}</span>
                              <span className="block text-[0.6875rem] text-slate">{it.desc}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <p className="text-[0.5625rem] font-bold tracking-[0.14em] uppercase text-slate-light mb-1.5">Legal</p>
                        <ul>
                          {legalLinks.map((it) => (
                            <li key={it.href}>
                              <a href={it.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[0.8125rem] text-ink/70">{it.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <a href="/pricing/" onClick={() => setMobileOpen(false)} className="block py-3 text-ink font-semibold text-[0.9375rem] border-b border-ink/[0.07]">Pricing</a>
          <a href="/blog/" onClick={() => setMobileOpen(false)} className="block py-3 text-ink font-semibold text-[0.9375rem] border-b border-ink/[0.07]">Insights</a>
          <a href="/contact/" onClick={() => setMobileOpen(false)} className="block py-3 text-ink font-semibold text-[0.9375rem] border-b border-ink/[0.07]">Contact</a>

          <a
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex items-center justify-center bg-ink text-white py-3.5 rounded-[6px] font-semibold text-[0.8125rem]"
          >
            Request an audit
          </a>

          <div className="mt-5 pt-4 border-t border-ink/[0.07] space-y-2">
            <a href="tel:+919923352923" className="flex items-center gap-2 text-[0.8125rem] text-ink font-medium">
              <Phone size={13} className="text-slate-light" /> +91 99233 52923
            </a>
            <a href="mailto:help@sanctify.in" className="flex items-center gap-2 text-[0.8125rem] text-slate">
              <Mail size={13} className="text-slate-light" /> help@sanctify.in
            </a>
            <p className="flex items-start gap-2 text-[0.75rem] text-slate pt-1">
              <MapPin size={13} className="text-slate-light shrink-0 mt-0.5" />
              #176/1-A, MES College Road, Zuarinagar, Vasco-da-Gama, Goa 403726
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
