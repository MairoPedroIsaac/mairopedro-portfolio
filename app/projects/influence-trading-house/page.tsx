"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const desktopImages = [
  { src: "/images/projects/influence-trading-desktop-hero.png", label: "Landing Page — Hero Section" },
  { src: "/images/projects/influence-trading-desktop-dashboard.png", label: "Dashboard — Live Signals & Stats" },
  { src: "/images/projects/influence-trading-desktop-signals.png", label: "Signals — Entry, TP, SL Cards" },
  { src: "/images/projects/influence-trading-desktop-education.png", label: "Education — Course Library" },
  { src: "/images/projects/influence-trading-desktop-login.png", label: "Login — Auth UI" },
];

const mobileImages = [
  { src: "/images/projects/influence-trading-mobile-hero.jpeg", label: "Hero" },
  { src: "/images/projects/influence-trading-mobile-dashboard.jpeg", label: "Dashboard" },
  { src: "/images/projects/influence-trading-mobile-signals.jpeg", label: "Live Signals" },
  { src: "/images/projects/influence-trading-mobile-education.jpeg", label: "Education" },
  { src: "/images/projects/influence-trading-mobile-login.jpeg", label: "Login" },
];

function DesktopCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const prev = () => { setCurrent((p) => (p - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setCurrent((p) => (p + 1) % images.length); resetTimer(); };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button onClick={prev} className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex-1 rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
          <div className="relative w-full aspect-video overflow-hidden">
            {images.map((img, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <Image src={img.src} alt={img.label} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 80vw" priority={i === 0} />
              </div>
            ))}
            <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/70 rounded-full text-white text-xs">{current + 1} / {images.length}</div>
          </div>
          <div className="px-4 py-3 bg-gray-900 border-t border-gray-800">
            <span className="text-gray-400 text-sm">{images[current].label}</span>
          </div>
        </div>
        <button onClick={next} className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); resetTimer(); }}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-[#3b82f6]" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}

function MobileCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const prev = () => { setCurrent((p) => (p - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setCurrent((p) => (p + 1) % images.length); resetTimer(); };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="w-[280px] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
          <div className="relative h-[500px] w-full overflow-hidden">
            {images.map((img, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <Image src={img.src} alt={img.label} fill className="object-cover object-top" sizes="280px" priority={i === 0} />
              </div>
            ))}
            <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/70 rounded-full text-white text-xs">{current + 1} / {images.length}</div>
          </div>
          <div className="px-3 py-3 bg-gray-900 border-t border-gray-800 text-center">
            <span className="text-gray-400 text-sm">{images[current].label}</span>
          </div>
        </div>
        <button onClick={next} className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); resetTimer(); }}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-[#3b82f6]" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}

export default function InfluenceTradingHousePage() {
  const techStack = ["Next.js 15", "TypeScript", "TailwindCSS v4", "Vercel", "Mock AuthContext"];

  const [pagesCount, setPagesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setPagesCount(Math.min(Math.round(8 * progress), 8));
            if (step >= steps) {
              clearInterval(timer);
              setPagesCount(8);
            }
          }, duration / steps);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const challenges = [
    {
      problem: "TailwindCSS v4 breaking changes — npx tailwindcss init no longer exists, @tailwind directives removed entirely",
      solution: "Replaced all three @tailwind directives with a single @import \"tailwindcss\" and removed tailwind.config.ts dependency entirely — v4 reads config from CSS",
    },
    {
      problem: "@apply inside @layer base threw build error: \"Cannot apply unknown utility class\" after switching to v4 import syntax",
      solution: "Replaced every @apply rule with equivalent plain CSS properties — background-color, color, font-family, -webkit-font-smoothing — making styles more explicit and debuggable",
    },
    {
      problem: "Google Fonts @import caused build failure at line 1248 — but globals.css only had 98 lines",
      solution: "Removed Google Fonts @import url() entirely since Inter and JetBrains Mono were already loaded via next/font/google in layout.tsx — two font systems were running in parallel",
    },
    {
      problem: "Next.js 15 App Router hydration errors from components using useState, useEffect, and useRouter without 'use client' directive",
      solution: "Established a clear rule: any component with interactivity or state gets 'use client'. Pure display components (Features, Testimonials) remain server components by default",
    },
    {
      problem: "All components depended on auth state (nav behavior, CTA buttons, plan badges) but no backend existed for Phase 1",
      solution: "Built a mock AuthContext mirroring the exact TypeScript interface of a real auth system — user, profile, loading, openAuthModal, signOut. Swapping in real Supabase only requires changing the context file",
    },
    {
      problem: "Git push to GitHub failed with fatal TLS error: \"error:0A000152:SSL routines::unsafe legacy renegotiation disabled\"",
      solution: "Updated Git SSL backend with git config --global http.sslBackend schannel — instructs Git to use Windows native SChannel instead of the OpenSSL library bundled with Git for Windows",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BACK LINK */}
      <div className="container-custom pt-24 px-6 md:px-12 lg:px-24">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="section-padding">
        <div className="container-custom space-y-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="px-3 py-1 bg-blue-900/50 text-blue-400 border border-blue-700/50 rounded-full text-sm font-semibold">
              Fintech Platform
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              Portfolio Project
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Influence <span className="text-[#3b82f6]">Trading House</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            AI-powered trading intelligence platform built to institutional standards —
            dark luxury design with glassmorphism, live signal dashboards, backtesting,
            and financial education. Built for serious traders.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://influence-trading-house.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline"
            >
              <ExternalLink className="w-4 h-4" /> Visit Live Site
            </a>
            <a
              href="https://github.com/MairoPedroIsaac/influence-trading-house"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-[#3b82f6] transition-colors no-underline"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 border-y border-gray-800">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-blue-400">2025</div><div className="text-gray-400 text-sm mt-1">Year Built</div></div>
            <div><div className="text-3xl font-bold text-blue-400">Next.js 15</div><div className="text-gray-400 text-sm mt-1">Primary Stack</div></div>
            <div><div className="text-3xl font-bold text-blue-400">{pagesCount}+</div><div className="text-gray-400 text-sm mt-1">Pages Built</div></div>
            <div><div className="text-3xl font-bold text-blue-400">Phase 1</div><div className="text-gray-400 text-sm mt-1">Frontend Complete</div></div>
          </div>
        </div>
      </section>

      {/* DESKTOP SCREENSHOTS */}
      <section className="section-padding">
        <div className="container-custom space-y-4">
          <h2 className="text-2xl font-bold text-white">Desktop Views</h2>
          <DesktopCarousel images={desktopImages} />
        </div>
      </section>

      {/* MOBILE SCREENSHOTS */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-4">
          <h2 className="text-2xl font-bold text-white">Mobile Views</h2>
          <MobileCarousel images={mobileImages} />
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Problem</h2>
              <p className="text-gray-400 leading-relaxed">
                Most retail trading platforms suffer from the same issues — cluttered interfaces,
                generic design, and no clear signal methodology. Traders are either overwhelmed
                with noise or undersupported with tools that institutional players take for
                granted. The goal was to build something that feels like it belongs in a
                Bloomberg terminal room, not a casino.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Solution</h2>
              <p className="text-gray-400 leading-relaxed">
                Built a premium frontend in Next.js 15 with TypeScript and TailwindCSS v4 —
                dark navy and metallic gold brand identity, glassmorphism card system, live
                signal dashboards with confidence scores, backtest configuration panels, and
                a full education module. Phase 1 is a fully wired frontend; Phase 2 connects
                a Django + PostgreSQL backend with real signal data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CHALLENGES */}
      <section className="py-8">
        <div className="container-custom space-y-6">
          <h2 className="text-2xl font-bold text-white">Problems Solved</h2>
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">Problem</div>
                    <p className="text-gray-300 text-sm">{item.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-2">Solution</div>
                    <p className="text-gray-300 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-4">
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-800 text-[#3b82f6] rounded-md border border-[#3b82f6]/30 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-4">
          <h2 className="text-2xl font-bold text-white">The Result</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Influence Trading House Phase 1 is fully deployed on Vercel — a complete,
            responsive fintech frontend demonstrating institutional-grade design at retail
            access. The platform features a glassmorphism design system, live signal UI,
            backtest panel, education module, and mock auth context ready for real backend
            integration. Phase 2 will connect Django + PostgreSQL with live signal data,
            and Phase 3 introduces an ML pipeline with scikit-learn, XGBoost, and FinBERT
            sentiment scoring.
          </p>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-4">
          <h2 className="text-2xl font-bold text-white">What&apos;s Next</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: "Phase 2", label: "Django + PostgreSQL backend with real signal data" },
              { phase: "Phase 3", label: "ML pipeline — scikit-learn, XGBoost, FinBERT sentiment" },
              { phase: "Phase 4", label: "Stripe + MTN MoMo payment integration" },
              { phase: "Phase 5", label: "QuantConnect strategy integration and live trading" },
            ].map((item) => (
              <div key={item.phase} className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 space-y-2">
                <div className="text-sm font-bold text-[#3b82f6]">{item.phase}</div>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in fintech?{" "}
            <span className="text-[#3b82f6]">Let&apos;s connect.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building a trading platform, fintech product, or need a full-stack developer?
            Let&apos;s talk.
          </p>
          <a
            href="/#contact"
            className="inline-block px-10 py-4 bg-[#3b82f6] text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline text-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </main>
  );
}