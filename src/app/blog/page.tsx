import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { blogImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights — Digital Marketing Guides for Goa Businesses",
  description:
    "Practical digital marketing analysis from Sanctify, Goa. SEO, paid media, social, AI search visibility and measurement — written by the team delivering the work since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/" },
};

const posts = [
  { slug: "why-digital-marketing-important-goa-businesses", title: "Why digital marketing matters for Goa businesses in 2026", cat: "Strategy", date: "22 Aug 2026", read: "8 min", excerpt: "Seasonality, a split resident-and-visitor audience, and mobile-first behaviour make Goa a distinct market. Here is what that means for planning.", feature: true },
  { slug: "seo-tips-small-business-goa", title: "Ten SEO priorities for small businesses in Goa", cat: "SEO", date: "18 Aug 2026", read: "10 min", excerpt: "The interventions that consistently move local rankings, in the order we would tackle them.", feature: true },
  { slug: "what-is-geo-optimization-guide", title: "What GEO is, and why it now matters", cat: "AI Search", date: "14 Aug 2026", read: "9 min", excerpt: "Generative Engine Optimisation explained without the hype — what it targets and what it cannot promise.", feature: true },
  { slug: "local-seo-guide-goa", title: "Local SEO: ranking in the Goa map pack", cat: "Local SEO", date: "15 Jul 2026", read: "11 min", excerpt: "Google Business Profile, citations, reviews and locality content — the local foundation in full." },
  { slug: "facebook-ads-guide-goa", title: "A working guide to Meta Ads for Goa businesses", cat: "Paid Ads", date: "12 Aug 2026", read: "12 min", excerpt: "Audience construction, creative testing and budget pacing around Goa's seasonal demand curve." },
  { slug: "instagram-marketing-hotels-goa", title: "Instagram for hotels in Goa", cat: "Social", date: "28 Jul 2026", read: "9 min", excerpt: "How properties use Reels, Stories and grid content to shift bookings toward direct channels." },
  { slug: "google-business-profile-goa", title: "Optimising Google Business Profile properly", cat: "Local SEO", date: "20 Jul 2026", read: "7 min", excerpt: "The highest-return local task, and the fields most businesses leave incomplete." },
  { slug: "llmo-vs-seo-difference", title: "LLMO and SEO are not the same discipline", cat: "AI Search", date: "10 Aug 2026", read: "7 min", excerpt: "Where the two overlap, where they diverge, and whether you need both." },
  { slug: "how-to-get-mentioned-chatgpt", title: "Getting your business mentioned by ChatGPT", cat: "AI Search", date: "8 Aug 2026", read: "8 min", excerpt: "The signals that appear to influence conversational recommendations, and how to test for movement." },
  { slug: "google-ai-overviews-optimization", title: "Appearing in Google AI Overviews", cat: "AI Search", date: "6 Aug 2026", read: "9 min", excerpt: "Why AI Overview inclusion draws on conventional authority signals more than most assume." },
  { slug: "perplexity-citations-guide", title: "Earning citations in Perplexity", cat: "AI Search", date: "4 Aug 2026", read: "8 min", excerpt: "Perplexity attributes sources, which makes it the most measurable AI surface available." },
  { slug: "aeo-featured-snippets-guide", title: "AEO: winning the direct answer", cat: "AI Search", date: "2 Aug 2026", read: "8 min", excerpt: "Structuring passages so they can be lifted cleanly as a featured snippet or voice response." },
  { slug: "best-time-post-social-media-goa", title: "When to post for a Goa audience", cat: "Social", date: "25 Jun 2026", read: "6 min", excerpt: "Timing patterns for resident versus visitor audiences, and why generic advice misleads." },
  { slug: "website-cost-goa", title: "What a website actually costs in Goa", cat: "Web Design", date: "18 Jun 2026", read: "8 min", excerpt: "An honest breakdown of build costs by scope, and where budgets typically get misallocated." },
  { slug: "digital-marketing-vs-traditional-advertising-goa", title: "Digital versus traditional advertising in Goa", cat: "Strategy", date: "10 Jun 2026", read: "7 min", excerpt: "Where print, hoardings and radio still work here, and where digital clearly outperforms." },
  { slug: "ai-marketing-future-goa", title: "Where AI is actually changing marketing", cat: "AI Search", date: "28 May 2026", read: "9 min", excerpt: "Separating genuine capability shifts from vendor marketing." },
  { slug: "content-marketing-strategy-goa", title: "Building a content strategy that earns links", cat: "Content", date: "20 May 2026", read: "10 min", excerpt: "Query mapping, topical clustering and the publishing cadence that sustains authority." },
  { slug: "google-ads-vs-facebook-ads-goa", title: "Google Ads or Meta Ads — where to start", cat: "Paid Ads", date: "12 May 2026", read: "8 min", excerpt: "Intent versus interest targeting, and which suits which stage of business." },
  { slug: "ecommerce-marketing-goa", title: "E-commerce marketing from Goa", cat: "E-commerce", date: "28 Apr 2026", read: "9 min", excerpt: "Catalogue SEO, shopping campaigns and the retention work that determines profitability." },
  { slug: "video-marketing-goa-tourism", title: "Video for Goa's tourism sector", cat: "Video", date: "20 Apr 2026", read: "7 min", excerpt: "Short-form formats that convert interest into enquiries during the booking window." },
  { slug: "whatsapp-marketing-goa", title: "WhatsApp as a commercial channel", cat: "Strategy", date: "12 Apr 2026", read: "8 min", excerpt: "Practical use for enquiries, follow-up and retention without becoming intrusive." },
  { slug: "reputation-management-hotels-goa", title: "Reputation management for Goa hotels", cat: "Reputation", date: "28 Mar 2026", read: "7 min", excerpt: "Review velocity, response discipline and recovering from a poor run of feedback." },
  { slug: "ppc-advertising-goa", title: "Improving PPC return in a seasonal market", cat: "Paid Ads", date: "20 Mar 2026", read: "9 min", excerpt: "Bid strategy, negative keyword hygiene and pacing spend against demand." },
  { slug: "social-media-trends-goa-2026", title: "Social media patterns worth acting on", cat: "Social", date: "10 Mar 2026", read: "6 min", excerpt: "Which shifts justify changing your approach, and which are noise." },
  { slug: "ai-search-goa-tourism", title: "How visitors now research Goa", cat: "AI Search", date: "5 Mar 2026", read: "8 min", excerpt: "Conversational research is reshaping the travel discovery path. What that means for local operators." },
  { slug: "future-of-seo-ai-goa", title: "Where SEO goes from here", cat: "SEO", date: "1 Mar 2026", read: "9 min", excerpt: "Why the fundamentals became more important rather than less as AI entered search." },
  { slug: "seo-vs-ppc-goa", title: "SEO or PPC — sequencing the investment", cat: "Strategy", date: "25 Feb 2026", read: "8 min", excerpt: "How to phase organic and paid so early spend does not undermine long-term compounding." },
  { slug: "digital-marketing-roi-goa", title: "Measuring marketing ROI honestly", cat: "Analytics", date: "15 Feb 2026", read: "7 min", excerpt: "Attribution setup, the metrics that matter, and the vanity numbers to stop reporting." },
];

const categories = ["All", "SEO", "AI Search", "Paid Ads", "Social", "Strategy", "Content", "Local SEO", "Web Design", "Analytics"];

export default function BlogPage() {
  const featured = posts.filter((p) => p.feature);
  const rest = posts.filter((p) => !p.feature);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Analysis from"
        accent="the people doing the work."
        lede="No recycled listicles. These are working notes from a team running search, paid media and AI visibility programmes in Goa since 2012."
        crumbs={[{ href: "/", label: "Home" }, { label: "Insights" }]}
        image="/images/content-writing.webp"
        imageAlt="Writer drafting content at a workspace"
      >
        <div className="mt-10 flex flex-wrap gap-2 anim-rise d-4">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`px-3.5 py-2 rounded-full text-[0.75rem] font-medium transition-colors ${
                i === 0
                  ? "bg-acid text-ink"
                  : "border border-white/[0.14] text-white/55"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Featured */}
      <section className="bg-paper py-14 md:py-16">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-8">
              <h2 className="type-heading text-ink">Latest</h2>
              <span className="text-slate text-[0.8125rem]">{posts.length} articles</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <a
                  href={`/blog/${p.slug}/`}
                  className={`group h-full flex flex-col rounded-2xl p-7 lift ${
                    i === 0
                      ? "bg-ink text-white grain relative overflow-hidden"
                      : "bg-sand"
                  }`}
                >
                  {i === 0 && <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="rounded-xl overflow-hidden mb-5 -mt-1">
                      <img src={blogImage(p.slug)} alt="" aria-hidden="true" width={800} height={340}
                        loading="lazy" className="w-full h-[150px] object-cover zoom-img" />
                    </div>
                    <span
                      className={`self-start type-eyebrow px-2.5 py-1 rounded-full ${
                        i === 0 ? "bg-acid text-ink" : "bg-white text-electric"
                      }`}
                    >
                      {p.cat}
                    </span>

                    <h3
                      className={`mt-5 font-bold text-lg md:text-xl leading-snug tracking-tight ${
                        i === 0 ? "text-white group-hover:text-acid" : "text-ink group-hover:text-electric"
                      } transition-colors`}
                    >
                      {p.title}
                    </h3>

                    <p className={`mt-3 text-sm leading-relaxed flex-1 ${i === 0 ? "text-white/55" : "text-slate"}`}>
                      {p.excerpt}
                    </p>

                    <div
                      className="mt-6 pt-4 border-t flex items-center justify-between gap-4"
                      style={{ borderColor: i === 0 ? "rgba(255,255,255,0.1)" : "rgba(26,33,66,0.09)" }}
                    >
                      <span className={`flex items-center gap-3 text-[0.6875rem] ${i === 0 ? "text-white/40" : "text-slate"}`}>
                        <span className="inline-flex items-center gap-1"><Calendar size={10} /> {p.date}</span>
                        <span className="inline-flex items-center gap-1"><Clock size={10} /> {p.read}</span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className={`shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          i === 0 ? "text-acid" : "text-electric"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All articles — editorial list */}
      <section className="bg-sand py-14 md:py-16 border-y border-ink/[0.07]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="type-heading text-ink mb-8">All articles</h2>
          </Reveal>

          <div className="divide-y divide-ink/[0.09] border-y border-ink/[0.09]">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 30, 300)}>
                <a href={`/blog/${p.slug}/`} className="group block py-5">
                  <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="lg:col-span-2">
                      <span className="type-eyebrow text-electric">{p.cat}</span>
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="font-bold text-ink text-[1.0625rem] leading-snug tracking-tight group-hover:text-electric transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-slate text-[0.875rem] leading-relaxed clamp-2">{p.excerpt}</p>
                    </div>
                    <div className="lg:col-span-3 lg:text-right">
                      <span className="inline-flex items-center gap-3 text-slate text-[0.6875rem]">
                        <span className="inline-flex items-center gap-1"><Calendar size={10} /> {p.date}</span>
                        <span className="inline-flex items-center gap-1"><Clock size={10} /> {p.read}</span>
                        <ChevronRight size={13} className="text-slate-light group-hover:text-electric transition-colors" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
