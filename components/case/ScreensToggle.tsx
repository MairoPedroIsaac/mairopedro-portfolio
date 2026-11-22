"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Shot } from "@/lib/caseStudies";

// Switch between the desktop and mobile screens, then flick through them.
export default function ScreensToggle({ desktop, mobile }: { desktop: Shot[]; mobile: Shot[] }) {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");
  const [i, setI] = useState(0);
  const shots = mode === "desktop" ? desktop : mobile;
  const go = (d: number) => setI((p) => (p + d + shots.length) % shots.length);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div role="tablist" className="relative inline-flex rounded-full border border-white/15 p-1">
          <span
            aria-hidden
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.15,1)]"
            style={{ transform: mode === "desktop" ? "translateX(0)" : "translateX(100%)" }}
          />
          {(["desktop", "mobile"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => {
                setMode(m);
                setI(0);
              }}
              className={`relative z-10 w-28 py-2 text-sm font-semibold capitalize transition-colors duration-300 ${
                mode === m ? "text-black" : "text-grey-2 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-grey-2 tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
          </span>
          <span className="text-white font-semibold">{shots[i].label}</span>
          <div className="flex gap-2">
            <button aria-label="Previous screen" onClick={() => go(-1)} className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next screen" onClick={() => go(1)} className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {mode === "desktop" ? (
        <div className="relative aspect-[16/7.2] overflow-hidden rounded-[8px] border border-white/10 bg-panel">
          {shots.map((s, k) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.label}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className={`object-cover object-top transition-all duration-700 ${k === i ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}`}
            />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x">
          {shots.map((s, k) => (
            <button
              key={s.src}
              onClick={() => setI(k)}
              className={`relative shrink-0 snap-start w-[46%] sm:w-[30%] md:w-[22%] aspect-[9/19.5] overflow-hidden rounded-[18px] border-4 transition-all duration-500 ${
                k === i ? "border-white" : "border-[#1a1a1a] opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={s.src} alt={s.label} fill sizes="260px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {mode === "desktop" && (
        <div className="mt-4 grid grid-cols-5 md:grid-cols-7 gap-3">
          {shots.map((s, k) => (
            <button
              key={s.src}
              onClick={() => setI(k)}
              aria-label={s.label}
              className={`relative aspect-[16/8] overflow-hidden rounded-[4px] border transition-all duration-300 ${
                k === i ? "border-white" : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="160px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
