"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Hero visual for a case study: the real product in a browser window and a phone,
// laid back in 3D. As you scroll, the browser tilts up to face you.
export default function Stage3D({
  video,
  poster,
  phone,
  title,
}: {
  video: string;
  poster: string;
  phone: string;
  title: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const screen = useRef<HTMLDivElement>(null);
  const handset = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrap.current;
      if (!el || !screen.current || !handset.current) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = reduce ? 1 : Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.95)));
      const tilt = 22 * (1 - p);
      screen.current.style.transform = `rotateX(${tilt.toFixed(2)}deg) scale(${(0.9 + 0.1 * p).toFixed(3)})`;
      handset.current.style.transform = `translate3d(0, ${(60 * (1 - p)).toFixed(1)}px, 80px) rotateY(${(-14 * (1 - p) - 6).toFixed(2)}deg) rotateX(${(tilt * 0.4).toFixed(2)}deg)`;
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
  }, []);

  return (
    <div ref={wrap} className="relative [perspective:1600px] pb-10 md:pb-16">
      <div
        ref={screen}
        className="relative mx-auto origin-bottom rounded-[10px] border border-white/15 bg-panel shadow-[0_60px_120px_-50px_rgba(0,0,0,0.7)] will-change-transform"
        style={{ transform: "rotateX(22deg) scale(0.9)" }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-xs text-grey-2 truncate">{title}</span>
        </div>
        <div className="aspect-[16/7] overflow-hidden rounded-b-[10px]">
          <video
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div
        ref={handset}
        className="absolute right-2 md:right-8 bottom-0 w-[26%] max-w-[210px] min-w-[110px] rounded-[22px] border-[5px] border-[#1a1a1a] bg-black shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden will-change-transform"
        style={{ transform: "translate3d(0,60px,80px) rotateY(-20deg)" }}
      >
        <div className="relative aspect-[9/19.5]">
          <Image src={phone} alt={`${title} on a phone`} fill sizes="210px" className="object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
