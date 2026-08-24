import { Search, Share2, Layout, MousePointerClick, PenTool, Brain, Mail, Palette, Video, Shield, ArrowUpRight } from "lucide-react";

const featured = [
  {
    icon: Search,
    title: "Search Engine Optimisation",
    href: "/seo-services/",
    blurb: "Technical audits, local pack domination, and topical authority that compounds month after month.",
    points: ["Technical SEO & Core Web Vitals", "Google Business Profile", "Link acquisition"],
  },
  {
    icon: Brain,
    title: "AI Search Visibility",
    href: "/ai-marketing/",
    blurb: "Be the brand that ChatGPT, Gemini and Perplexity recommend when buyers ask.",
    points: ["GEO — generative engines", "AEO — answer engines", "LLMO — model recall"],
  },
];

const rest = [
  { icon: Share2, title: "Social Media", href: "/social-media-marketing/", blurb: "Content, community and paid social that builds real audiences." },
  { icon: Layout, title: "Web Design", href: "/web-design/", blurb: "Fast, accessible sites engineered to convert." },
  { icon: MousePointerClick, title: "Google Ads", href: "/google-ads/", blurb: "Search, Performance Max and remarketing tuned for CPL." },
  { icon: PenTool, title: "Content", href: "/content-marketing/", blurb: "Editorial that earns links and answers buyer questions." },
  { icon: Mail, title: "Email", href: "/email-marketing/", blurb: "Lifecycle flows that turn one-time buyers into regulars." },
  { icon: Palette, title: "Brand Design", href: "/graphic-design/", blurb: "Identity systems and creative that hold up everywhere." },
  { icon: Video, title: "Video", href: "/video-marketing/", blurb: "Short-form and brand film built for the feed." },
  { icon: Shield, title: "Reputation", href: "/reputation-management/", blurb: "Review velocity and sentiment you actually control." },
];

export function ServicesOverview() {
  return (
    <section id="services" className="relative bg-paper py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-electric-50 blur-[130px] -translate-y-1/3 translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header row */}
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="type-eyebrow text-electric">What we do</p>
            <h2 className="mt-3 type-display text-ink">
              Ten disciplines.
              <br />
              <span className="type-accent-italic text-slate">One growth engine.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-slate text-base leading-relaxed lg:ml-auto max-w-sm">
              No fragmented handoffs. One in-house team owns strategy, creative,
              build and performance — so every channel pulls in the same direction.
            </p>
          </div>
        </div>

        {/* Featured pair — large bento cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((s, i) => (
            <a
              key={s.href}
              href={s.href}
              className={`group relative rounded-3xl p-7 md:p-9 overflow-hidden lift ${
                i === 0 ? "bg-ink text-white grain" : "mesh-sand edge-soft text-ink"
              }`}
            >
              {i === 0 && <div className="absolute inset-0 field-dots-light opacity-60" />}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      i === 0 ? "bg-acid text-ink" : "bg-ink text-acid"
                    }`}
                  >
                    <s.icon size={22} />
                  </div>
                  <ArrowUpRight
                    size={22}
                    className={`shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      i === 0 ? "text-acid" : "text-electric"
                    }`}
                  />
                </div>

                <h3 className="mt-6 type-heading">{s.title}</h3>
                <p className={`mt-3 text-sm md:text-base leading-relaxed max-w-md ${i === 0 ? "text-white/55" : "text-slate"}`}>
                  {s.blurb}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                        i === 0 ? "bg-white/[0.07] text-white/65 border border-white/10" : "bg-white text-ink/70 edge-soft"
                      }`}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        {/* Remaining eight — compact bento */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group relative bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20"
            >
              <div className="w-10 h-10 rounded-lg bg-electric-50 text-electric flex items-center justify-center mb-4 transition-colors group-hover:bg-electric group-hover:text-white">
                <s.icon size={18} />
              </div>
              <h3 className="font-bold text-ink text-[0.9375rem] leading-snug flex items-start gap-1.5">
                {s.title}
                <ArrowUpRight size={13} className="mt-0.5 shrink-0 text-slate-light opacity-0 transition-all group-hover:opacity-100 group-hover:text-electric" />
              </h3>
              <p className="mt-2 text-slate text-xs leading-relaxed">{s.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
