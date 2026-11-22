"use client";

import { ReactNode, useEffect, useRef } from "react";

// The image inside starts slightly zoomed in and settles to normal as you scroll past it.
export default function ScrollZoom({
  children,
  className = "",
  from = 1.14,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
}) {
  const box = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = box.current;
      const target = inner.current;
      if (!el || !target) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the box enters at the bottom, 1 when its top reaches the top
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height * 0.4)));
      const scale = from - (from - 1) * p;
      target.style.transform = `scale(${scale.toFixed(4)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [from]);

  return (
    <div ref={box} className={`overflow-hidden ${className}`}>
      <div ref={inner} className="h-full w-full will-change-transform" style={{ transform: `scale(${from})` }}>
        {children}
      </div>
    </div>
  );
}
