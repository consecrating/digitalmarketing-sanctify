"use client";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

interface Props {
  title: string;
  keyword: string;
  description: string;
  slug: string;
}

export function ServicePageTemplate({ title, keyword, description, slug }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-white/50 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
                <li className="text-white/80">{title}</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              {title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">in Goa</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark px-7 py-4 rounded-xl font-bold transition-all">
                Get Free Consultation <ArrowRight size={18} />
              </a>
              <a href="tel:+919923352923" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-xl font-bold transition-all">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>Why Your Goa Business Needs Professional {title}</h2>
          <p>In the competitive Goa market, businesses that invest in professional <strong>{keyword}</strong> services gain a significant advantage. With over 12 years of experience, Sanctify has helped 200+ businesses across Panaji, Margao, Mapusa, Vasco da Gama, and all of Goa achieve measurable growth through expert {title.toLowerCase()} strategies.</p>
          <p>{description} Our data-driven approach ensures every rupee you invest generates measurable returns — no vanity metrics, only business growth.</p>

          <h2>Our {title} Process</h2>
          <ul>
            <li><strong>Discovery & Audit</strong> — We analyze your current digital presence, competitor landscape, and market opportunities specific to Goa.</li>
            <li><strong>Strategy Development</strong> — Custom strategy aligned with your business goals, budget, and target audience in Goa.</li>
            <li><strong>Implementation</strong> — Expert execution by our in-house team of specialists — no outsourcing, no shortcuts.</li>
            <li><strong>Monitoring & Optimization</strong> — Continuous performance tracking with weekly optimizations for maximum ROI.</li>
            <li><strong>Reporting & Insights</strong> — Transparent monthly reports with clear KPIs, insights, and recommendations.</li>
          </ul>

          <h2>Why Choose Sanctify for {title} in Goa?</h2>
          <p>Sanctify stands apart as Goa&apos;s most trusted <strong>{keyword}</strong> partner. Here&apos;s what makes us different:</p>
          <ul>
            <li>✓ <strong>12+ years of proven results</strong> in the Goa market since 2012</li>
            <li>✓ <strong>200+ successful projects</strong> delivered across diverse industries</li>
            <li>✓ <strong>In-house expert team</strong> — no freelancers, no outsourcing</li>
            <li>✓ <strong>Data-driven approach</strong> with transparent monthly reporting</li>
            <li>✓ <strong>Local expertise</strong> — we understand Goa&apos;s unique market dynamics</li>
            <li>✓ <strong>AI-first methodology</strong> — leveraging latest technology for superior results</li>
            <li>✓ <strong>No long-term contracts</strong> — our results speak for themselves</li>
            <li>✓ <strong>Rated 4.8/5</strong> from 128+ client reviews</li>
          </ul>

          <h2>Industries We Serve with {title} in Goa</h2>
          <p>Our {title.toLowerCase()} expertise spans across Goa&apos;s key sectors:</p>
          <ul>
            <li><strong>Hotels & Hospitality</strong> — <a href="/digital-marketing-for-hotels-resorts/">Hotel digital marketing →</a></li>
            <li><strong>Restaurants & Cafes</strong> — <a href="/digital-marketing-for-restaurants-cafes/">Restaurant marketing →</a></li>
            <li><strong>Real Estate</strong> — <a href="/digital-marketing-for-real-estate/">Real estate marketing →</a></li>
            <li><strong>Healthcare</strong> — <a href="/digital-marketing-for-healthcare/">Healthcare marketing →</a></li>
            <li><strong>Tourism & Travel</strong> — <a href="/digital-marketing-for-tourism/">Tourism marketing →</a></li>
            <li><strong>Education</strong> — <a href="/digital-marketing-for-education/">Education marketing →</a></li>
            <li><strong>Retail & E-commerce</strong> — <a href="/digital-marketing-for-retail/">Retail marketing →</a></li>
          </ul>

          <h2>Service Areas in Goa</h2>
          <p>We provide {title.toLowerCase()} services across all of Goa including:</p>
          <p><a href={`/${slug}-in-panaji/`}>Panaji</a> · <a href={`/${slug}-in-margao/`}>Margao</a> · <a href={`/${slug}-in-mapusa/`}>Mapusa</a> · <a href={`/${slug}-in-vasco/`}>Vasco</a> · <a href={`/${slug}-in-calangute/`}>Calangute</a> · <a href={`/${slug}-in-porvorim/`}>Porvorim</a> · <a href={`/${slug}-in-ponda/`}>Ponda</a> · <a href={`/${slug}-in-candolim/`}>Candolim</a> · <a href={`/${slug}-in-anjuna/`}>Anjuna</a> · <a href={`/${slug}-in-old-goa/`}>Old Goa</a></p>

          <h2>Get Started with {title} Today</h2>
          <p>Ready to grow your business with professional {title.toLowerCase()} in Goa? Contact Sanctify for a free consultation and custom strategy proposal. Call <a href="tel:+919923352923">+91 9923352923</a> or <a href="/contact/">fill our inquiry form</a>.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">Ready to Grow with Expert {title}?</h2>
          <p className="mt-4 text-white/70 text-lg">Get a free consultation and custom strategy for your Goa business</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all">Get Free Proposal</a>
            <a href="tel:+919923352923" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Call +91 9923352923</a>
          </div>
        </div>
      </section>
    </>
  );
}
