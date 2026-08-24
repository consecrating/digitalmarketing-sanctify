import { ArrowUpRight, Check, ChevronRight, Brain, Globe, Target } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

const aiSiblings = [
  { href: "/ai-marketing/", label: "AI Marketing" },
  { href: "/geo-optimization/", label: "GEO Optimisation" },
  { href: "/aeo-services/", label: "AEO Services" },
  { href: "/llmo-services/", label: "LLMO Services" },
  { href: "/chatgpt-visibility/", label: "ChatGPT Visibility" },
  { href: "/perplexity-optimization/", label: "Perplexity Optimisation" },
  { href: "/gemini-optimization/", label: "Gemini Optimisation" },
  { href: "/ai-seo/", label: "AI SEO" },
];

const toc = [
  { id: "definition", label: "What it is" },
  { id: "signals", label: "How AI selects sources" },
  { id: "scope", label: "What we deliver" },
  { id: "distinctions", label: "SEO vs GEO vs AEO vs LLMO" },
  { id: "reporting", label: "What we report" },
  { id: "next", label: "Next steps" },
];

export function AIServiceTemplate({
  title,
  fullTitle,
  slug,
  heroDesc,
  whatIs,
  whyUs,
}: {
  title: string;
  fullTitle: string;
  slug: string;
  heroDesc: string;
  whatIs: string;
  whyUs: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="AI search visibility"
        title={fullTitle}
        accent="in Goa"
        lede={heroDesc}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/ai-marketing/", label: "AI Marketing" },
          { label: title },
        ]}
        meta={
          <FactGrid
            items={[
              { k: "Operating since", v: "2012 · 14+ years" },
              { k: "Typical first result", v: "60–90 days" },
              { k: "Client rating", v: "4.8 / 5" },
              { k: "Retainers from", v: "₹15,000/mo" },
            ]}
          />
        }
      />

      {/* Why now — three light cards */}
      <section className="bg-sand py-14 md:py-16 border-b border-ink/[0.07]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Brain, t: "Research has moved", d: "A growing share of buyer research now happens inside AI assistants that summarise rather than list ten links." },
              { icon: Globe, t: "Summaries replace clicks", d: "When an assistant answers directly, being mentioned in that answer matters more than ranking beneath it." },
              { icon: Target, t: "The field is still open", d: "Very few businesses in Goa have started optimising for this, so early positioning is unusually cheap." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="h-full bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                  <span className="w-10 h-10 rounded-xl bg-ink text-acid grid place-items-center mb-4">
                    <c.icon size={18} />
                  </span>
                  <h2 className="font-bold text-ink text-base">{c.t}</h2>
                  <p className="mt-2 text-slate text-sm leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="type-eyebrow text-slate-light pb-2.5 mb-3 border-b border-ink/[0.09]">On this page</p>
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
                  <p className="font-bold text-ink text-sm">Free AI visibility audit</p>
                  <p className="mt-1.5 text-slate text-xs leading-relaxed">
                    We check how your brand currently appears across major AI assistants.
                  </p>
                  <a href="/contact/" className="mt-3 inline-flex items-center gap-1.5 text-electric font-bold text-xs">
                    Request it <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <Reveal>
                <div className="prose-editorial max-w-3xl">
                  <h2 id="definition">What {title} means</h2>
                  <p>{whatIs}</p>

                  <h2 id="signals">How AI systems choose which sources to cite</h2>
                  <p>
                    Language models and AI search products do not rank pages the way a
                    classic search engine does. They assemble an answer and attribute it.
                    The factors that determine whether your brand appears are:
                  </p>
                  <ul>
                    <li><strong>Topical depth</strong> — comprehensive coverage of a subject rather than thin pages spread across many.</li>
                    <li><strong>Corroboration</strong> — the same facts about your business appearing consistently across independent sources.</li>
                    <li><strong>Machine-readable structure</strong> — clean markup and schema so systems can parse claims without ambiguity.</li>
                    <li><strong>Entity consistency</strong> — name, location, services and contact details identical everywhere they appear.</li>
                    <li><strong>Verifiable specifics</strong> — concrete figures, dates and named details rather than unfalsifiable marketing language.</li>
                    <li><strong>Recency</strong> — content that is maintained, since stale pages are deprioritised.</li>
                    <li><strong>Demonstrated expertise</strong> — named authors, real credentials, genuine first-hand experience.</li>
                  </ul>

                  <h2 id="scope">What we deliver</h2>
                  <ul>
                    <li><strong>Baseline visibility audit</strong> — we query the major assistants on the prompts your buyers would realistically use and record whether you appear.</li>
                    <li><strong>Gap analysis</strong> — which competitors are being surfaced instead, and what they have that you do not.</li>
                    <li><strong>Content restructuring</strong> — reshaping existing pages so claims are extractable and attributable.</li>
                    <li><strong>Entity and schema work</strong> — structured data, consistent business facts, and an <code>llms.txt</code> manifest.</li>
                    <li><strong>Corroboration building</strong> — accurate, consistent brand references across independent third-party sources.</li>
                    <li><strong>Ongoing monitoring</strong> — repeat prompt testing so you can see movement rather than guess at it.</li>
                  </ul>

                  <h2 id="distinctions">SEO, GEO, AEO and LLMO — the distinction</h2>
                  <p>
                    These terms get used interchangeably and should not be. Each targets a
                    different surface:
                  </p>
                  <ul>
                    <li><strong>SEO</strong> — ranking in conventional search result listings.</li>
                    <li><strong>GEO</strong> — being cited inside AI-generated overviews that sit above those listings.</li>
                    <li><strong>AEO</strong> — being served as the direct answer, including featured snippets and voice responses.</li>
                    <li><strong>LLMO</strong> — being recalled and recommended by a language model when asked for options in your category.</li>
                  </ul>
                  <p>
                    We deliver these as one programme. They share most of the same
                    underlying work, and splitting them across separate vendors produces
                    duplicated effort and conflicting recommendations.
                  </p>

                  <h2 id="reporting">What we report</h2>
                  <p>
                    Monthly, against a fixed prompt set so results are comparable
                    month-to-month: whether your brand appeared, in what position within
                    the answer, which competitors appeared alongside you, and which of your
                    pages were used as the source. Alongside this, conventional search
                    metrics, since the same work lifts both.
                  </p>

                  <h2 id="next">Why Sanctify</h2>
                  <p>{whyUs}</p>
                </div>
              </Reveal>

              {/* Honest expectations panel */}
              <Reveal>
                <div className="mt-12 bg-sand rounded-2xl p-6 md:p-7 border-l-4 border-electric">
                  <p className="type-eyebrow text-slate-light">Setting expectations</p>
                  <p className="mt-2.5 text-ink/85 text-[0.9375rem] leading-relaxed">
                    AI visibility cannot be guaranteed. These systems are opaque, change
                    without notice, and no agency controls their output. What we can do is
                    build the signals that demonstrably correlate with being cited, measure
                    against a fixed prompt set, and report honestly on movement. Any agency
                    promising guaranteed AI placement is overstating what is possible.
                  </p>
                </div>
              </Reveal>

              {/* Deliverables grid */}
              <Reveal>
                <h2 className="type-heading text-ink mt-14 mb-6">Included as standard</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t: "Fixed prompt set", d: "An agreed list of buyer-realistic prompts, tested monthly for comparability." },
                    { t: "Competitor tracking", d: "Which rival brands surface alongside or instead of you, and on which prompts." },
                    { t: "Source attribution", d: "Which of your pages assistants actually draw from, so you know what to strengthen." },
                    { t: "Schema & entity layer", d: "Structured data, consistent business facts, and an llms.txt manifest." },
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
              </Reveal>

              {/* Siblings */}
              <Reveal>
                <div className="mt-14 pt-8 border-t border-ink/[0.09]">
                  <p className="type-eyebrow text-slate-light mb-4">Across the AI visibility suite</p>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-px">
                    {aiSiblings
                      .filter((s) => s.href !== `/${slug}/`)
                      .map((s) => (
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
                </div>
              </Reveal>

              <Reveal>
                <div className="mt-10">
                  <p className="type-eyebrow text-slate-light mb-3">Conventional channels</p>
                  <ul className="flex flex-wrap gap-2">
                    {[
                      { href: "/seo-services/", label: "SEO Services" },
                      { href: "/content-marketing/", label: "Content Marketing" },
                      { href: "/social-media-marketing/", label: "Social Media" },
                      { href: "/web-design/", label: "Web Design" },
                      { href: "/pricing/", label: "Pricing" },
                    ].map((s) => (
                      <li key={s.href}>
                        <a href={s.href} className="inline-block text-[0.8125rem] text-slate bg-sand px-3.5 py-2 rounded-full hover:bg-electric hover:text-white transition-colors">
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
