"use client";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "4.8★", label: "Client Rating" },
  { value: "150%", label: "Avg. Traffic Growth" },
  { value: "50+", label: "Active Clients" },
  { value: "3X", label: "Avg. ROI Increase" },
];

export function Stats() {
  return (
    <section className="relative py-16 bg-primary overflow-hidden" aria-label="Key statistics">
      <div className="absolute inset-0 opacity-10 grid-pattern" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-black text-3xl md:text-4xl">{s.value}</p>
              <p className="text-white/60 text-xs md:text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
