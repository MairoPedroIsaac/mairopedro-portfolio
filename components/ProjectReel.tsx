"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// A short silent clip of the real project, in full colour. Plays while it's on screen.
// On desktop the card tilts gently in 3D towards the mouse, with a "View" label that follows it.
export default function ProjectReel({
  video,
  poster,
  title,
  href,
  phoneVideo,
  phonePoster,
}: {
  video: string;
  poster: string;
  title: string;
  href: string;
  // Optional portrait clip shown on phones instead of the wide one.
  phoneVideo?: string;
  phonePoster?: string;
}) {
  const box = useRef<HTMLAnchorElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const phoneVid = useRef<HTMLVideoElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.35 }
    );
    [vid.current, phoneVid.current].forEach((v) => v && io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="[perspective:1400px]">
      <Link
        ref={box}
        href={href}
        aria-label={`${title} case study`}
        className="group relative block overflow-hidden rounded-[6px] border border-white/10 bg-panel md:cursor-none shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        onMouseMove={(e) => {
          const r = box.current!.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          setPos({ x, y });
          setTilt({ x: ((y / r.height) - 0.5) * -6, y: ((x / r.width) - 0.5) * 8 });
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setTilt({ x: 0, y: 0 });
        }}
      >
        {phoneVideo && (
          <div className="aspect-[4/5] md:hidden">
            <video
              ref={phoneVid}
              src={phoneVideo}
              poster={phonePoster}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}
        <div className={`aspect-[16/7] ${phoneVideo ? "hidden md:block" : ""}`}>
          <video
            ref={vid}
            src={video}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover object-top"
          />
        </div>

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
    </div>
  );
}
