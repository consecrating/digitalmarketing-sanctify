"use client";
import { Award, TrendingUp, Users, Zap, MapPin, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Award, title: "8+ Years in Digital Marketing", desc: "Since 2016, we've been helping Goa businesses grow online with proven digital strategies." },
  { icon: TrendingUp, title: "Data-Driven Results", desc: "Every campaign is backed by analytics. We track ROI, conversions, and growth metrics religiously." },
  { icon: Users, title: "200+ Happy Clients", desc: "From startups to established brands across Goa — hotels, restaurants, real estate, and more." },
  { icon: Zap, title: "AI-First Approach", desc: "We leverage AI tools for content creation, ad optimization, and predictive analytics — staying ahead of the curve." },
  { icon: MapPin, title: "Goa-Local Expertise", desc: "We understand the Goan market — tourism seasonality, local audiences, and what works here." },
  { icon: ShieldCheck, title: "Transparent Reporting", desc: "Monthly reports with clear KPIs. No vanity metrics — only numbers that matter to your business." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-sm font-semibold">Why Businesses in Goa Choose Sanctify</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight">
              The Best <span className="text-primary">Digital Marketing Company</span> in Goa
            </h2>
            <p className="mt-6 text-gray text-base md:text-lg leading-relaxed">
              Sanctify is not just another digital marketing agency — we&apos;re your growth partner. Based in Zuarinagar, Goa, we combine deep local market knowledge with cutting-edge digital expertise to deliver measurable results for businesses across Panaji, Margao, Mapusa, Vasco, Calangute, and beyond.
            </p>
            <p className="mt-4 text-gray text-base leading-relaxed">
              As a full-service <strong className="text-dark">digital marketing agency in Goa</strong>, we handle everything from SEO and social media to paid ads and AI-powered marketing — so you can focus on running your business while we focus on growing it.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-primary">
              Start Growing Today
            </a>
          </div>

          {/* Right - reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover-lift transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                  <r.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-dark font-bold text-sm mb-1">{r.title}</h3>
                <p className="text-gray text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
