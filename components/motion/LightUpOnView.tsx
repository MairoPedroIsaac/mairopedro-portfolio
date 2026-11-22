"use client";

import { ReactNode, useEffect, useRef } from "react";

// On touch screens (no hover), lights up each .tech-chip one by one when the group scrolls into view.
export default function LightUpOnView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: hover)").matches) return;
    const chips = Array.from(el.querySelectorAll<HTMLElement>(".tech-chip"));
    const timers: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        chips.forEach((c, i) => timers.push(window.setTimeout(() => c.classList.add("is-lit"), 250 + i * 90)));
        io.disconnect();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
