import { Check, ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const retainers = [
  {
    name: "Foundation",
    price: "₹15,000",
    period: "per month",
    for: "Single-channel focus for smaller businesses establishing a presence.",
    featured: false,
    includes: [
      "Social media management — 2 platforms",
      "8 planned posts per month",
      "Google Business Profile setup & upkeep",
      "Baseline SEO audit",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₹30,000",
    period: "per month",
    for: "Multi-channel programme for businesses actively competing for share.",
    featured: true,
    includes: [
      "Social media management — 4 platforms",
      "16 posts plus stories per month",
      "SEO programme — 10 priority queries",
      "Google Ads management",
      "4 content pieces per month",
      "Competitor benchmarking",
      "Fortnightly review call",
      "Named account manager",
    ],
  },
  {
    name: "Authority",
    price: "₹60,000",
    period: "per month",
    for: "Full programme including AI search visibility and video production.",
    featured: false,
    includes: [
      "Everything in Growth",
      "SEO programme — 20+ priority queries",
      "AI visibility: GEO, AEO and LLMO",
      "Video content production",
      "Landing pages and funnel design",
      "Email lifecycle automation",
      "Weekly optimisation cycle",
      "Quarterly strategy reset",
    ],
  },
];

const projects = [
  { name: "Starter website", price: "₹25,000", detail: "5–7 pages, responsive, SEO foundation, 1-year hosting" },
  { name: "Business website", price: "₹45,000", detail: "10–15 pages, blog, gallery, enquiry forms, analytics" },
  { name: "Premium website", price: "₹75,000+", detail: "15–25 pages, CMS, custom interactions, advanced schema" },
  { name: "E-commerce build", price: "₹1,00,000+", detail: "Catalogue, payment gateway, inventory, order flows" },
  { name: "Brand identity", price: "₹35,000+", detail: "Logo system, palette, typography, usage guidelines" },
  { name: "One-off audit", price: "₹12,000", detail: "Technical, content and competitor audit with roadmap" },
];

export function Pricing() {
  return (
    <>
      {/* Retainers */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="type-eyebrow text-electric">Monthly retainers</p>
              <h2 className="mt-3 type-display text-ink">
                Three tiers.
                <br />
                <span className="type-accent-italic text-slate">No lock-in.</span>
              </h2>
              <p className="mt-5 text-slate text-base leading-relaxed">
                All retainers run on rolling monthly terms with 30 days&apos; notice. Prices
                exclude GST. Every engagement begins with a free audit, so scope is agreed
                before anything is committed.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-3 gap-4">
            {retainers.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div
                  className={`relative h-full rounded-2xl p-7 flex flex-col ${
                    p.featured
                      ? "bg-ink text-white grain overflow-hidden"
                      : "bg-white edge-soft"
                  }`}
                >
                  {p.featured && <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />}

                  <div className="relative z-10 flex flex-col h-full">
                    {p.featured && (
                      <span className="inline-flex items-center gap-1.5 self-start bg-acid text-ink px-3 py-1 rounded-full type-eyebrow mb-4">
                        <Star size={10} className="fill-ink" /> Most chosen
                      </span>
                    )}

                    <h3 className={`font-bold text-xl tracking-tight ${p.featured ? "text-white" : "text-ink"}`}>
                      {p.name}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${p.featured ? "text-white/55" : "text-slate"}`}>
                      {p.for}
                    </p>

                    <div className="mt-6 pb-6 border-b" style={{ borderColor: p.featured ? "rgba(255,255,255,0.1)" : "rgba(10,10,15,0.08)" }}>
                      <span className={`font-black text-4xl tracking-tighter ${p.featured ? "text-white" : "text-ink"}`}>
                        {p.price}
                      </span>
                      <span className={`text-sm ml-2 ${p.featured ? "text-white/45" : "text-slate"}`}>{p.period}</span>
                    </div>

                    <ul className="mt-6 space-y-2.5 flex-1">
                      {p.includes.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            size={14}
                            strokeWidth={2.5}
                            className={`shrink-0 mt-0.5 ${p.featured ? "text-acid" : "text-electric"}`}
                          />
                          <span className={`text-[0.8125rem] leading-relaxed ${p.featured ? "text-white/75" : "text-slate"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact/"
                      className={`mt-7 inline-flex items-center justify-center gap-2 py-3.5 rounded-[6px] font-bold text-sm transition-colors ${
                        p.featured
                          ? "bg-acid text-ink hover:bg-white"
                          : "bg-ink text-white hover:bg-electric"
                      }`}
                    >
                      Request a proposal <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One-off projects */}
      <section className="bg-sand py-16 md:py-20 border-y border-ink/[0.07]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="type-eyebrow text-electric">One-off projects</p>
              <h2 className="mt-3 type-display text-ink">Fixed-scope work</h2>
              <p className="mt-5 text-slate text-base leading-relaxed">
                Not every requirement needs a retainer. These are delivered as defined
                projects with agreed milestones.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="h-full bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-bold text-ink text-base">{p.name}</h3>
                    <span className="font-black text-ink text-lg tracking-tight shrink-0">{p.price}</span>
                  </div>
                  <p className="mt-2.5 text-slate text-[0.8125rem] leading-relaxed">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 bg-white edge-soft rounded-2xl p-6 md:p-7">
              <div className="md:flex items-center justify-between gap-8">
                <div>
                  <p className="font-bold text-ink text-base">Requirements outside these ranges?</p>
                  <p className="mt-2 text-slate text-sm leading-relaxed max-w-xl">
                    Most engagements get shaped to fit. Tell us the outcome you need and the
                    budget you have, and we will tell you honestly whether it is achievable.
                  </p>
                </div>
                <a
                  href="/contact/"
                  className="mt-5 md:mt-0 inline-flex items-center gap-2 bg-ink hover:bg-electric text-white px-6 py-3.5 rounded-[6px] font-bold text-sm transition-colors shrink-0"
                >
                  Discuss scope <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's always included */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="type-eyebrow text-electric">Every engagement</p>
            <h2 className="mt-3 type-display text-ink">Included as standard</h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Free initial audit", d: "Documented baseline with competitor comparison, before you commit." },
              { t: "Named account manager", d: "One human point of contact who knows your business and market." },
              { t: "Dashboard access", d: "Live reporting you can check any time, not just at month end." },
              { t: "No lock-in", d: "Rolling monthly terms, 30 days' notice, no exit penalty." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <div className="h-full bg-sand rounded-2xl p-6">
                  <span className="w-9 h-9 rounded-lg bg-ink text-acid grid place-items-center mb-4">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-ink text-sm">{f.t}</h3>
                  <p className="mt-2 text-slate text-xs leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-slate text-[0.8125rem] leading-relaxed max-w-3xl">
              All prices exclude GST, charged at the prevailing statutory rate. Advertising
              spend, software licences, stock media and hosting are billed separately or paid
              directly, as agreed. Full terms are set out in our{" "}
              <a href="/terms/" className="text-electric font-medium underline">Terms &amp; Conditions</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
