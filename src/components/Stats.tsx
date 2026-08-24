const stats = [
  { value: "14+", label: "Years operating", detail: "Founded in South Goa, 2012" },
  { value: "200+", label: "Projects shipped", detail: "Across 10+ industries" },
  { value: "4.8", label: "Average rating", detail: "From 128 verified reviews" },
  { value: "+284%", label: "Median traffic lift", detail: "Within first 6 months" },
];

export function Stats() {
  return (
    <section className="relative bg-acid py-16 md:py-20 overflow-hidden" aria-label="Agency performance figures">
      <div className="absolute inset-0 field-dots opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`${i < stats.length - 1 ? "lg:border-r lg:border-ink/15" : ""} lg:pr-6`}
            >
              <p className="font-black text-ink text-4xl md:text-5xl lg:text-6xl leading-none tracking-tighter">
                {s.value}
              </p>
              <p className="mt-3 font-bold text-ink text-sm">{s.label}</p>
              <p className="mt-1 text-ink/55 text-xs">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
