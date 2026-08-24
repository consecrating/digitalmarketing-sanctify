import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Check, Mail } from "lucide-react";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Careers at Sanctify — Digital Marketing Roles in Goa",
  description:
    "Open roles at Sanctify, an independent digital marketing agency in Goa operating since 2012. SEO, paid media, content, design and development positions. Based in Zuarinagar.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/careers/" },
};

const roles = [
  { title: "SEO Specialist", type: "Full-time · Goa", exp: "2+ years", desc: "Technical audits, local search, content briefs and reporting across a portfolio of client accounts." },
  { title: "Paid Media Executive", type: "Full-time · Goa", exp: "1–3 years", desc: "Google Ads and Meta campaign build, optimisation and reporting. Comfortable with spreadsheets and attribution." },
  { title: "Content Writer", type: "Full-time · Goa", exp: "1+ years", desc: "Research-led writing for search and AI surfaces. Strong English, willing to learn technical SEO structure." },
  { title: "Graphic Designer", type: "Full-time · Goa", exp: "2+ years", desc: "Brand and campaign creative across digital and print. Portfolio required." },
  { title: "Front-end Developer", type: "Full-time · Goa", exp: "2+ years", desc: "React or Next.js build work with a genuine interest in performance and accessibility." },
  { title: "Social Media Executive", type: "Full-time · Goa", exp: "1+ years", desc: "Publishing, community management and reporting across client channels." },
];

const whatWeOffer = [
  "In-house team — you work on the strategy you execute",
  "Direct client exposure rather than layers of account management",
  "Training budget and time for certifications",
  "Modern tooling, including AI-assisted workflows",
  "Named ownership of your work",
  "Based in Zuarinagar, Goa",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career,"
        accent="not just a CV."
        lede="Sanctify has operated from South Goa since 2012. We hire people who want ownership of their work and direct client contact rather than layers of process between them and the outcome."
        crumbs={[{ href: "/", label: "Home" }, { label: "Careers" }]}
        image="/images/hero-team.webp"
        imageAlt="The Sanctify team collaborating in the Goa office"
        meta={
          <FactGrid
            items={[
              { k: "Location", v: "Zuarinagar, Goa" },
              { k: "Team size", v: "11 specialists" },
              { k: "Operating since", v: "2012 · 14+ years" },
              { k: "Open roles", v: "6" },
            ]}
          />
        }
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="type-eyebrow text-electric">Open positions</p>
                <h2 className="mt-3 type-display text-ink">Currently hiring</h2>
              </Reveal>

              <div className="mt-10 space-y-3">
                {roles.map((r, i) => (
                  <Reveal key={r.title} delay={i * 70}>
                    <article className="group bg-white edge-soft rounded-2xl p-6 lift hover:border-ink/20">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-ink text-lg tracking-tight">{r.title}</h3>
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-slate text-xs">
                            <span className="inline-flex items-center gap-1.5"><MapPin size={11} /> {r.type}</span>
                            <span>{r.exp} experience</span>
                          </div>
                        </div>
                        <a
                          href="mailto:help@sanctify.in?subject=Application%20-%20"
                          className="inline-flex items-center gap-1.5 bg-ink hover:bg-electric text-white px-4 py-2.5 rounded-[6px] font-semibold text-[0.75rem] transition-colors shrink-0"
                        >
                          Apply <ArrowUpRight size={13} />
                        </a>
                      </div>
                      <p className="mt-3 text-slate text-sm leading-relaxed max-w-2xl">{r.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="mt-10 prose-editorial max-w-3xl">
                  <h2>How to apply</h2>
                  <p>
                    Email your CV to{" "}
                    <a href="mailto:help@sanctify.in">help@sanctify.in</a> with the role
                    name in the subject line. Include links to work where relevant — for
                    design and development roles a portfolio or repository matters more than
                    the CV itself.
                  </p>
                  <p>
                    We read every application. If your experience does not match a listed
                    role but you think you would add something, write anyway and explain
                    what.
                  </p>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="bg-sand rounded-2xl p-6">
                  <p className="type-eyebrow text-slate-light mb-3.5">What we offer</p>
                  <ul className="space-y-2.5">
                    {whatWeOffer.map((w) => (
                      <li key={w} className="flex items-start gap-2.5 text-[0.8125rem] text-ink/80 leading-relaxed">
                        <Check size={14} className="text-electric shrink-0 mt-0.5" strokeWidth={2.5} />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-ink rounded-2xl p-6 grain relative overflow-hidden">
                  <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />
                  <div className="relative z-10">
                    <p className="type-eyebrow text-acid">Speculative applications</p>
                    <p className="mt-2 text-white/60 text-sm leading-relaxed">
                      No suitable role listed? We keep strong applications on file and
                      revisit them when something opens.
                    </p>
                    <a
                      href="mailto:help@sanctify.in?subject=Speculative%20application"
                      className="mt-4 inline-flex items-center gap-2 bg-acid text-ink px-5 py-3 rounded-[6px] font-bold text-sm hover:bg-white transition-colors"
                    >
                      <Mail size={15} /> Email us
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
