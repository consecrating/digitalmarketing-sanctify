import type { Metadata } from "next";
import { ArrowUpRight, Check, MapPin, Phone, Bot, Users, ShieldCheck } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal, Counter } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Sanctify — Digital Marketing Agency in Goa Since 2012",
  description:
    "Sanctify is an independent advertising and digital marketing agency operating from South Goa since 2012. Founded by Punit Sahay. 200+ projects, rated 4.8/5 from 128 reviews. Offices in Goa, Varanasi and Italy.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/about/" },
};

/* Human team — replace `photo` with real headshot paths when available */
const team = [
  { name: "Priya Sharma", role: "Head of SEO", focus: "Technical audits, local search", photo: "/images/team-01.webp" },
  { name: "Ananya Desai", role: "Social Media Director", focus: "Channel strategy, community", photo: "/images/team-02.webp" },
  { name: "Sneha Kulkarni", role: "Content Strategist", focus: "Editorial planning, topical depth", photo: "/images/team-03.webp" },
  { name: "Kavya Naik", role: "Google Ads Specialist", focus: "Search, PMax, bid strategy", photo: "/images/team-04.webp" },
  { name: "Isha Patil", role: "UI/UX Designer", focus: "Interface design, conversion flows", photo: "/images/team-05.webp" },
  { name: "Neha Bhatt", role: "Graphic Designer", focus: "Brand systems, campaign creative", photo: "/images/team-06.webp" },
  { name: "Riya Fernandes", role: "Social Media Manager", focus: "Publishing, engagement", photo: "/images/team-07.webp" },
  { name: "Tanvi Gawas", role: "Web Developer", focus: "Front-end build, Core Web Vitals", photo: "/images/team-08.webp" },
  { name: "Divya Kamat", role: "Email Marketing Lead", focus: "Lifecycle flows, automation", photo: "/images/team-09.webp" },
  { name: "Meera Shetty", role: "AI & Analytics Lead", focus: "Measurement, AI visibility", photo: "/images/team-10.webp" },
  { name: "Aisha Verma", role: "Client Success Manager", focus: "Account management, reporting", photo: "/images/team-11.webp" },
];

const aiAgents = [
  { name: "Research Agent", role: "Market & competitor intelligence", focus: "Continuous SERP monitoring, competitor change detection" },
  { name: "Content Agent", role: "Drafting & structuring", focus: "First drafts and schema scaffolding for human editing" },
  { name: "Audit Agent", role: "Technical crawling", focus: "Scheduled site crawls, regression alerts" },
  { name: "Visibility Agent", role: "AI-surface testing", focus: "Prompt-set testing across assistants, citation logging" },
];

const principles = [
  { n: "01", t: "Integrated, not fragmented", d: "One team carries brand, search, social and paid. No handoffs between agencies, no conflicting strategies." },
  { n: "02", t: "Research before spend", d: "Every engagement opens with market, competitor and query intelligence — so budget follows evidence." },
  { n: "03", t: "Local depth, national standard", d: "We understand Goa's seasonality and its visitor-versus-resident split, applied to national-standard practice." },
  { n: "04", t: "Reporting you can audit", d: "Dashboard access, plain-language monthly reviews, and metrics tied to enquiries rather than impressions." },
];

const offices = [
  { tag: "Head Office", city: "Goa, India", lines: ["#176/1-A, MES College Road,", "Bharat Nagar Colony, Zuarinagar,", "Vasco-da-Gama, Goa 403726"], phone: "+91 99233 52923", tel: "+919923352923" },
  { tag: "Contact Point", city: "Varanasi, India", lines: ["D-50/35 BN, Dalmandi Road,", "Kazipura Kalan, Purani Adaalat,", "Varanasi, UP 221001"], phone: "+91 99233 52923", tel: "+919923352923" },
  { tag: "Contact Point", city: "Fontanella, Italy", lines: ["Pran's Food snc,", "Via Circonvallazione 868,", "24056 Fontanella, Italy"], phone: "+39 320 805 8390", tel: "+393208058390" },
];

function Avatar({ photo, name }: { photo: string; name: string }) {
  return (
    <span className="block w-full aspect-square rounded-xl overflow-hidden bg-sand-dark">
      <img
        src={photo}
        alt={`Portrait of ${name}`}
        width={320}
        height={320}
        loading="lazy"
        className="w-full h-full object-cover zoom-img"
      />
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An independent agency,"
        accent="built in Goa."
        lede="Sanctify was founded in 2012 on a straightforward conviction: businesses in Goa deserved advertising and digital marketing built to a national standard. Fourteen years and 200+ projects later, that remains the operating principle."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        image="/images/office-collab.webp"
        imageAlt="Sanctify strategists reviewing campaign performance together"
        meta={
          <FactGrid
            items={[
              { k: "Founded", v: "2012 · 14+ years" },
              { k: "Projects delivered", v: "200+" },
              { k: "Client rating", v: "4.8 / 5" },
              { k: "Disciplines in-house", v: "15+" },
            ]}
          />
        }
      />

      {/* Counters */}
      <section className="bg-acid py-14 border-b border-ink/10">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { to: 14, suffix: "+", label: "Years operating", detail: "Founded in South Goa, 2012" },
              { to: 200, suffix: "+", label: "Projects delivered", detail: "Across 15 sectors" },
              { to: 4.8, decimals: 1, label: "Average rating", detail: "From 128 verified reviews" },
              { to: 11, label: "Specialists in-house", detail: "Plus 4 AI agents" },
            ].map((s, i) => (
              <div key={s.label} className={i < 3 ? "lg:border-r lg:border-ink/15 lg:pr-6" : ""}>
                <p className="font-black text-ink text-4xl md:text-5xl lg:text-6xl leading-none tracking-tighter">
                  <Counter to={s.to} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-3 font-bold text-ink text-sm">{s.label}</p>
                <p className="mt-1 text-ink/55 text-xs">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="prose-editorial max-w-2xl">
                  <h2>How we got here</h2>
                  <p>
                    Sanctify — the word means sacred — began in 2012 as a boutique studio in
                    South Goa. The founding view was that local businesses were being
                    offered a lower standard of marketing than their national counterparts,
                    and that the gap was one of practice rather than talent.
                  </p>
                  <p>
                    Over fourteen years the agency has grown into a full-service team
                    covering brand, search, social, paid media, design and development. What
                    has not changed is the structure: one accountable team, working in-house,
                    with the founder still involved in the work.
                  </p>
                  <p>
                    We unite storytelling, design, technology and performance marketing into
                    a single strategy. From websites and search optimisation through to
                    social, paid advertising and AI-search visibility, every discipline works
                    toward the same objective — turning visibility into commercial results.
                  </p>

                  <h2>How we operate</h2>
                  <p>
                    Complete transparency and a dedicated in-house team. No hidden
                    subcontracting, no fragmented handoffs, no reporting designed to
                    flatter. Engagements run on rolling monthly terms with 30 days&apos;
                    notice — clients stay because the numbers justify it.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Founder */}
            <div className="lg:col-span-5">
              <Reveal dir="left">
                <div className="bg-sand rounded-2xl p-7">
                  <p className="type-eyebrow text-slate-light">Leadership</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="w-14 h-14 rounded-xl bg-ink text-acid grid place-items-center font-black text-lg shrink-0">
                      PS
                    </span>
                    <div>
                      <p className="font-bold text-ink text-base">Punit Sahay</p>
                      <p className="text-slate text-[0.8125rem]">Founder &amp; Proprietor</p>
                    </div>
                  </div>
                  <p className="mt-5 text-slate text-[0.9375rem] leading-relaxed">
                    Punit founded Sanctify in 2012 and continues to lead it hands-on,
                    pairing a strategist&apos;s discipline with close attention to craft.
                  </p>
                  <blockquote className="mt-5 pt-5 border-t border-ink/[0.1] text-ink/85 text-[0.9375rem] leading-relaxed italic">
                    &ldquo;Do great work, stay transparent, and treat every client&apos;s growth as
                    your own. That has not changed in fourteen years.&rdquo;
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-sand py-16 md:py-20 border-y border-ink/[0.07]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="type-eyebrow text-electric">Operating principles</p>
            <h2 className="mt-3 type-display text-ink max-w-2xl">
              Four commitments
              <br />
              <span className="type-accent-italic text-slate">we hold to.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="h-full bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                  <span className="font-black text-3xl text-electric/25 leading-none">{p.n}</span>
                  <h3 className="mt-3 font-bold text-ink text-base">{p.t}</h3>
                  <p className="mt-2 text-slate text-sm leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="type-eyebrow text-electric inline-flex items-center gap-1.5">
                  <Users size={11} /> The team
                </p>
                <h2 className="mt-3 type-display text-ink">
                  Eleven specialists.
                  <br />
                  <span className="type-accent-italic text-slate">One accountable team.</span>
                </h2>
              </div>
              <p className="text-slate text-[0.9375rem] leading-relaxed max-w-sm">
                Every discipline sits in-house. The people who plan your strategy are the
                people who execute it.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 45}>
                <figure className="group bg-white edge-soft rounded-2xl p-4 lift hover:border-ink/20 h-full">
                  <Avatar photo={m.photo} name={m.name} />
                  <figcaption className="mt-3.5">
                    <p className="font-bold text-ink text-[0.8125rem] leading-tight">{m.name}</p>
                    <p className="text-electric text-[0.6875rem] font-semibold mt-1">{m.role}</p>
                    <p className="text-slate text-[0.625rem] mt-1.5 leading-snug">{m.focus}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-slate-light text-[0.6875rem] leading-relaxed max-w-2xl">
            Team imagery is representative. Names, roles and areas of focus reflect the
            actual team structure.
          </p>
        </div>
      </section>

      {/* AI agents — honest disclosure */}
      <section className="bg-ink py-16 md:py-20 grain relative overflow-hidden">
        <div className="absolute inset-0 field-grid-light opacity-60" aria-hidden="true" />
        <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="type-eyebrow text-acid inline-flex items-center gap-1.5">
                  <Bot size={11} /> Augmented delivery
                </p>
                <h2 className="mt-3 type-display text-white">
                  Our team includes
                  <br />
                  <span className="type-accent-italic text-electric-light">AI agents.</span>
                </h2>
                <p className="mt-5 text-white/60 text-base leading-relaxed">
                  Alongside our eleven specialists, we operate a set of internal AI agents
                  that handle continuous, repetitive analysis at a scale and cadence humans
                  cannot sustain — monitoring competitor movement, crawling for technical
                  regressions, drafting structured content, and testing how assistants
                  describe our clients.
                </p>
                <p className="mt-4 text-white/60 text-base leading-relaxed">
                  These agents produce work that closely resembles human output, and we
                  think you should know where the line sits. Every agent output is reviewed,
                  edited and signed off by a named member of the human team before it
                  reaches a client or is published. Strategy, judgement and accountability
                  remain human.
                </p>

                <div className="mt-7 border border-white/[0.12] bg-white/[0.04] rounded-xl p-5">
                  <p className="inline-flex items-center gap-2 type-eyebrow text-acid">
                    <ShieldCheck size={12} /> Our commitment
                  </p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "No AI output reaches a client unreviewed",
                      "A named human owns every deliverable",
                      "Agents assist analysis — they do not set strategy",
                      "Disclosed in our Terms & Conditions",
                    ].map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-white/70 text-[0.8125rem]">
                        <Check size={13} className="text-acid shrink-0 mt-0.5" strokeWidth={2.5} />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a href="/terms/" className="mt-4 inline-flex items-center gap-1.5 text-acid font-bold text-xs">
                    Read the disclosure <ArrowUpRight size={13} />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {aiAgents.map((a, i) => (
                  <Reveal key={a.name} delay={i * 80}>
                    <div className="h-full border border-white/[0.11] bg-white/[0.04] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                      <span className="w-10 h-10 rounded-xl bg-acid text-ink grid place-items-center mb-4">
                        <Bot size={18} />
                      </span>
                      <p className="font-bold text-white text-base">{a.name}</p>
                      <p className="text-electric-light text-[0.75rem] font-semibold mt-1">{a.role}</p>
                      <p className="text-white/50 text-[0.8125rem] mt-2.5 leading-relaxed">{a.focus}</p>
                      <p className="mt-4 pt-3.5 border-t border-white/[0.09] type-eyebrow text-white/30">
                        Human-reviewed
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-sand py-16 md:py-20 border-t border-ink/[0.07]">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="type-eyebrow text-electric">Locations</p>
            <h2 className="mt-3 type-display text-ink">Where to find us</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 80}>
                <div className="h-full bg-white edge-soft rounded-2xl p-6">
                  <p className="type-eyebrow text-slate-light">{o.tag}</p>
                  <p className="mt-2 font-bold text-ink text-base inline-flex items-center gap-2">
                    <MapPin size={14} className="text-electric" /> {o.city}
                  </p>
                  <address className="mt-3 not-italic text-slate text-[0.8125rem] leading-relaxed">
                    {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
                  </address>
                  <a href={`tel:${o.tel}`} className="mt-3 inline-flex items-center gap-1.5 text-ink font-semibold text-[0.8125rem] sweep">
                    <Phone size={12} /> {o.phone}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
