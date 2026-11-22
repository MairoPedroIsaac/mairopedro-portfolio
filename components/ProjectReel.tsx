"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollZoom from "@/components/motion/ScrollZoom";

// A short silent clip of the real project. Plays while it's on screen.
// On desktop it sits in black and white and turns to colour on hover,
// with a "View" label that follows the mouse.
export default function ProjectReel({
  video,
  poster,
  title,
  href,
}: {
  video: string;
  poster: string;
  title: string;
  href: string;
}) {
  const box = useRef<HTMLAnchorElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      ref={box}
      href={href}
      aria-label={`${title} case study`}
      className="group relative block overflow-hidden rounded-[6px] border border-white/10 bg-[#0d0d0d] md:cursor-none"
      onMouseMove={(e) => {
        const r = box.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ScrollZoom className="aspect-[16/7]" from={1.12}>
        <video
          ref={vid}
          src={video}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover object-top transition-[filter] duration-700 md:grayscale md:group-hover:grayscale-0"
        />
      </ScrollZoom>

      {/* Follow-the-mouse label (desktop only) */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden md:flex h-24 w-24 items-center justify-center rounded-full bg-white text-black text-sm font-semibold transition-[opacity,scale] duration-300"
        style={{
          translate: `${pos.x - 48}px ${pos.y - 48}px`,
          opacity: hover ? 1 : 0,
          scale: hover ? "1" : "0.4",
        }}
      >
        View
      </span>
    </Link>
  );
}
