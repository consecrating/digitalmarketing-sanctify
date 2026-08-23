"use client";

const steps = [
  { num: "01", title: "Discovery & Audit", desc: "We analyze your current digital presence, competitors, and target audience to identify growth opportunities specific to your Goa-based business." },
  { num: "02", title: "Strategy & Planning", desc: "Custom digital marketing strategy tailored to your goals — whether it's more footfall, online bookings, or brand awareness across Goa." },
  { num: "03", title: "Execution & Launch", desc: "Our team implements the strategy — launching campaigns, optimizing your website, creating content, and managing your social media." },
  { num: "04", title: "Measure & Optimize", desc: "Continuous monitoring, A/B testing, and optimization. Monthly reports with actionable insights to maximize your ROI." },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28 gradient-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/80 text-sm font-semibold">Our Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-white/55 text-base md:text-lg">A systematic 4-step approach to digital marketing success in Goa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden">
              <img
                src={
                  i === 0 ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75" :
                  i === 1 ? "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&q=75" :
                  i === 2 ? "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=75" :
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75"
                }
                alt={s.title}
                className="w-full h-32 object-cover rounded-xl mb-4 opacity-60"
              />
              <span className="text-primary-light font-black text-3xl">{s.num}</span>
              <h3 className="text-white font-bold text-base mt-3 mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
