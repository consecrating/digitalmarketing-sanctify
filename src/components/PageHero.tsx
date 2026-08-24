import { ArrowUpRight, Phone, Star } from "lucide-react";
import type { ReactNode } from "react";

export interface Crumb { href?: string; label: string }

/**
 * Light page header. Uses sand + photographic accent rather than a dark band,
 * so inner pages open bright instead of black.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  lede,
  crumbs,
  meta,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede: string;
  crumbs: Crumb[];
  meta?: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-sand border-b border-ink/[0.08] overflow-hidden">
      <div className="absolute inset-0 field-dots opacity-30" aria-hidden="true" />
      <div className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-electric/[0.07] blur-[110px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-acid/20 blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 pt-11 pb-13 md:pt-14 md:pb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] text-slate">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-light" aria-hidden="true">/</span>}
                {c.href ? (
                  <a href={c.href} className="hover:text-ink transition-colors">{c.label}</a>
                ) : (
                  <span className="text-ink/70 font-medium" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-9 lg:gap-12 items-center">
          {/* Copy */}
          <div className={image ? "lg:col-span-7" : "lg:col-span-8"}>
            <p className="type-eyebrow text-electric anim-rise">{eyebrow}</p>
            <h1 className="mt-3 type-display text-ink anim-rise d-1">
              {title}
              {accent && (
                <>
                  <br />
                  <span className="type-accent-italic text-slate">{accent}</span>
                </>
              )}
            </h1>
            <p className="mt-5 text-slate text-base md:text-lg leading-relaxed max-w-2xl anim-rise d-2">
              {lede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 anim-rise d-3">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 bg-ink hover:bg-electric text-white px-6 py-3.5 rounded-[6px] font-bold text-sm transition-colors"
              >
                Request a free audit <ArrowUpRight size={16} />
              </a>
              <a
                href="tel:+919923352923"
                className="inline-flex items-center gap-2 border border-ink/15 hover:border-ink/40 hover:bg-white text-ink px-6 py-3.5 rounded-[6px] font-semibold text-sm transition-colors"
              >
                <Phone size={15} /> +91 99233 52923
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate text-[0.75rem]">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={11} className="fill-acid-dark text-acid-dark" />
                  ))}
                </span>
                4.8 / 128 reviews
              </span>
            </div>
          </div>

          {/* Optional image */}
          {image && (
            <div className="lg:col-span-5 anim-rise d-4">
              <div className="rounded-2xl overflow-hidden edge-soft shadow-float bg-white">
                <img
                  src={image}
                  alt={imageAlt}
                  width={800}
                  height={520}
                  loading="lazy"
                  className="w-full h-[220px] md:h-[280px] object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Meta band */}
        {meta && <div className="mt-11 anim-rise d-4">{meta}</div>}

        {children}
      </div>
    </section>
  );
}

/** Horizontal fact strip — light styling to match the light header. */
export function FactGrid({ items }: { items: { k: string; v: string }[] }) {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map((f) => (
        <div key={f.k} className="bg-white edge-soft rounded-xl p-4">
          <dt className="type-eyebrow text-slate-light">{f.k}</dt>
          <dd className="mt-1.5 font-bold text-ink text-[0.9375rem] leading-tight">{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}
