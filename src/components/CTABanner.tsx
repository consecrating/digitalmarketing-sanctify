import { ArrowUpRight, Phone, Check } from "lucide-react";

const assurances = [
  "Free visibility audit",
  "No lock-in contracts",
  "Reply within 24 hours",
];

export function CTABanner() {
  return (
    <section className="relative mesh-electric grain overflow-hidden" aria-label="Get started with Sanctify">
      <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="type-eyebrow text-white/60">Next step</p>
            <h2 className="mt-3 type-display text-white">
              Let&apos;s find the gap
              <br />
              <span className="type-accent-italic text-acid">worth closing.</span>
            </h2>
            <p className="mt-5 text-white/70 text-base leading-relaxed max-w-xl">
              Send us your website and we&apos;ll return a plain-English audit: where
              you rank, where your competitors beat you, and which three fixes
              would move the most revenue.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {assurances.map((a) => (
                <li key={a} className="inline-flex items-center gap-2 text-white/75 text-sm">
                  <span className="w-4 h-4 rounded-full bg-acid text-ink grid place-items-center shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end w-full">
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-float">
              <p className="type-eyebrow text-slate-light">Request an audit</p>
              <p className="mt-2 font-bold text-ink text-lg leading-snug">
                Talk to the team that will do the work
              </p>
              <p className="mt-2 text-slate text-sm leading-relaxed">
                No call centre, no junior handoff — you speak with the strategist
                who will run your account.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-electric text-white px-6 py-3.5 rounded-[6px] font-bold text-sm transition-colors"
                >
                  Request free audit <ArrowUpRight size={16} />
                </a>
                <a
                  href="tel:+919923352923"
                  className="inline-flex items-center justify-center gap-2 border border-ink/15 hover:border-ink/35 text-ink px-6 py-3.5 rounded-[6px] font-semibold text-sm transition-colors"
                >
                  <Phone size={15} /> +91 99233 52923
                </a>
              </div>

              <p className="mt-4 pt-4 border-t border-ink/[0.08] text-slate text-xs">
                Mon–Sat, 09:00–18:00 IST · Zuarinagar, Goa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
