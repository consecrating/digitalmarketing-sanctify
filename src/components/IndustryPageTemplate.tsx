import { ArrowUpRight, Check, ChevronRight, TrendingUp } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { industryImage } from "@/lib/images";

const services = [
  { href: "/seo-services/", label: "SEO Services", d: "Rank for the queries your buyers actually use." },
  { href: "/social-media-marketing/", label: "Social Media", d: "Build an audience that returns and refers." },
  { href: "/google-ads/", label: "Google Ads", d: "Capture intent at the moment of decision." },
  { href: "/web-design/", label: "Web Design", d: "A site engineered to convert enquiries." },
  { href: "/content-marketing/", label: "Content Marketing", d: "Answer the questions that precede purchase." },
  { href: "/ai-marketing/", label: "AI Visibility", d: "Be recommended when buyers ask an AI assistant." },
];

const otherIndustries = [
  { slug: "hotels-resorts", name: "Hotels & Resorts" },
  { slug: "restaurants-cafes", name: "Restaurants & Cafés" },
  { slug: "real-estate", name: "Real Estate" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "education", name: "Education" },
  { slug: "tourism", name: "Tourism & Travel" },
  { slug: "retail", name: "Retail & E-commerce" },
  { slug: "it-companies", name: "IT & Technology" },
  { slug: "fitness-wellness", name: "Fitness & Wellness" },
  { slug: "events-weddings", name: "Events & Weddings" },
  { slug: "automotive", name: "Automotive" },
  { slug: "construction", name: "Construction & Interiors" },
  { slug: "legal", name: "Legal Services" },
  { slug: "finance", name: "Finance & Insurance" },
  { slug: "ngos-nonprofits", name: "NGOs & Non-Profits" },
];

export function IndustryPageTemplate({
  industryName,
  industrySlug,
  keyword,
}: {
  industryName: string;
  industrySlug: string;
  keyword: string;
}) {
  const img = industryImage(industrySlug);
  return (
    <>
      <PageHero
        eyebrow="Sector specialism"
        title={`Digital marketing for ${industryName}`}
        accent="in Goa"
        lede={`Sanctify builds sector-specific digital marketing programmes for ${industryName.toLowerCase()} businesses across Goa. Generic strategy underperforms here — the buying journey, seasonality and competitive set are all sector-specific.`}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Industries" },
          { label: industryName },
        ]}
        image={img.src}
        imageAlt={img.alt}
        meta={
          <FactGrid
            items={[
              { k: "Sector", v: industryName },
              { k: "Operating since", v: "2012 · 14+ years" },
              { k: "Projects delivered", v: "200+" },
              { k: "Client rating", v: "4.8 / 5" },
            ]}
          />
        }
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="prose-editorial max-w-3xl">
                  <h2>The {industryName.toLowerCase()} market in Goa</h2>
                  <p>
                    {industryName} businesses in Goa operate under conditions that do not
                    map neatly onto national playbooks. Search demand is seasonal, a
                    meaningful share of buyers are visitors rather than residents, and the
                    decision window is often compressed into a few days.
                  </p>
                  <p>
                    Sanctify approaches <strong>{keyword}</strong> by first establishing how
                    your particular buyers search, what they compare, and where they drop
                    out — then building the channel mix around that evidence rather than
                    around channel fashion.
                  </p>

                  <h2>Where {industryName.toLowerCase()} campaigns usually leak</h2>
                  <ul>
                    <li><strong>Unclaimed local presence</strong> — incomplete Google Business Profile, inconsistent business details across directories, thin review volume.</li>
                    <li><strong>Seasonal mistiming</strong> — budget spent evenly across the year instead of front-loading ahead of demand.</li>
                    <li><strong>Weak enquiry paths</strong> — traffic arrives but the site gives no obvious next action.</li>
                    <li><strong>No AI visibility</strong> — buyers increasingly ask AI assistants for recommendations, and most {industryName.toLowerCase()} businesses here are absent from those answers.</li>
                    <li><strong>Vanity reporting</strong> — impressions and followers reported instead of enquiries and revenue.</li>
                  </ul>

                  <h2>How the engagement runs</h2>
                  <p>
                    Every {industryName.toLowerCase()} engagement opens with a documented
                    audit and a 90-day roadmap. Execution is handled in-house across
                    strategy, content, creative and technical build. You receive dashboard
                    access plus a monthly review that reports against commercial outcomes,
                    not activity volume.
                  </p>
                </div>
              </Reveal>

              {/* Services for this sector */}
              <Reveal>
                <h2 className="type-heading text-ink mt-14 mb-6">
                  Services we deploy for {industryName.toLowerCase()}
                </h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <Reveal key={s.href} delay={i * 60}>
                    <a href={s.href} className="group h-full block bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-ink text-base">{s.label}</h3>
                        <ArrowUpRight size={16} className="text-slate-light shrink-0 group-hover:text-electric transition-colors" />
                      </div>
                      <p className="mt-2 text-slate text-sm leading-relaxed">{s.d}</p>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Outcomes */}
              <Reveal>
                <h2 className="type-heading text-ink mt-14 mb-6">What we report against</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Qualified enquiries and their source",
                    "Local map-pack position for priority queries",
                    "Cost per enquiry across paid channels",
                    "Share of AI answers mentioning your brand",
                  ].map((m, i) => (
                    <div key={m} className="flex items-start gap-3 bg-sand rounded-xl p-5">
                      <span className="w-7 h-7 rounded-lg bg-ink text-acid grid place-items-center shrink-0">
                        <TrendingUp size={14} />
                      </span>
                      <p className="text-ink/80 text-sm leading-relaxed font-medium">{m}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Other sectors */}
              <Reveal>
                <div className="mt-14 pt-8 border-t border-ink/[0.09]">
                  <p className="type-eyebrow text-slate-light mb-4">Other sectors we serve</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-px">
                    {otherIndustries
                      .filter((o) => o.slug !== industrySlug)
                      .map((o) => (
                        <a
                          key={o.slug}
                          href={`/digital-marketing-for-${o.slug}/`}
                          className="group flex items-center justify-between py-2.5 border-b border-ink/[0.06] hover:border-ink/25 transition-colors"
                        >
                          <span className="text-[0.8125rem] text-ink/75 group-hover:text-ink">{o.name}</span>
                          <ChevronRight size={13} className="text-slate-light group-hover:text-electric transition-colors" />
                        </a>
                      ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="bg-ink rounded-2xl p-6 grain relative overflow-hidden">
                  <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />
                  <div className="relative z-10">
                    <p className="type-eyebrow text-acid">Sector audit</p>
                    <p className="mt-2 font-bold text-white text-base leading-snug">
                      Free {industryName.toLowerCase()} visibility check
                    </p>
                    <p className="mt-2 text-white/55 text-sm leading-relaxed">
                      We benchmark you against the {industryName.toLowerCase()} businesses
                      currently winning search in your area.
                    </p>
                    <a href="/contact/" className="mt-4 inline-flex items-center gap-2 bg-acid text-ink px-5 py-3 rounded-[6px] font-bold text-sm hover:bg-white transition-colors">
                      Request audit <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                <div className="bg-sand rounded-2xl p-6">
                  <p className="type-eyebrow text-slate-light mb-3">Included as standard</p>
                  <ul className="space-y-2.5">
                    {["Documented audit", "90-day roadmap", "Named account manager", "Monthly review", "No lock-in contract"].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.8125rem] text-ink/80">
                        <Check size={14} className="text-electric shrink-0 mt-0.5" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
