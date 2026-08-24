"use client";
import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <label htmlFor="footer-email" className="sr-only">Email address</label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="flex-1 min-w-0 bg-white/[0.05] border border-white/[0.12] rounded-[6px] px-3.5 py-2.5 text-[0.8125rem] text-white placeholder:text-white/25 outline-none focus:border-acid transition-colors"
        />
        <button
          type="submit"
          className="shrink-0 bg-white/[0.09] hover:bg-acid hover:text-ink text-white px-3.5 rounded-[6px] transition-colors"
          aria-label="Subscribe to insights"
        >
          {done ? <Check size={16} /> : <ChevronRight size={16} />}
        </button>
      </form>
      <p className="mt-2 text-white/25 text-[0.6875rem]" aria-live="polite">
        {done
          ? "Thanks — we'll be in touch."
          : "Search & AI-visibility analysis. Unsubscribe anytime."}
      </p>
    </>
  );
}
