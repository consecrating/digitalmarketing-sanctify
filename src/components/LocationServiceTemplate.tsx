import { ArrowUpRight, MapPin, Check, ChevronRight } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

const siblingServices = [
  { href: "/seo-services/", label: "SEO Services" },
  { href: "/social-media-marketing/", label: "Social Media Marketing" },
  { href: "/web-design/", label: "Web Design" },
  { href: "/google-ads/", label: "Google Ads & PPC" },
  { href: "/content-marketing/", label: "Content Marketing" },
  { href: "/ai-marketing/", label: "AI Marketing" },
  { href: "/email-marketing/", label: "Email Marketing" },
];

const otherLocations = [
  { slug: "panaji", name: "Panaji" }, { slug: "margao", name: "Margao" },
  { slug: "mapusa", name: "Mapusa" }, { slug: "vasco", name: "Vasco da Gama" },
  { slug: "calangute", name: "Calangute" }, { slug: "porvorim", name: "Porvorim" },
  { slug: "ponda", name: "Ponda" }, { slug: "candolim", name: "Candolim" },
  { slug: "anjuna", name: "Anjuna" }, { slug: "old-goa", name: "Old Goa" },
];

export function LocationServiceTemplate({
  serviceName,
  serviceSlug,
  locationName,
  locationSlug,
  area,
  keyword,
}: {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  locationSlug: string;
  area: string;
  keyword: string;
}) {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${locationName}, Goa`,
    serviceType: serviceName,
    provider: {
      "@type": "ProfessionalService",
      name: "Sanctify — Digital Marketing Agency",
      url: "https://www.digitalmarketing.sanctify.in",
      telephone: "+919923352923",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#176/1-A, MES College Road, Bharat Nagar Colony",
        addressLocality: "Zuarinagar, Vasco-da-Gama",
        addressRegion: "Goa",
        postalCode: "403726",
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "City", name: locationName, containedInPlace: { "@type": "State", name: "Goa" } },
    description: `${serviceName} for businesses in ${locationName}, ${area}, Goa. Delivered by Sanctify — operating in Goa since 2012.`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <PageHero
        eyebrow={`${area} · Local service`}
        title={`${serviceName} in`}
        accent={`${locationName}, Goa`}
        lede={`Sanctify delivers ${serviceName.toLowerCase()} for businesses based in ${locationName} and the surrounding ${area} area. Operating from our Zuarinagar office since 2012, with 200+ projects delivered across the state.`}
        crumbs={[
          { href: "/", label: "Home" },
          { href: `/${serviceSlug}/`, label: serviceName },
          { label: locationName },
        ]}
        meta={
          <FactGrid
            items={[
              { k: "Locality", v: locationName },
              { k: "Region", v: area },
              { k: "Operating since", v: "2012 · 14+ years" },
              { k: "Retainers from", v: "₹15,000/mo" },
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
                  <h2>{serviceName} for {locationName} businesses</h2>
                  <p>
                    {locationName} sits within {area}, and the commercial mix here shapes
                    what works. Sanctify approaches <strong>{keyword}</strong> by starting
                    with the specific competitive set you actually face in {locationName} —
                    not a generic state-wide template.
                  </p>
                  <p>
                    Whether you operate a hospitality property, a professional practice, a
                    retail outlet or a service business in {locationName}, the engagement
                    begins with a documented audit of your current visibility and a
                    prioritised plan built around it.
                  </p>

                  <h2>What we cover</h2>
                  <ul>
                    <li><strong>Local search visibility</strong> — Google Business Profile, map pack positioning and locality-intent queries for {locationName}.</li>
                    <li><strong>Competitor benchmarking</strong> — who currently ranks in {locationName} and {area}, and what they are doing that you are not.</li>
                    <li><strong>Channel execution</strong> — {serviceName.toLowerCase()} delivered by the in-house team, with named monthly deliverables.</li>
                    <li><strong>Reporting</strong> — live dashboard plus a monthly review in plain language, tied to enquiries and revenue.</li>
                  </ul>

                  <h2>Why local context matters</h2>
                  <p>
                    Goa&apos;s demand curve is unusual. Tourist-facing businesses in {locationName}
                    see sharp seasonal swings, while resident-facing businesses follow a
                    steadier pattern. Campaign pacing, budget allocation and content timing
                    all shift depending on which side of that split you sit on — and getting
                    it wrong is the most common reason local campaigns underperform.
                  </p>
                </div>
              </Reveal>

              {/* Local deliverables */}
              <Reveal>
                <h2 className="type-heading text-ink mt-14 mb-6">Included in every engagement</h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Documented audit", d: `Baseline of your current visibility in ${locationName}, with competitor comparison.` },
                  { t: "Prioritised roadmap", d: "90-day plan sequenced by expected commercial impact." },
                  { t: "Named account manager", d: "One point of contact who knows your business and market." },
                  { t: "Monthly review", d: "Progress, learnings and the next month's priorities — in plain language." },
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

              {/* Other services here */}
              <Reveal>
                <div className="mt-14 pt-8 border-t border-ink/[0.09]">
                  <p className="type-eyebrow text-slate-light mb-4">
                    Other services available in {locationName}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-px">
                    {siblingServices
                      .filter((s) => s.href !== `/${serviceSlug}/`)
                      .map((s) => {
                        const sSlug = s.href.replace(/\//g, "");
                        return (
                          <a
                            key={s.href}
                            href={`/${sSlug}-in-${locationSlug}/`}
                            className="group flex items-center justify-between py-3 border-b border-ink/[0.07] hover:border-ink/25 transition-colors"
                          >
                            <span className="text-[0.875rem] text-ink/80 group-hover:text-ink font-medium">
                              {s.label} in {locationName}
                            </span>
                            <ChevronRight size={15} className="text-slate-light group-hover:text-electric transition-colors" />
                          </a>
                        );
                      })}
                  </div>
                </div>
              </Reveal>

              {/* Other locations */}
              <Reveal>
                <div className="mt-12">
                  <p className="type-eyebrow text-slate-light mb-4">
                    {serviceName} in other Goa localities
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {otherLocations
                      .filter((l) => l.slug !== locationSlug)
                      .map((l) => (
                        <li key={l.slug}>
                          <a
                            href={`/${serviceSlug}-in-${l.slug}/`}
                            className="inline-block text-[0.8125rem] font-medium text-ink/75 bg-sand px-3.5 py-2 rounded-full hover:bg-ink hover:text-white transition-colors"
                          >
                            {l.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="bg-ink rounded-2xl p-6 grain relative overflow-hidden">
                  <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />
                  <div className="relative z-10">
                    <p className="type-eyebrow text-acid">Free of charge</p>
                    <p className="mt-2 font-bold text-white text-base leading-snug">
                      {locationName} visibility audit
                    </p>
                    <p className="mt-2 text-white/55 text-sm leading-relaxed">
                      See where you rank in {locationName} against your direct competitors —
                      on Google and in AI answers.
                    </p>
                    <a
                      href="/contact/"
                      className="mt-4 inline-flex items-center gap-2 bg-acid text-ink px-5 py-3 rounded-[6px] font-bold text-sm hover:bg-white transition-colors"
                    >
                      Request audit <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                <div className="bg-sand rounded-2xl p-6">
                  <p className="type-eyebrow text-slate-light">Head office</p>
                  <address className="mt-2.5 not-italic text-slate text-[0.8125rem] leading-relaxed">
                    #176/1-A, MES College Road,<br />
                    Bharat Nagar Colony, Zuarinagar,<br />
                    Vasco-da-Gama, Goa 403726
                  </address>
                  <a href="tel:+919923352923" className="mt-3 inline-flex items-center gap-1.5 text-ink font-semibold text-[0.8125rem] sweep">
                    +91 99233 52923
                  </a>
                  <p className="mt-3 pt-3 border-t border-ink/[0.09] text-slate text-xs inline-flex items-center gap-1.5">
                    <MapPin size={12} /> Serving all of {area}
                  </p>
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
