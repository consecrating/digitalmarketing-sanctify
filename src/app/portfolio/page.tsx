import type { Metadata } from "next";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal, Counter } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio — Digital Marketing Work in Goa",
  description:
    "Selected work from Sanctify — 200+ digital marketing projects delivered across hospitality, real estate, healthcare, education and retail in Goa since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/portfolio/" },
};

const sectors = [
  { name: "Hotels & Resorts", slug: "hotels-resorts", scope: "Direct-booking sites, local search, seasonal paid campaigns" },
  { name: "Restaurants & Cafés", slug: "restaurants-cafes", scope: "Map-pack visibility, review programmes, social content" },
  { name: "Real Estate", slug: "real-estate", scope: "Listing sites, locality content, enquiry funnels" },
  { name: "Healthcare", slug: "healthcare", scope: "Practice sites, appointment flows, trust and reputation" },
  { name: "Education", slug: "education", scope: "Admissions campaigns, course content, lead nurture" },
  { name: "Tourism & Travel", slug: "tourism", scope: "Itinerary content, seasonal campaigns, AI visibility" },
  { name: "Retail & E-commerce", slug: "retail", scope: "Catalogue SEO, shopping campaigns, retention email" },
  { name: "IT & Technology", slug: "it-companies", scope: "B2B content, LinkedIn programmes, demand generation" },
];

const disciplines = [
  { k: "Websites designed & built", v: "Responsive, SEO-ready, performance-tuned" },
  { k: "Search programmes", v: "Technical remediation through to authority building" },
  { k: "Paid media accounts", v: "Google Ads and Meta, managed to cost-per-enquiry" },
  { k: "Brand identities", v: "Logo systems, guidelines and campaign creative" },
  { k: "AI visibility programmes", v: "GEO, AEO and LLMO with monthly prompt testing" },
  { k: "Content programmes", v: "Editorial planning through to publication" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Fourteen years,"
        accent="200+ projects."
        lede="Sanctify has delivered work across most of Goa's major commercial sectors since 2012. Detailed case studies — including metrics and client references — are shared on request, since much of the underlying data is commercially sensitive."
        crumbs={[{ href: "/", label: "Home" }, { label: "Portfolio" }]}
        meta={
          <FactGrid
            items={[
              { k: "Projects delivered", v: "200+" },
              { k: "Sectors served", v: "15" },
              { k: "Operating since", v: "2012 · 14+ years" },
              { k: "Client rating", v: "4.8 / 5" },
            ]}
          />
        }
      />

      {/* Counters */}
      <section className="bg-acid py-14 border-b border-ink/10">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { to: 200, suffix: "+", label: "Projects delivered" },
              { to: 15, label: "Sectors served" },
              { to: 128, label: "Verified reviews" },
              { to: 14, suffix: "+", label: "Years operating" },
            ].map((s, i) => (
              <div key={s.label} className={i < 3 ? "lg:border-r lg:border-ink/15 lg:pr-6" : ""}>
                <p className="font-black text-ink text-4xl md:text-5xl lg:text-6xl leading-none tracking-tighter">
                  <Counter to={s.to} suffix={s.suffix ?? ""} />
                </p>
                <p className="mt-3 font-bold text-ink text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="type-eyebrow text-electric">Where we have delivered</p>
            <h2 className="mt-3 type-display text-ink max-w-2xl">
              Work by sector
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <a
                  href={`/digital-marketing-for-${s.slug}/`}
                  className="group h-full block bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-ink text-base leading-snug">{s.name}</h3>
                    <ArrowUpRight size={16} className="text-slate-light shrink-0 group-hover:text-electric transition-colors" />
                  </div>
                  <p className="mt-2.5 text-slate text-[0.8125rem] leading-relaxed">{s.scope}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="bg-sand py-16 md:py-20 border-y border-ink/[0.07]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="type-eyebrow text-electric">Scope of delivery</p>
                <h2 className="mt-3 type-display text-ink">
                  What the work
                  <br />
                  <span className="type-accent-italic text-slate">actually covers.</span>
                </h2>
                <p className="mt-5 text-slate text-base leading-relaxed">
                  Case studies with named clients, before-and-after metrics and reference
                  contacts are available on request. We do not publish client performance
                  data without permission.
                </p>
                <a
                  href="/contact/"
                  className="mt-7 inline-flex items-center gap-2 bg-ink hover:bg-electric text-white px-6 py-3.5 rounded-[6px] font-bold text-sm transition-colors"
                >
                  Request case studies <ArrowUpRight size={15} />
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <dl className="divide-y divide-ink/[0.09] border-y border-ink/[0.09]">
                {disciplines.map((d, i) => (
                  <Reveal key={d.k} delay={i * 50}>
                    <div className="py-4 sm:flex items-baseline gap-6">
                      <dt className="font-bold text-ink text-[0.9375rem] sm:w-2/5 shrink-0">{d.k}</dt>
                      <dd className="mt-1 sm:mt-0 text-slate text-[0.875rem] leading-relaxed">{d.v}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Services cross-link */}
      <section className="bg-paper py-16">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="type-eyebrow text-slate-light mb-4">Explore services</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-px">
              {[
                { href: "/seo-services/", label: "SEO Services" },
                { href: "/social-media-marketing/", label: "Social Media Marketing" },
                { href: "/web-design/", label: "Web Design & Development" },
                { href: "/google-ads/", label: "Google Ads & PPC" },
                { href: "/content-marketing/", label: "Content Marketing" },
                { href: "/ai-marketing/", label: "AI Search Visibility" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group flex items-center justify-between py-3 border-b border-ink/[0.07] hover:border-ink/25 transition-colors"
                >
                  <span className="text-[0.875rem] text-ink/80 group-hover:text-ink font-medium">{s.label}</span>
                  <ChevronRight size={15} className="text-slate-light group-hover:text-electric transition-colors" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
