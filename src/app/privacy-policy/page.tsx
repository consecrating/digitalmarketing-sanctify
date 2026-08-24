import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sanctify — Advertising & Marketing Agency, Goa collects, uses, stores and protects personal information, including our position on AI processing and your rights.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/privacy-policy/" },
};

const toc = [
  { id: "collect", label: "1. What we collect" },
  { id: "use", label: "2. How we use it" },
  { id: "basis", label: "3. Lawful basis" },
  { id: "sharing", label: "4. Sharing & processors" },
  { id: "ai", label: "5. AI processing" },
  { id: "cookies", label: "6. Cookies & analytics" },
  { id: "retention", label: "7. Retention" },
  { id: "security", label: "8. Security" },
  { id: "rights", label: "9. Your rights" },
  { id: "contact", label: "10. Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="Policy"
        lede="How Sanctify collects, uses and protects personal information. Last reviewed August 2026."
        crumbs={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="type-eyebrow text-slate-light pb-2.5 mb-3 border-b border-ink/[0.09]">Sections</p>
                <nav aria-label="Privacy sections">
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
                  <p>
                    This policy explains what personal information Sanctify — Advertising
                    &amp; Marketing Agency collects, why we collect it, and what you can ask
                    us to do with it. We have tried to write it in plain language.
                  </p>

                  <h2 id="collect">1. What we collect</h2>
                  <ul>
                    <li><strong>Enquiry details</strong> — name, business name, email address, telephone number, website URL, and the content of your message when you contact us.</li>
                    <li><strong>Client engagement data</strong> — information necessary to deliver contracted services, which may include access to your marketing platforms and analytics accounts.</li>
                    <li><strong>Technical data</strong> — standard server log information such as IP address, browser type and pages requested, generated automatically when you visit this site.</li>
                    <li><strong>Correspondence</strong> — records of communication between us.</li>
                  </ul>
                  <p>
                    We do not knowingly collect information from children, and we do not
                    collect special category personal data through this website.
                  </p>

                  <h2 id="use">2. How we use it</h2>
                  <ul>
                    <li>To respond to your enquiry and prepare any requested audit or proposal.</li>
                    <li>To deliver, administer and report on contracted services.</li>
                    <li>To send service-related communication relating to an active engagement.</li>
                    <li>To send marketing communication only where you have opted in, with an unsubscribe option in every message.</li>
                    <li>To maintain records required for accounting and legal compliance.</li>
                  </ul>
                  <p>We do not sell personal information.</p>

                  <h2 id="basis">3. Lawful basis</h2>
                  <p>
                    We process personal information on the basis of your consent (for
                    enquiries and marketing), performance of a contract (for client
                    delivery), our legitimate interests in operating and improving the
                    business, and compliance with legal obligations.
                  </p>

                  <h2 id="sharing">4. Sharing &amp; processors</h2>
                  <p>
                    We do not share personal information with third parties except where
                    necessary to operate. This includes reputable service providers acting as
                    processors on our behalf — for example hosting, email delivery, analytics
                    and advertising platforms — and professional advisers or authorities where
                    required by law. Processors are permitted to use the information only for
                    the purpose we specify.
                  </p>
                  <p>
                    Some of these providers operate outside India. Where information is
                    transferred internationally, we take reasonable steps to ensure it
                    remains appropriately protected.
                  </p>

                  <h2 id="ai">5. AI processing</h2>
                  <p>
                    As disclosed in our{" "}
                    <a href="/terms/#ai">Terms &amp; Conditions</a>, we use internal AI
                    agents in service delivery for analytical and drafting tasks. Where
                    client data is processed by these systems:
                  </p>
                  <ul>
                    <li>It is handled under the same confidentiality obligations as all other client information.</li>
                    <li>We do not provide client data to third-party AI providers for the purpose of training their models.</li>
                    <li>Output is reviewed by a named human before use.</li>
                    <li>You may ask us in writing not to use AI agents on your account.</li>
                  </ul>

                  <h2 id="cookies">6. Cookies &amp; analytics</h2>
                  <p>
                    This site may use cookies and similar technologies to understand how
                    pages are used and to improve the experience. You can refuse or delete
                    cookies through your browser settings; some site features may not
                    function as intended if you do. Where we use third-party analytics or
                    advertising tools, those providers process data under their own privacy
                    terms.
                  </p>

                  <h2 id="retention">7. Retention</h2>
                  <p>
                    We keep personal information only as long as needed for the purpose it
                    was collected, or as required for legal, tax and accounting obligations.
                    Enquiry records for prospects that do not proceed are removed once they
                    no longer serve a business purpose.
                  </p>

                  <h2 id="security">8. Security</h2>
                  <p>
                    We apply reasonable technical and organisational measures to protect
                    personal information, including access controls and encrypted transport.
                    No system is completely secure, and we cannot guarantee absolute
                    security, but we take the obligation seriously and will notify affected
                    parties of any material breach as required.
                  </p>

                  <h2 id="rights">9. Your rights</h2>
                  <p>Subject to applicable law, you may ask us to:</p>
                  <ul>
                    <li>Confirm what personal information we hold about you and provide a copy.</li>
                    <li>Correct information that is inaccurate or incomplete.</li>
                    <li>Delete information where we have no continuing lawful basis to retain it.</li>
                    <li>Withdraw consent to marketing communication at any time.</li>
                    <li>Restrict or object to certain processing.</li>
                  </ul>
                  <p>
                    To exercise any of these, email{" "}
                    <a href="mailto:help@sanctify.in">help@sanctify.in</a>. We will respond
                    within a reasonable period and may need to verify your identity first.
                  </p>

                  <h2 id="contact">10. Contact</h2>
                  <p>
                    Sanctify — Advertising &amp; Marketing Agency<br />
                    #176/1-A, MES College Road, Bharat Nagar Colony,<br />
                    Zuarinagar, Vasco-da-Gama, Goa 403726, India<br />
                    <a href="mailto:help@sanctify.in">help@sanctify.in</a> ·{" "}
                    <a href="tel:+919923352923">+91 99233 52923</a>
                  </p>
                  <p>
                    We may update this policy from time to time. The review date at the top
                    of this page indicates when it was last changed.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
