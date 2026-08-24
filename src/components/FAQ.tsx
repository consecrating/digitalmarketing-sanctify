const faqs = [
  {
    q: "What makes Sanctify the best digital marketing agency in Goa?",
    a: "Three things: fourteen years operating in this specific market, a fully in-house team across every discipline, and reporting tied to revenue rather than impressions. We have shipped 200+ projects for businesses in Panaji, Margao, Mapusa, Vasco and Calangute since 2012.",
  },
  {
    q: "How much does digital marketing cost in Goa?",
    a: "Retainers start at ₹15,000 per month for focused social media management. Most growing businesses invest ₹30,000–₹60,000 monthly for combined SEO, social and paid media. Websites start at ₹25,000 as a one-time build. Every engagement begins with a free audit so scope is agreed before spend.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "For local SEO in Goa, expect early movement in months three to four and meaningful ranking gains by months six to eight. Competitive national terms take longer. You receive monthly progress reports throughout, so there is no waiting in the dark.",
  },
  {
    q: "What is GEO, AEO and LLMO — and do I need them?",
    a: "GEO optimises for generative engines like Google AI Overviews. AEO targets direct answers such as featured snippets and voice results. LLMO improves how models like ChatGPT and Gemini recall and recommend your brand. If your buyers research using AI tools, yes — and most Goa businesses have not started, which is the opportunity.",
  },
  {
    q: "Do you work with hotels and restaurants specifically?",
    a: "Hospitality is our deepest vertical. We handle Google Business Profile optimisation, review velocity, destination keyword strategy, direct-booking funnels and seasonal campaign planning built around Goa's tourist calendar.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We work on rolling monthly engagements with a 30-day notice period. Clients stay because the numbers justify it, not because a contract obliges them to.",
  },
  {
    q: "Will I get a dedicated point of contact?",
    a: "Yes. Every account has a named manager who knows your business, plus direct access to the specialists executing the work. No ticket queues, no rotating juniors.",
  },
  {
    q: "Do you serve clients outside Goa?",
    a: "Yes. Our head office is in Zuarinagar, Goa, with contact points in Varanasi and Italy. We currently work with clients across India and internationally.",
  },
];

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative mesh-sand py-20 md:py-28 overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="type-eyebrow text-electric">Questions</p>
              <h2 className="mt-3 type-display text-ink">
                Straight
                <br />
                <span className="type-accent-italic text-slate">answers.</span>
              </h2>
              <p className="mt-5 text-slate text-sm leading-relaxed max-w-xs">
                Still unsure? A 30-minute call costs nothing and usually clarifies
                more than a proposal.
              </p>
              <a
                href="/contact/"
                className="mt-6 inline-flex items-center gap-2 bg-ink text-white px-5 py-3 rounded-full font-bold text-sm press shadow-hard-electric"
              >
                Book a call
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink/[0.09] border-y border-ink/[0.09]">
              {faqs.map((f, i) => (
                <details key={i} className="group py-5" open={i === 0}>
                  <summary className="flex items-start justify-between gap-5 cursor-pointer list-none">
                    <h3 className="font-bold text-ink text-base md:text-lg tracking-tight pr-2">
                      {f.q}
                    </h3>
                    <span
                      className="relative w-6 h-6 shrink-0 mt-0.5 grid place-items-center rounded-full bg-ink/[0.06] group-hover:bg-acid transition-colors"
                      aria-hidden="true"
                    >
                      <span className="absolute w-2.5 h-[1.5px] bg-ink" />
                      <span className="absolute w-[1.5px] h-2.5 bg-ink transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <div className="mt-3 pr-10">
                    <p className="text-slate text-sm md:text-[0.9375rem] leading-relaxed">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
