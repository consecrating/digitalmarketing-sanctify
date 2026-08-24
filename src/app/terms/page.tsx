import type { Metadata } from "next";
import { Bot, ShieldCheck, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for engaging Sanctify — Advertising & Marketing Agency, Goa. Includes our scope of services, payment terms, intellectual property, and disclosure on the use of AI agents in delivery.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/terms/" },
};

const toc = [
  { id: "scope", label: "1. Scope of services" },
  { id: "engagement", label: "2. Engagement & term" },
  { id: "fees", label: "3. Fees & payment" },
  { id: "client", label: "4. Client responsibilities" },
  { id: "ip", label: "5. Intellectual property" },
  { id: "ai", label: "6. Use of AI agents" },
  { id: "results", label: "7. Performance & results" },
  { id: "confidentiality", label: "8. Confidentiality" },
  { id: "liability", label: "9. Limitation of liability" },
  { id: "termination", label: "10. Termination" },
  { id: "law", label: "11. Governing law" },
  { id: "contact", label: "12. Contact" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms &"
        accent="Conditions"
        lede="These terms govern engagements with Sanctify — Advertising & Marketing Agency, operating from Zuarinagar, Goa. Last reviewed August 2026."
        crumbs={[{ href: "/", label: "Home" }, { label: "Terms & Conditions" }]}
        image="/images/office-collab.webp"
        imageAlt="Sanctify team at work"
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="type-eyebrow text-slate-light pb-2.5 mb-3 border-b border-ink/[0.09]">Sections</p>
                <nav aria-label="Terms sections">
                  <ul className="space-y-1">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="group flex items-start gap-2 py-1.5 text-[0.8125rem] text-slate hover:text-ink transition-colors">
                          <span className="w-1 h-1 rounded-full bg-slate-light group-hover:bg-electric transition-colors mt-2 shrink-0" />
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <Reveal>
                <div className="prose-editorial max-w-3xl">
                  <h2 id="scope">1. Scope of services</h2>
                  <p>
                    Sanctify provides advertising and digital marketing services including
                    search engine optimisation, social media marketing, paid media
                    management, web design and development, content production, email
                    marketing, graphic design, video production, reputation management and
                    AI search visibility work. The specific services, deliverables and
                    cadence applicable to your engagement are set out in your individual
                    proposal or statement of work, which takes precedence over any general
                    description on this website.
                  </p>

                  <h2 id="engagement">2. Engagement &amp; term</h2>
                  <p>
                    Retained engagements operate on a rolling monthly basis unless otherwise
                    agreed in writing. Either party may terminate by giving 30 days&apos;
                    written notice. Project-based work is governed by the milestones and
                    delivery dates stated in the applicable proposal. We do not require
                    long-term lock-in contracts.
                  </p>

                  <h2 id="fees">3. Fees &amp; payment</h2>
                  <ul>
                    <li>Fees are as quoted in your proposal and are exclusive of GST, which is charged at the prevailing statutory rate.</li>
                    <li>Retainer fees are invoiced monthly in advance unless otherwise agreed.</li>
                    <li>Third-party costs — advertising spend, software licences, stock media, hosting and domain fees — are billed separately or paid directly by the client, as agreed.</li>
                    <li>Invoices are payable within the period stated on the invoice. We reserve the right to pause delivery on materially overdue accounts, having given prior notice.</li>
                  </ul>

                  <h2 id="client">4. Client responsibilities</h2>
                  <p>
                    Timely delivery depends on your cooperation. You agree to provide
                    necessary access to accounts and platforms, supply requested materials
                    and approvals within reasonable timeframes, and ensure that any content,
                    imagery or data you supply does not infringe third-party rights. Delays
                    in approvals or access may shift agreed timelines.
                  </p>

                  <h2 id="ip">5. Intellectual property</h2>
                  <p>
                    On receipt of full payment, ownership of the final creative deliverables
                    produced specifically for you transfers to you. Sanctify retains
                    ownership of its pre-existing methodologies, internal tooling, templates
                    and frameworks, none of which are exclusive to any client. Unless you ask
                    us in writing not to, we may reference the engagement and display
                    non-confidential work in our portfolio.
                  </p>

                  <h2 id="ai">6. Use of AI agents in service delivery</h2>
                  <p>
                    We consider this disclosure important and want it stated plainly rather
                    than buried.
                  </p>
                  <p>
                    In addition to our human team, Sanctify operates internal
                    <strong> AI agents</strong> as part of routine service delivery. These
                    are automated systems that perform continuous or repetitive analytical
                    work at a scale and frequency that would not be practical manually.
                    Their current functions include competitor and search-results
                    monitoring, scheduled technical site crawling and regression detection,
                    preparation of structured first drafts and schema scaffolding, and
                    repeated testing of how AI assistants describe client businesses.
                  </p>
                  <p>
                    Output produced by these agents can closely resemble work produced by a
                    person. We therefore commit to the following, and you may hold us to it:
                  </p>
                  <ul>
                    <li><strong>Human review is mandatory.</strong> No agent-generated output is delivered to a client, published, or acted upon without review and sign-off by a named member of the human team.</li>
                    <li><strong>Accountability remains human.</strong> Every deliverable has an identified human owner who is responsible for its accuracy and suitability.</li>
                    <li><strong>Agents assist; they do not decide.</strong> Strategy, commercial recommendations, creative direction and client counsel are determined by people.</li>
                    <li><strong>Client data handling.</strong> Client data processed by these systems is handled under the same confidentiality obligations set out in section 8. We do not supply client data to third-party AI providers for the purpose of training their models.</li>
                    <li><strong>Disclosure on request.</strong> If you wish to know which parts of a specific deliverable involved AI assistance, ask and we will tell you.</li>
                    <li><strong>Right to opt out.</strong> If you would prefer that AI agents are not used on your account, tell us in writing and we will accommodate it. This may affect turnaround times on certain monitoring and reporting tasks.</li>
                  </ul>
                  <p>
                    Where we produce content on your behalf, you retain final editorial
                    control and approval regardless of how a draft was prepared.
                  </p>

                  <h2 id="results">7. Performance &amp; results</h2>
                  <p>
                    We commit to the scope, standard of care and effort described in your
                    proposal. We do not guarantee specific search rankings, traffic volumes,
                    lead counts, revenue outcomes, or inclusion in AI-generated answers.
                    These depend on factors outside our control, including search engine and
                    AI platform algorithms — which are proprietary and change without notice
                    — competitor activity, market conditions, and your own pricing, product
                    and service delivery.
                  </p>
                  <p>
                    Any agency guaranteeing fixed rankings or guaranteed AI placement is
                    overstating what is achievable. We will always give you our honest
                    assessment of what is realistic.
                  </p>

                  <h2 id="confidentiality">8. Confidentiality</h2>
                  <p>
                    Each party agrees to keep confidential any non-public information
                    disclosed by the other in the course of the engagement, and to use it
                    only for the purpose of performing or receiving the services. This
                    obligation survives termination. It does not apply to information that
                    is already public, independently developed, or required to be disclosed
                    by law.
                  </p>

                  <h2 id="liability">9. Limitation of liability</h2>
                  <p>
                    To the extent permitted by law, Sanctify&apos;s aggregate liability arising
                    out of or in connection with an engagement is limited to the total fees
                    paid by the client for the services in the three months preceding the
                    event giving rise to the claim. We are not liable for indirect or
                    consequential loss, including loss of profit, revenue, goodwill or
                    anticipated savings. Nothing in these terms excludes liability that
                    cannot lawfully be excluded.
                  </p>

                  <h2 id="termination">10. Termination</h2>
                  <p>
                    Either party may terminate a retained engagement on 30 days&apos; written
                    notice. Work completed and third-party costs incurred up to the effective
                    date of termination remain payable. On termination we will, on request,
                    provide reasonable assistance in transferring account access and handing
                    over final deliverables for which payment has been received.
                  </p>

                  <h2 id="law">11. Governing law</h2>
                  <p>
                    These terms are governed by the laws of India. The courts at Goa have
                    jurisdiction over any dispute arising from them. We will always attempt
                    to resolve concerns directly and in good faith before either party
                    escalates.
                  </p>

                  <h2 id="contact">12. Contact</h2>
                  <p>
                    Questions about these terms can be directed to{" "}
                    <a href="mailto:help@sanctify.in">help@sanctify.in</a> or{" "}
                    <a href="tel:+919923352923">+91 99233 52923</a>.
                  </p>
                  <p>
                    Sanctify — Advertising &amp; Marketing Agency<br />
                    #176/1-A, MES College Road, Bharat Nagar Colony,<br />
                    Zuarinagar, Vasco-da-Gama, Goa 403726, India
                  </p>
                  <p>
                    See also our{" "}
                    <a href="/privacy-policy/">Privacy Policy</a>.
                  </p>
                </div>
              </Reveal>

              {/* AI summary callout */}
              <Reveal>
                <div className="mt-12 bg-ink rounded-2xl p-7 grain relative overflow-hidden">
                  <div className="absolute inset-0 field-dots-light opacity-50" aria-hidden="true" />
                  <div className="relative z-10">
                    <p className="inline-flex items-center gap-2 type-eyebrow text-acid">
                      <Bot size={12} /> Section 6 at a glance
                    </p>
                    <p className="mt-3 font-bold text-white text-lg leading-snug">
                      We use AI agents. A human signs off everything.
                    </p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                      {[
                        "No unreviewed AI output reaches you",
                        "A named human owns every deliverable",
                        "Agents analyse — people decide strategy",
                        "You can opt out in writing at any time",
                      ].map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-white/70 text-[0.8125rem]">
                          <Check size={13} className="text-acid shrink-0 mt-0.5" strokeWidth={2.5} />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 pt-4 border-t border-white/[0.09] inline-flex items-center gap-2 text-white/40 text-xs">
                      <ShieldCheck size={12} /> Read more about the team on our{" "}
                      <a href="/about/#team" className="text-acid font-semibold">About page</a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
