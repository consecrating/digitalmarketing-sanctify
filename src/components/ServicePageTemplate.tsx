import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

const locations = [
  { slug: "panaji", name: "Panaji" }, { slug: "margao", name: "Margao" },
  { slug: "mapusa", name: "Mapusa" }, { slug: "vasco", name: "Vasco da Gama" },
  { slug: "calangute", name: "Calangute" }, { slug: "porvorim", name: "Porvorim" },
  { slug: "ponda", name: "Ponda" }, { slug: "candolim", name: "Candolim" },
  { slug: "anjuna", name: "Anjuna" }, { slug: "old-goa", name: "Old Goa" },
];

const industries = [
  { slug: "hotels-resorts", name: "Hotels & Resorts" },
  { slug: "restaurants-cafes", name: "Restaurants & Cafés" },
  { slug: "real-estate", name: "Real Estate" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "tourism", name: "Tourism & Travel" },
  { slug: "retail", name: "Retail & E-commerce" },
  { slug: "education", name: "Education" },
  { slug: "it-companies", name: "IT & Technology" },
];

const siblings = [
  { href: "/seo-services/", label: "SEO Services" },
  { href: "/social-media-marketing/", label: "Social Media Marketing" },
  { href: "/web-design/", label: "Web Design" },
  { href: "/google-ads/", label: "Google Ads & PPC" },
  { href: "/content-marketing/", label: "Content Marketing" },
  { href: "/ai-marketing/", label: "AI Marketing" },
  { href: "/email-marketing/", label: "Email Marketing" },
  { href: "/graphic-design/", label: "Graphic Design" },
  { href: "/video-marketing/", label: "Video Marketing" },
  { href: "/reputation-management/", label: "Reputation Management" },
];

const phases = [
  { n: "01", t: "Audit", d: "Baseline your current position, technical health and competitor set before anything is committed." },
  { n: "02", t: "Roadmap", d: "A prioritised 90-day plan with named deliverables and the return each is expected to produce." },
  { n: "03", t: "Execution", d: "In-house delivery across strategy, creative and technical build. No outsourcing." },
  { n: "04", t: "Compounding", d: "Weekly optimisation, monthly review, quarterly reset — so gains stack rather than reset." },
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "included", label: "What's included" },
  { id: "approach", label: "Our approach" },
  { id: "sectors", label: "Sectors served" },
  { id: "areas", label: "Service areas" },
  { id: "next", label: "Next steps" },
];

export function ServicePageTemplate({
  title,
  keyword,
  description,
  slug,
}: {
  title: string;
  keyword: string;
  description: string;
  slug: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title={title}
        accent="in Goa"
        lede={description}
        crumbs={[{ href: "/", label: "Home" }, { label: title }]}
        meta={
          <FactGrid
            items={[
              { k: "Operating since", v: "2012 · 14+ years" },
              { k: "Projects delivered", v: "200+" },
              { k: "Client rating", v: "4.8 / 5" },
              { k: "Retainers from", v: "₹15,000/mo" },
            ]}
          />
        }
      />

      {/* Body */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* TOC rail */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="type-eyebrow text-slate-light pb-2.5 mb-3 border-b border-ink/[0.09]">
                  On this page
                </p>
                <nav aria-label="On this page">
                  <ul className="space-y-1">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="group flex items-center gap-2 py-1.5 text-[0.8125rem] text-slate hover:text-ink transition-colors">
                          <span className="w-1 h-1 rounded-full bg-slate-light group-hover:bg-electric transition-colors" />
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-7 bg-sand rounded-xl p-5">
                  <p className="font-bold text-ink text-sm">Free visibility audit</p>
                  <p className="mt-1.5 text-slate text-xs leading-relaxed">
                    We benchmark you against local competitors on Google and in AI answers.
                  </p>
                  <a href="/contact/" className="mt-3 inline-flex items-center gap-1.5 text-electric font-bold text-xs">
                    Request it <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <Reveal>
                <div className="prose-editorial max-w-3xl">
                  <h2 id="overview">Why {title.toLowerCase()} matters for businesses in Goa</h2>
                  <p>
                    Goa is a compact but unusually competitive market. Demand swings with
                    the tourist calendar, buyers research on mobile, and a handful of
                    well-optimised competitors capture a disproportionate share of
                    attention. Businesses that treat <strong>{keyword}</strong> as an
                    ongoing discipline rather than a one-off project are the ones that
                    hold position through both peak and off-season.
                  </p>
                  <p>
                    Sanctify has worked in this market since 2012 — more than fourteen
                    years — across 200+ projects spanning hospitality, real estate,
                    healthcare, education and retail. {description}
                  </p>
                </div>
              </Reveal>

              {/* What's included */}
              <Reveal>
                <h2 id="included" className="type-heading text-ink mt-14 mb-6">
                  What&apos;s included
                </h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Discovery & benchmarking", d: "Current-state analysis, competitor mapping, and a documented baseline you can measure against." },
                  { t: "Strategy & prioritisation", d: "A written plan sequenced by expected impact, not by what is easiest to deliver." },
                  { t: "Hands-on execution", d: "Delivered by the in-house specialists who built the plan — not passed to a third party." },
                  { t: "Measurement & reporting", d: "Live dashboard access plus a monthly review in plain language, tied to commercial outcomes." },
                ].map((b, i) => (
                  <Reveal key={b.t} delay={i * 70}>
                    <div className="h-full bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                      <span className="w-9 h-9 rounded-lg bg-electric-50 text-electric grid place-items-center mb-4">
                        <Check size={16} strokeWidth={2.5} />
                      </span>
                      <h3 className="font-bold text-ink text-base">{b.t}</h3>
                      <p className="mt-2 text-slate text-sm leading-relaxed">{b.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Approach */}
              <Reveal>
                <h2 id="approach" className="type-heading text-ink mt-14 mb-6">
                  How we run the engagement
                </h2>
              </Reveal>

              <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 list-none p-0">
                {phases.map((p, i) => (
                  <Reveal key={p.n} delay={i * 70}>
                    <li className="h-full bg-sand rounded-2xl p-5">
                      <span className="font-black text-2xl text-electric/25 leading-none">{p.n}</span>
                      <h3 className="mt-3 font-bold text-ink text-sm">{p.t}</h3>
                      <p className="mt-1.5 text-slate text-xs leading-relaxed">{p.d}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>

              {/* Sectors */}
              <Reveal>
                <h2 id="sectors" className="type-heading text-ink mt-14 mb-6">
                  Sectors we deliver this for
                </h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-px">
                {industries.map((ind, i) => (
                  <Reveal key={ind.slug} delay={i * 40}>
                    <a
                      href={`/digital-marketing-for-${ind.slug}/`}
                      className="group flex items-center justify-between py-3 border-b border-ink/[0.07] hover:border-ink/25 transition-colors"
                    >
                      <span className="text-[0.9375rem] text-ink/80 group-hover:text-ink font-medium">{ind.name}</span>
                      <ChevronRight size={15} className="text-slate-light group-hover:text-electric transition-colors" />
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Areas */}
              <Reveal>
                <h2 id="areas" className="type-heading text-ink mt-14 mb-5">
                  Service areas across Goa
                </h2>
                <p className="text-slate text-[0.9375rem] leading-relaxed mb-5 max-w-2xl">
                  We deliver {title.toLowerCase()} across the state. Pick your locality
                  for details specific to that market.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {locations.map((l) => (
                    <li key={l.slug}>
                      <a
                        href={`/${slug}-in-${l.slug}/`}
                        className="inline-block text-[0.8125rem] font-medium text-ink/75 bg-white edge-soft px-3.5 py-2 rounded-full hover:bg-ink hover:text-white hover:border-ink transition-colors"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Next */}
              <Reveal>
                <h2 id="next" className="type-heading text-ink mt-14 mb-5">
                  Next steps
                </h2>
                <div className="bg-ink rounded-2xl p-7 md:p-8 grain relative overflow-hidden">
                  <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />
                  <div className="relative z-10 md:flex items-center justify-between gap-8">
                    <div>
                      <p className="font-bold text-white text-lg">Start with the audit</p>
                      <p className="mt-2 text-white/55 text-sm leading-relaxed max-w-md">
                        No cost, no obligation. You receive a written summary of where
                        you stand and the three changes we would prioritise first.
                      </p>
                    </div>
                    <a
                      href="/contact/"
                      className="mt-5 md:mt-0 inline-flex items-center gap-2 bg-acid text-ink px-6 py-3.5 rounded-[6px] font-bold text-sm hover:bg-white transition-colors shrink-0"
                    >
                      Request audit <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Sibling services */}
              <Reveal>
                <div className="mt-14 pt-8 border-t border-ink/[0.09]">
                  <p className="type-eyebrow text-slate-light mb-4">Other services</p>
                  <ul className="flex flex-wrap gap-2">
                    {siblings.filter((s) => s.href !== `/${slug}/`).map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          className="inline-block text-[0.8125rem] text-slate bg-sand px-3.5 py-2 rounded-full hover:bg-electric hover:text-white transition-colors"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
