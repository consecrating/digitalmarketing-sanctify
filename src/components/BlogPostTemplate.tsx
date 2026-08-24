import { Calendar, Clock, User, ArrowUpRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { blogImage } from "@/lib/images";

const related = [
  { slug: "why-digital-marketing-important-goa-businesses", title: "Why digital marketing matters for Goa businesses" },
  { slug: "seo-tips-small-business-goa", title: "Ten SEO priorities for small businesses in Goa" },
  { slug: "local-seo-guide-goa", title: "Local SEO: ranking in the Goa map pack" },
  { slug: "what-is-geo-optimization-guide", title: "What GEO is, and why it now matters" },
];

const toc = [
  { id: "context", label: "Context" },
  { id: "market", label: "Why it matters in Goa" },
  { id: "practice", label: "What works in practice" },
  { id: "sequence", label: "Implementation sequence" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "Getting help" },
];

export function BlogPostTemplate({
  title,
  slug,
  keyword,
}: {
  title: string;
  slug: string;
  keyword: string;
}) {
  const cover = blogImage(slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: `Analysis of ${keyword} for businesses operating in Goa, from Sanctify — a digital marketing agency operating in the state since 2012.`,
    author: {
      "@type": "Organization",
      name: "Sanctify — Digital Marketing Agency",
      url: "https://www.digitalmarketing.sanctify.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Sanctify — Digital Marketing Agency",
      logo: { "@type": "ImageObject", url: "https://www.digitalmarketing.sanctify.in/images/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.digitalmarketing.sanctify.in/blog/${slug}/`,
    },
    inLanguage: "en-IN",
    about: keyword,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Article header — lighter than a full dark band */}
      <header className="relative bg-sand border-b border-ink/[0.08] overflow-hidden">
        <div className="absolute inset-0 field-dots opacity-30" aria-hidden="true" />
        <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-12 md:pt-14 md:pb-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] text-slate">
              <li><a href="/" className="hover:text-ink transition-colors">Home</a></li>
              <li className="text-slate-light" aria-hidden="true">/</li>
              <li><a href="/blog/" className="hover:text-ink transition-colors">Insights</a></li>
              <li className="text-slate-light" aria-hidden="true">/</li>
              <li className="text-ink/70" aria-current="page">Article</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="type-eyebrow text-electric anim-rise">Insight</p>
            <h1 className="mt-3 type-display text-ink anim-rise d-1">{title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-slate text-[0.8125rem] anim-rise d-2">
              <span className="inline-flex items-center gap-1.5"><User size={13} /> Sanctify editorial team</span>
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> August 2026</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> 8 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="bg-sand">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 pb-12">
          <div className="rounded-2xl overflow-hidden edge-soft shadow-float">
            <img src={cover} alt="" aria-hidden="true" width={1600} height={640}
              className="w-full h-[220px] md:h-[340px] object-cover" />
          </div>
        </div>
      </div>

      <section className="bg-paper py-14 md:py-18">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* TOC */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28">
                <p className="type-eyebrow text-slate-light pb-2.5 mb-3 border-b border-ink/[0.09]">Contents</p>
                <nav aria-label="Article contents">
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
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2">
              <Reveal>
                <div className="prose-editorial max-w-3xl">
                  <p>
                    This article sets out how <strong>{keyword}</strong> applies to
                    businesses operating in Goa — what actually moves results here, what
                    tends to waste budget, and the order in which we would tackle it.
                    Written by the Sanctify team, working in this market since 2012.
                  </p>

                  <h2 id="context">Context</h2>
                  <p>
                    Goa is a small market with disproportionate competition. A relatively
                    limited pool of businesses compete for high-intent search demand, much
                    of which arrives from outside the state and converts on a short
                    timeline. That combination rewards preparation and punishes reactive,
                    campaign-by-campaign thinking.
                  </p>
                  <p>
                    It also means the fundamentals matter more than novelty. A complete
                    business listing, a fast site, and clear answers to the questions
                    buyers actually ask will outperform a more elaborate programme built on
                    a weak base.
                  </p>

                  <h2 id="market">Why it matters in Goa specifically</h2>
                  <ul>
                    <li><strong>Seasonality is severe.</strong> Demand for tourist-facing categories concentrates heavily in a few months. Spend and content need to lead that curve, not follow it.</li>
                    <li><strong>Two distinct audiences.</strong> Residents and visitors search differently, compare differently and convert on different timelines. Treating them as one audience dilutes both.</li>
                    <li><strong>Mobile dominates.</strong> The majority of local search traffic arrives on a phone, frequently on a variable connection. Page weight has direct commercial consequences.</li>
                    <li><strong>Multilingual context.</strong> English carries most commercial search, but Konkani, Hindi and Marathi shape how people phrase things and what feels credible.</li>
                    <li><strong>AI assistants are now in the path.</strong> A growing share of research happens through AI tools that summarise rather than list, which changes what earns a mention.</li>
                  </ul>

                  <h2 id="practice">What works in practice</h2>
                  <p>
                    Across engagements, the interventions that consistently produce
                    measurable movement are unglamorous:
                  </p>
                  <ol>
                    <li><strong>Fix the local foundation first.</strong> Complete and consistent business details, genuine review volume, accurate categories and hours. This is the highest-return work in almost every local audit.</li>
                    <li><strong>Reduce page weight.</strong> Sub-three-second mobile loads. Compress images, remove unused scripts, defer what is not needed for first paint.</li>
                    <li><strong>Answer real questions.</strong> Build content around what buyers ask before purchasing, in their phrasing. This serves traditional search and AI summarisation simultaneously.</li>
                    <li><strong>Instrument properly.</strong> If you cannot attribute an enquiry to a source, you cannot allocate budget rationally. Set this up before scaling spend.</li>
                    <li><strong>Front-load seasonally.</strong> Publish and build authority ahead of the demand curve. Organic visibility has a lag; paid does not, so the mix should shift through the year.</li>
                  </ol>

                  <h2 id="sequence">Implementation sequence</h2>
                  <p>
                    Order matters more than breadth. A realistic first six months:
                  </p>
                  <ul>
                    <li><strong>Weeks 1–2 —</strong> Audit and instrumentation. Establish the baseline and confirm tracking is trustworthy.</li>
                    <li><strong>Weeks 3–4 —</strong> Research. Query mapping, competitor benchmarking, audience definition.</li>
                    <li><strong>Month 2 —</strong> Technical remediation and local foundation. Fix what is actively suppressing performance.</li>
                    <li><strong>Month 3 —</strong> Content and campaign launch, built on the research rather than assumption.</li>
                    <li><strong>Months 4–6 —</strong> Scale what demonstrably works, cut what does not, build authority steadily.</li>
                  </ul>

                  <h2 id="mistakes">Common mistakes</h2>
                  <ul>
                    <li>Expecting organic results inside a month. Three to six is realistic for local search.</li>
                    <li>Publishing volume without a query strategy — content that answers nothing ranks for nothing.</li>
                    <li>Reporting reach and followers instead of enquiries and cost per enquiry.</li>
                    <li>Running paid campaigns to a page with no clear next action.</li>
                    <li>Changing strategy monthly. Compounding requires consistency.</li>
                  </ul>

                  <h2 id="help">Getting help</h2>
                  <p>
                    If you would rather this were handled for you, Sanctify has been doing
                    exactly this in Goa since 2012 — over fourteen years and 200+ projects.
                    We start with a free audit so you can see the reasoning before
                    committing to anything.
                  </p>
                </div>
              </Reveal>

              {/* Inline CTA */}
              <Reveal>
                <div className="mt-12 bg-ink rounded-2xl p-7 md:p-8 grain relative overflow-hidden">
                  <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />
                  <div className="relative z-10 md:flex items-center justify-between gap-8">
                    <div>
                      <p className="font-bold text-white text-lg">Want this audited for your business?</p>
                      <p className="mt-2 text-white/55 text-sm leading-relaxed max-w-md">
                        We&apos;ll benchmark you against local competitors and send a written
                        summary — no cost, no obligation.
                      </p>
                    </div>
                    <a href="/contact/" className="mt-5 md:mt-0 inline-flex items-center gap-2 bg-acid text-ink px-6 py-3.5 rounded-[6px] font-bold text-sm hover:bg-white transition-colors shrink-0">
                      Request audit <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Related */}
              <Reveal>
                <div className="mt-12 pt-8 border-t border-ink/[0.09]">
                  <p className="type-eyebrow text-slate-light mb-4">Related reading</p>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-px">
                    {related
                      .filter((r) => r.slug !== slug)
                      .map((r) => (
                        <a
                          key={r.slug}
                          href={`/blog/${r.slug}/`}
                          className="group flex items-center justify-between gap-4 py-3 border-b border-ink/[0.07] hover:border-ink/25 transition-colors"
                        >
                          <span className="text-[0.875rem] text-ink/80 group-hover:text-ink font-medium">{r.title}</span>
                          <ChevronRight size={15} className="text-slate-light shrink-0 group-hover:text-electric transition-colors" />
                        </a>
                      ))}
                  </div>
                </div>
              </Reveal>

              <div className="mt-10">
                <a href="/blog/" className="inline-flex items-center gap-2 text-ink font-semibold text-sm sweep">
                  <ArrowLeft size={15} /> All insights
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
