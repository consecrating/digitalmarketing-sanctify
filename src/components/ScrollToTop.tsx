"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(scrolled / height, 1) : 0);
      setVisible(scrolled > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const R = 21;
  const C = 2 * Math.PI * R;

  return (
    <button
      onClick={toTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 grid place-items-center rounded-full bg-ink text-white shadow-float transition-all duration-300 hover:bg-electric ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      {/* Reading progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
        <circle
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="var(--color-acid)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
          style={{ transition: "stroke-dashoffset 120ms linear" }}
        />
      </svg>
      <ArrowUp size={17} className="relative z-10" />
    </button>
  );
}
