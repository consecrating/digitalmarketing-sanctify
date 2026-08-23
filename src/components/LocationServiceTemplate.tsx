"use client";
import { ArrowRight, Phone, MapPin, CheckCircle } from "lucide-react";

interface Props {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  locationSlug: string;
  area: string;
  keyword: string;
}

export function LocationServiceTemplate({ serviceName, serviceSlug, locationName, locationSlug, area, keyword }: Props) {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-white/50 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li><li>/</li>
                <li><a href={`/${serviceSlug}/`} className="hover:text-white">{serviceName}</a></li><li>/</li>
                <li className="text-white/80">{locationName}</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              {serviceName} in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">{locationName}, Goa</span>
            </h1>
            <div className="mt-4 flex items-center gap-2 text-white/50 text-sm">
              <MapPin size={14} /><span>{area} · Serving {locationName} &amp; surrounding areas</span>
            </div>
            <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-2xl">
              Looking for professional {serviceName.toLowerCase()} in {locationName}? Sanctify is {area}&apos;s trusted digital marketing agency providing expert {serviceName.toLowerCase()} services to businesses in {locationName} and surrounding areas since 2012.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark px-7 py-4 rounded-xl font-bold transition-all">
                Get Free Quote <ArrowRight size={18} />
              </a>
              <a href="tel:+919923352923" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-xl font-bold transition-all">
                <Phone size={18} /> +91 9923352923
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>Best {serviceName} Agency in {locationName}, Goa</h2>
          <p>Sanctify is the leading provider of <strong>{serviceName.toLowerCase()} in {locationName}</strong>, {area}. With over 12 years of experience and 200+ successful projects, we help businesses in {locationName} achieve measurable digital growth through data-driven strategies and expert execution.</p>
          <p>Whether you&apos;re a hotel near {locationName} beach, a restaurant in {locationName} market, a real estate firm, or any local business — our team understands the {locationName} market dynamics and creates customized {serviceName.toLowerCase()} strategies that deliver results.</p>

          <h2>Why Businesses in {locationName} Choose Sanctify</h2>
          <ul>
            <li><strong>Local Market Knowledge</strong> — We understand {locationName}&apos;s business landscape, customer demographics, and competitive environment</li>
            <li><strong>Proven Track Record</strong> — 200+ projects delivered with 4.8/5 rating from 128+ reviews</li>
            <li><strong>Full-Service Agency</strong> — SEO, social media, Google Ads, web design, and AI marketing under one roof</li>
            <li><strong>Transparent Pricing</strong> — Clear packages with no hidden costs. Monthly reporting with measurable KPIs</li>
            <li><strong>Dedicated Support</strong> — Personal account manager for your business. Quick response times</li>
          </ul>

          <h2>Our {serviceName} Services in {locationName}</h2>
          <p>We offer comprehensive {serviceName.toLowerCase()} solutions tailored for {locationName} businesses:</p>
          <ul>
            <li>Complete {serviceName.toLowerCase()} strategy customized for your {locationName}-based business</li>
            <li>Competitor analysis of other businesses in {locationName} and {area}</li>
            <li>Monthly performance reports with actionable recommendations</li>
            <li>Dedicated account manager who understands {locationName}&apos;s market</li>
            <li>Flexible packages starting from ₹15,000/month</li>
          </ul>

          <h2>Industries We Serve in {locationName}</h2>
          <p>Our {serviceName.toLowerCase()} expertise in {locationName} covers:</p>
          <ul>
            <li>Hotels, Resorts & Homestays in {locationName}</li>
            <li>Restaurants, Cafes & Bars near {locationName}</li>
            <li>Real Estate & Property firms in {area}</li>
            <li>Retail shops & boutiques in {locationName}</li>
            <li>Healthcare clinics & hospitals</li>
            <li>Education institutes & coaching centers</li>
            <li>Tourism & activity providers</li>
          </ul>

          <h2>Get {serviceName} in {locationName} — Free Consultation</h2>
          <p>Ready to grow your {locationName} business with expert {serviceName.toLowerCase()}? Sanctify offers a free consultation where we&apos;ll analyze your current digital presence and recommend a custom strategy.</p>
          <p><strong>Contact us today:</strong></p>
          <ul>
            <li>📞 Call: <a href="tel:+919923352923">+91 9923352923</a></li>
            <li>📧 Email: <a href="mailto:help@sanctify.in">help@sanctify.in</a></li>
            <li>📍 Office: #176/1-A, MES College Road, Zuarinagar, Goa 403726</li>
            <li>🌐 <a href="/contact/">Fill our inquiry form →</a></li>
          </ul>

          <h2>Other Services We Offer in {locationName}</h2>
          <p>Beyond {serviceName.toLowerCase()}, we provide complete digital marketing solutions in {locationName}:</p>
          <p>
            <a href="/seo-services/">SEO</a> · <a href="/social-media-marketing/">Social Media</a> · <a href="/web-design/">Web Design</a> · <a href="/google-ads/">Google Ads</a> · <a href="/content-marketing/">Content Marketing</a> · <a href="/ai-marketing/">AI Marketing</a> · <a href="/email-marketing/">Email Marketing</a> · <a href="/graphic-design/">Graphic Design</a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">{serviceName} in {locationName} — Get Started Today</h2>
          <p className="mt-4 text-white/70 text-lg">Free consultation for {locationName} businesses. No obligations.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all">Get Free Proposal</a>
            <a href="tel:+919923352923" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">Call +91 9923352923</a>
          </div>
        </div>
      </section>
    </>
  );
}
