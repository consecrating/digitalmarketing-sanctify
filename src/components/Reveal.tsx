"use client";
import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Dir = "up" | "down" | "left" | "right" | "scale" | "none";

const offsets: Record<Dir, string> = {
  up: "translate3d(0,28px,0)",
  down: "translate3d(0,-28px,0)",
  left: "translate3d(32px,0,0)",
  right: "translate3d(-32px,0,0)",
  scale: "scale(0.955)",
  none: "none",
};

export function Reveal({
  children,
  as: Tag = "div",
  dir = "up",
  delay = 0,
  duration = 720,
  className = "",
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  dir?: Dir;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : offsets[dir],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/* Stagger helper — wraps children each in a Reveal with incremental delay */
export function RevealGroup({
  children,
  step = 70,
  dir = "up",
  className = "",
}: {
  children: ReactNode[];
  step?: number;
  dir?: Dir;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} dir={dir} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/* Count-up number, triggers on scroll into view */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1600,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
