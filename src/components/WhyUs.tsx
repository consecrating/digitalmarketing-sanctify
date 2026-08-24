import { ArrowUpRight, Check } from "lucide-react";
import { IMG } from "@/lib/images";

const pillars = [
  { n: "01", title: "Integrated, not fragmented", body: "One team owns brand, search, social and paid. No agency ping-pong, no conflicting strategies." },
  { n: "02", title: "Research before spend", body: "Every engagement opens with market, competitor and SERP intelligence — so budget follows evidence." },
  { n: "03", title: "Local depth, national standard", body: "We know Goa's seasonality, its tourist-vs-resident split, and how demand actually moves here." },
  { n: "04", title: "Reporting you can audit", body: "Live dashboards, plain-English monthly reviews, and metrics tied to revenue — not impressions." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative mesh-sand py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sticky left column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="type-eyebrow text-electric">Why Sanctify</p>
              <h2 className="mt-3 type-display text-ink">
                A growth partner,
                <br />
                <span className="type-accent-italic text-slate">not a vendor.</span>
              </h2>
              <p className="mt-5 text-slate text-base leading-relaxed max-w-md">
                Sanctify has operated out of South Goa since 2012. Over 200
                projects later, the thing clients keep citing isn&apos;t a channel —
                it&apos;s that one accountable team carries the whole strategy.
              </p>

              <div className="mt-7 rounded-2xl overflow-hidden edge-soft shadow-float max-w-md">
                <img src={IMG.officeCollab} alt="Sanctify strategists reviewing campaign performance together"
                  width={800} height={420} loading="lazy"
                  className="w-full h-[200px] object-cover" />
              </div>

              <div className="mt-4 bg-white edge-soft rounded-2xl p-5 max-w-md">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-ink text-acid grid place-items-center font-bold text-sm shrink-0">PS</span>
                  <div>
                    <p className="font-bold text-ink text-sm">Punit Sahay</p>
                    <p className="text-slate text-xs">Founder &amp; Proprietor</p>
                  </div>
                </div>
                <p className="mt-4 text-slate text-sm leading-relaxed">
                  &ldquo;Do great work, stay transparent, treat every client&apos;s growth
                  as your own. That hasn&apos;t changed in fourteen years.&rdquo;
                </p>
              </div>

              <a
                href="/about/"
                className="mt-6 inline-flex items-center gap-2 text-ink font-bold text-sm sweep"
              >
                Read our full story <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Numbered pillars */}
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {pillars.map((p) => (
                <li
                  key={p.n}
                  className="group bg-white edge-soft rounded-2xl p-6 md:p-7 lift hover:border-ink/20"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-black text-2xl md:text-3xl text-electric-100 group-hover:text-acid transition-colors shrink-0 leading-none">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-bold text-ink text-lg md:text-xl tracking-tight">{p.title}</h3>
                      <p className="mt-2 text-slate text-sm md:text-[0.9375rem] leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Credential strip */}
            <div className="mt-4 bg-ink rounded-2xl p-6 md:p-7 grain relative overflow-hidden">
              <div className="absolute inset-0 field-dots-light opacity-50" />
              <div className="relative z-10">
                <p className="type-eyebrow text-acid">In-house capability</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {["Strategy", "Technical SEO", "Content", "Paid Media", "Design", "Development", "Video", "Analytics", "AI Search"].map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/[0.07] border border-white/10 px-3 py-1.5 rounded-full">
                      <Check size={11} className="text-acid" /> {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
