import {
  Phone, Mail, MapPin, ArrowUpRight,
  Clock, ShieldCheck, Star,
} from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";

/* Brand marks as inline SVG — lucide no longer ships brand icons */
function LinkedInMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function FacebookMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.5c-1.48 0-1.95.92-1.95 1.87v2.27h3.32l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function InstagramMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38a5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

const serviceCols = [
  {
    label: "Search & Content",
    items: [
      { href: "/seo-services/", label: "SEO Services" },
      { href: "/content-marketing/", label: "Content Marketing" },
      { href: "/ai-seo/", label: "AI SEO" },
      { href: "/reputation-management/", label: "Reputation Management" },
    ],
  },
  {
    label: "Paid & Social",
    items: [
      { href: "/google-ads/", label: "Google Ads & PPC" },
      { href: "/social-media-marketing/", label: "Social Media Marketing" },
      { href: "/email-marketing/", label: "Email Marketing" },
      { href: "/video-marketing/", label: "Video Marketing" },
    ],
  },
  {
    label: "AI Visibility",
    items: [
      { href: "/ai-marketing/", label: "AI Marketing" },
      { href: "/geo-optimization/", label: "GEO Optimisation" },
      { href: "/aeo-services/", label: "AEO Services" },
      { href: "/llmo-services/", label: "LLMO Services" },
      { href: "/chatgpt-visibility/", label: "ChatGPT Visibility" },
    ],
  },
  {
    label: "Design & Build",
    items: [
      { href: "/web-design/", label: "Web Design & Development" },
      { href: "/graphic-design/", label: "Graphic Design & Branding" },
    ],
  },
];

const industries = [
  { href: "/digital-marketing-for-hotels-resorts/", label: "Hotels & Resorts" },
  { href: "/digital-marketing-for-restaurants-cafes/", label: "Restaurants & Cafés" },
  { href: "/digital-marketing-for-real-estate/", label: "Real Estate" },
  { href: "/digital-marketing-for-healthcare/", label: "Healthcare" },
  { href: "/digital-marketing-for-tourism/", label: "Tourism & Travel" },
  { href: "/digital-marketing-for-retail/", label: "Retail & E-commerce" },
  { href: "/digital-marketing-for-education/", label: "Education" },
  { href: "/digital-marketing-for-it-companies/", label: "IT & Technology" },
];

const locations = [
  { href: "/seo-services-in-panaji/", label: "Panaji" },
  { href: "/seo-services-in-margao/", label: "Margao" },
  { href: "/seo-services-in-mapusa/", label: "Mapusa" },
  { href: "/seo-services-in-vasco/", label: "Vasco da Gama" },
  { href: "/seo-services-in-calangute/", label: "Calangute" },
  { href: "/seo-services-in-porvorim/", label: "Porvorim" },
  { href: "/seo-services-in-ponda/", label: "Ponda" },
  { href: "/seo-services-in-candolim/", label: "Candolim" },
  { href: "/seo-services-in-anjuna/", label: "Anjuna" },
  { href: "/seo-services-in-old-goa/", label: "Old Goa" },
];

const company = [
  { href: "/about/", label: "About Sanctify" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/blog/", label: "Insights" },
  { href: "/careers/", label: "Careers" },
  { href: "/contact/", label: "Contact" },
];

const offices = [
  {
    tag: "Head Office",
    city: "Goa, India",
    lines: ["#176/1-A, MES College Road,", "Bharat Nagar Colony, Zuarinagar,", "Vasco-da-Gama, Goa 403726"],
    phone: "+91 99233 52923",
    tel: "+919923352923",
  },
  {
    tag: "Contact Point",
    city: "Varanasi, India",
    lines: ["D-50/35 BN, Dalmandi Road,", "Kazipura Kalan, Purani Adaalat,", "Varanasi, UP 221001"],
    phone: "+91 99233 52923",
    tel: "+919923352923",
  },
  {
    tag: "Contact Point",
    city: "Fontanella, Italy",
    lines: ["Pran's Food snc,", "Via Circonvallazione 868,", "24056 Fontanella, Italy"],
    phone: "+39 320 805 8390",
    tel: "+393208058390",
  },
];

const socials = [
  { href: "https://www.linkedin.com/company/sanctify", label: "LinkedIn", Mark: LinkedInMark },
  { href: "https://www.facebook.com/sanctify.in", label: "Facebook", Mark: FacebookMark },
  { href: "https://www.instagram.com/sanctify.in", label: "Instagram", Mark: InstagramMark },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white grain relative overflow-hidden">
      <div className="absolute inset-0 field-grid-light opacity-60" aria-hidden="true" />

      {/* ---------- CTA band ---------- */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-14">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="type-heading text-white">
                Ready to see where you actually rank?
              </h2>
              <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
                We&apos;ll audit your visibility across Google and AI search engines,
                benchmark you against local competitors, and show you the gap — at
                no cost and with no obligation.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-acid text-ink px-6 py-3.5 rounded-[6px] font-bold text-sm hover:bg-white transition-colors"
                >
                  Request free audit <ArrowUpRight size={16} />
                </a>
                <a
                  href="tel:+919923352923"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/[0.05] text-white px-6 py-3.5 rounded-[6px] font-semibold text-sm transition-colors"
                >
                  <Phone size={15} /> +91 99233 52923
                </a>
              </div>
              <div className="mt-4 flex items-center gap-5 text-white/35 text-[0.6875rem]">
                <span className="inline-flex items-center gap-1.5"><Clock size={11} /> Reply within 24h</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck size={11} /> No lock-in contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Link matrix ---------- */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10">
            {serviceCols.map((col) => (
              <nav key={col.label} aria-label={col.label}>
                <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-acid/80 pb-2.5 mb-3 border-b border-white/[0.09]">
                  {col.label}
                </p>
                <ul className="space-y-2">
                  {col.items.map((it) => (
                    <li key={it.href}>
                      <a href={it.href} className="text-[0.8125rem] text-white/50 hover:text-white transition-colors">
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Industries">
              <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-acid/80 pb-2.5 mb-3 border-b border-white/[0.09]">
                Industries
              </p>
              <ul className="space-y-2">
                {industries.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} className="text-[0.8125rem] text-white/50 hover:text-white transition-colors">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-acid/80 pb-2.5 mb-3 border-b border-white/[0.09]">
                Company
              </p>
              <ul className="space-y-2">
                {company.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} className="text-[0.8125rem] text-white/50 hover:text-white transition-colors">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Service areas — inline row */}
          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-white/35 mb-3.5 inline-flex items-center gap-1.5">
              <MapPin size={11} /> Service areas across Goa
            </p>
            <ul className="flex flex-wrap gap-x-1.5 gap-y-2">
              {locations.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    className="inline-block text-[0.75rem] text-white/45 hover:text-ink hover:bg-acid border border-white/[0.10] hover:border-acid px-3 py-1.5 rounded-full transition-colors"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Offices ---------- */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-12">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {offices.map((o) => (
              <address key={o.city} className="not-italic">
                <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-white/30">{o.tag}</p>
                <p className="mt-1.5 font-bold text-white text-sm">{o.city}</p>
                <p className="mt-2.5 text-white/45 text-[0.8125rem] leading-relaxed">
                  {o.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </p>
                <a href={`tel:${o.tel}`} className="mt-2.5 inline-flex items-center gap-1.5 text-white/60 hover:text-acid text-[0.8125rem] transition-colors">
                  <Phone size={12} /> {o.phone}
                </a>
              </address>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Identity + trust row ---------- */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <a href="/" className="inline-flex items-center gap-2.5 group" aria-label="Sanctify — home">
                <span className="w-9 h-9 rounded-[5px] bg-white text-ink grid place-items-center font-bold text-sm shrink-0 transition-colors group-hover:bg-acid">
                  S
                </span>
                <span className="leading-none">
                  <span className="block font-bold text-[0.9375rem] tracking-tight text-white">Sanctify</span>
                  <span className="block text-[0.5625rem] tracking-[0.16em] uppercase text-white/35 mt-[3px]">
                    Advertising &amp; Marketing Agency
                  </span>
                </span>
              </a>
              <p className="mt-4 text-white/40 text-[0.8125rem] leading-relaxed max-w-sm">
                An independent digital marketing agency operating from South Goa
                since 2012. Search, social, paid media and AI visibility under
                one accountable team.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="inline-flex items-center gap-2 text-[0.8125rem]">
                  <span className="flex gap-0.5" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={12} className="fill-acid text-acid" />
                    ))}
                  </span>
                  <span className="text-white/70"><strong className="text-white font-bold">4.8</strong> / 128 reviews</span>
                </span>
                <span className="text-white/40 text-[0.8125rem]">200+ projects</span>
                <span className="text-white/40 text-[0.8125rem]">Est. 2012</span>
              </div>

              <div className="mt-5 flex items-center gap-2">
                {socials.map(({ label, href, Mark }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sanctify on ${label}`}
                    className="w-9 h-9 grid place-items-center rounded-[6px] border border-white/[0.12] text-white/50 hover:text-ink hover:bg-acid hover:border-acid transition-colors"
                  >
                    <Mark size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-2.5">
                Monthly insights
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Legal bar ---------- */}
      <div className="relative z-10">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[0.75rem] text-center md:text-left">
            © {year} Sanctify — Advertising &amp; Marketing Agency, Goa. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="/privacy-policy/" className="text-white/40 hover:text-white text-[0.75rem] transition-colors">Privacy Policy</a>
            <a href="/terms/" className="text-white/40 hover:text-white text-[0.75rem] transition-colors">Terms &amp; Conditions</a>
            <a href="/contact/" className="text-white/40 hover:text-white text-[0.75rem] transition-colors">Contact</a>
            <a href="/careers/" className="text-white/40 hover:text-white text-[0.75rem] transition-colors">Careers</a>
            <a href="mailto:help@sanctify.in" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-[0.75rem] transition-colors">
              <Mail size={11} /> help@sanctify.in
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
