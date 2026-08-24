import { Search, PenTool, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Immerse & audit",
    body: "We map your current visibility, technical health, competitor SERPs and buyer intent before recommending anything.",
    output: "Audit deck + opportunity map",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Strategy & roadmap",
    body: "A prioritised 90-day plan: which keywords, which channels, which pages, and what each one is expected to return.",
    output: "90-day roadmap + KPI targets",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Build & launch",
    body: "In-house execution across content, technical fixes, creative and campaign setup. No outsourcing, no waiting.",
    output: "Live campaigns + shipped pages",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Measure & compound",
    body: "Weekly optimisation, monthly review, quarterly strategy reset. Gains stack instead of resetting.",
    output: "Dashboard + monthly review",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-ink py-20 md:py-28 grain overflow-hidden">
      <div className="absolute inset-0 field-grid-light" />
      <div className="absolute top-1/4 left-0 w-[420px] h-[420px] rounded-full bg-electric/15 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="type-eyebrow text-acid">How we work</p>
          <h2 className="mt-3 type-display text-white">
            Four phases.
            <br />
            <span className="type-accent-italic text-electric-light">Zero guesswork.</span>
          </h2>
        </div>

        {/* Connected timeline */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className="group relative edge-light bg-white/[0.04] hover:bg-white/[0.08] rounded-2xl p-6 transition-colors"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-11 -right-2 w-4 h-px bg-white/15" aria-hidden="true" />
              )}

              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-acid text-ink grid place-items-center shrink-0">
                  <s.icon size={19} />
                </span>
                <span className="font-black text-3xl text-white/[0.09] group-hover:text-white/20 transition-colors leading-none">
                  {s.n}
                </span>
              </div>

              <h3 className="mt-5 font-bold text-white text-lg tracking-tight">{s.title}</h3>
              <p className="mt-2.5 text-white/50 text-sm leading-relaxed">{s.body}</p>

              <p className="mt-5 pt-4 border-t border-white/[0.08] type-eyebrow text-acid/70">
                {s.output}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
