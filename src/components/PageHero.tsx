import { ArrowUpRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

export interface Crumb { href?: string; label: string }

export function PageHero({
  eyebrow,
  title,
  accent,
  lede,
  crumbs,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede: string;
  crumbs: Crumb[];
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-ink grain overflow-hidden">
      <div className="absolute inset-0 field-grid-light opacity-70" aria-hidden="true" />
      <div className="absolute -top-28 right-0 w-[460px] h-[460px] rounded-full bg-electric/20 blur-[130px]" aria-hidden="true" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-14 md:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] text-white/40">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20" aria-hidden="true">/</span>}
                {c.href ? (
                  <a href={c.href} className="hover:text-white transition-colors">{c.label}</a>
                ) : (
                  <span className="text-white/70" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="type-eyebrow text-acid anim-rise">{eyebrow}</p>
            <h1 className="mt-3 type-display text-white anim-rise d-1">
              {title}
              {accent && (
                <>
                  <br />
                  <span className="type-accent-italic text-electric-light">{accent}</span>
                </>
              )}
            </h1>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed max-w-2xl anim-rise d-2">
              {lede}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 anim-rise d-3">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 bg-acid text-ink px-6 py-3.5 rounded-[6px] font-bold text-sm hover:bg-white transition-colors"
              >
                Request a free audit <ArrowUpRight size={16} />
              </a>
              <a
                href="tel:+919923352923"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/45 hover:bg-white/[0.05] text-white px-6 py-3.5 rounded-[6px] font-semibold text-sm transition-colors"
              >
                <Phone size={15} /> +91 99233 52923
              </a>
            </div>
          </div>

          {meta && <div className="lg:col-span-5 anim-rise d-4">{meta}</div>}
        </div>

        {children}
      </div>
    </section>
  );
}

/* Compact fact strip for hero right rail */
export function FactGrid({ items }: { items: { k: string; v: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3">
      {items.map((f) => (
        <div key={f.k} className="border border-white/[0.11] bg-white/[0.04] rounded-xl p-4">
          <dt className="type-eyebrow text-white/35">{f.k}</dt>
          <dd className="mt-1.5 font-bold text-white text-lg leading-tight">{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}
