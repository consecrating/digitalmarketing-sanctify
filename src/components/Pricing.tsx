"use client";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "/month",
    desc: "Perfect for small businesses starting their digital journey in Goa",
    popular: false,
    features: [
      "Social Media Management (2 platforms)",
      "8 Posts per month",
      "Basic SEO Audit",
      "Google Business Profile Setup",
      "Monthly Performance Report",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "₹30,000",
    period: "/month",
    desc: "For businesses ready to dominate their market in Goa",
    popular: true,
    features: [
      "Social Media Management (4 platforms)",
      "16 Posts + Stories per month",
      "Full SEO (10 Keywords)",
      "Google Ads Management",
      "Content Marketing (4 blogs)",
      "Competitor Analysis",
      "Weekly Reports + Strategy Calls",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "₹60,000",
    period: "/month",
    desc: "Complete digital dominance — for brands that want to lead",
    popular: false,
    features: [
      "All Growth Features +",
      "AI-Powered Campaign Optimization",
      "20+ Keywords SEO + GEO/AEO",
      "Video Content Production",
      "Influencer Marketing",
      "Landing Pages & Funnel Design",
      "Dedicated Account Manager",
      "Daily Monitoring & Optimization",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark">
            Digital Marketing <span className="text-primary">Packages</span> for Goa Businesses
          </h2>
          <p className="mt-4 text-gray text-base md:text-lg">Flexible plans designed for every budget. All plans include free initial consultation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-6 md:p-8 transition-all hover-lift ${plan.popular ? "bg-primary text-white shadow-primary border-2 border-primary scale-[1.02]" : "bg-white border border-gray-100 shadow-sm"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-dark text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-current" /> MOST POPULAR
                </div>
              )}
              <h3 className={`font-bold text-xl ${plan.popular ? "text-white" : "text-dark"}`}>{plan.name}</h3>
              <p className={`text-sm mt-1 ${plan.popular ? "text-white/70" : "text-gray"}`}>{plan.desc}</p>
              <div className="mt-4 mb-6">
                <span className={`text-4xl font-black ${plan.popular ? "text-white" : "text-dark"}`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check size={16} className={`shrink-0 mt-0.5 ${plan.popular ? "text-secondary-light" : "text-primary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-white/85" : "text-gray"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${plan.popular ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary-dark shadow-primary"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray text-sm mt-8">
          All prices are exclusive of GST. Custom packages available for specific requirements.{" "}
          <a href="#contact" className="text-primary font-semibold underline">Contact us</a> for a tailored quote.
        </p>
      </div>
    </section>
  );
}
