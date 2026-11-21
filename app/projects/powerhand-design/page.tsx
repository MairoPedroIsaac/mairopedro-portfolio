"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import TechBadge from "@/components/ui/TechBadge";

const desktopImages = [
  { src: "/images/projects/powerhand-desktop-hero.png", label: "Homepage: Hero Section" },
  { src: "/images/projects/powerhand-desktop-about.png", label: "About Page" },
  { src: "/images/projects/powerhand-desktop-solutions.png", label: "Solutions Page" },
  { src: "/images/projects/powerhand-desktop-collective-1.png", label: "Portfolio Page" },
  { src: "/images/projects/powerhand-desktop-collective-2.png", label: "Contact Page" },
];

const mobileImages = [
  { src: "/images/projects/powerhand-mobile-hero.jpeg", label: "Hero" },
  { src: "/images/projects/powerhand-mobile-about.jpeg", label: "About" },
  { src: "/images/projects/powerhand-mobile-solutions.jpeg", label: "Solutions" },
  { src: "/images/projects/powerhand-mobile-collective-1.jpeg", label: "Portfolio" },
  { src: "/images/projects/powerhand-mobile-collective-2.jpeg", label: "Contact" },
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
        <button
          onClick={prev}
          className="flex-shrink-0 w-11 h-11 rounded-full bg-neutral-800 hover:bg-white/15 border border-neutral-700 flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex-1 overflow-hidden border border-neutral-800 bg-neutral-900">
          {/* Fixed height container: images sit naturally inside */}
          <div className="relative w-full aspect-video overflow-hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/70 rounded-full text-white text-xs">
              {current + 1} / {images.length}
            </div>
          </div>
          <div className="px-4 py-3 bg-neutral-900 border-t border-neutral-800">
            <span className="text-neutral-400 text-sm">{images[current].label}</span>
          </div>
        </div>

        <button
          onClick={next}
          className="flex-shrink-0 w-11 h-11 rounded-full bg-neutral-800 hover:bg-white/15 border border-neutral-700 flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"}`}
          />
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
        <button
          onClick={prev}
          className="flex-shrink-0 w-11 h-11 rounded-full bg-neutral-800 hover:bg-white/15 border border-neutral-700 flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Fixed width + height: exact phone proportions */}
        <div className="w-[280px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
          <div className="relative h-[500px] w-full overflow-hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/70 rounded-full text-white text-xs">
              {current + 1} / {images.length}
            </div>
          </div>
          <div className="px-3 py-3 bg-neutral-900 border-t border-neutral-800 text-center">
            <span className="text-neutral-400 text-sm">{images[current].label}</span>
          </div>
        </div>

        <button
          onClick={next}
          className="flex-shrink-0 w-11 h-11 rounded-full bg-neutral-800 hover:bg-white/15 border border-neutral-700 flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PowerhandDesignPage() {
  const techStack = ["Django", "HTML", "CSS", "JavaScript"];

  const [pagesCount, setPagesCount] = useState(0);
  const [responsiveCount, setResponsiveCount] = useState(0);
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
            setPagesCount(Math.min(Math.round(5 * progress), 5));
            setResponsiveCount(Math.min(Math.round(100 * progress), 100));
            if (step >= steps) {
              clearInterval(timer);
              setPagesCount(5);
              setResponsiveCount(100);
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
      problem: "Advertisement banner cropped on mobile with unwanted hover effects",
      solution: "Implemented separate desktop/mobile images with static display and no effects",
    },
    {
      problem: "Contact page content cut off on iPhone 13, navbar overlapping content",
      solution: "Added device-specific CSS for 390px width with adjusted padding",
    },
    {
      problem: "Client logo section was a static grid, looked boring",
      solution: "Built an auto-scrolling infinite loop slider with pause-on-hover",
    },
    {
      problem: "Static files (CSS/images) not loading properly in Django",
      solution: "Configured Django static files settings and proper file structure",
    },
    {
      problem: "DNS/Email setup: MX, SPF, DKIM records for Zoho Mail on Namecheap",
      solution: "Configured all DNS records correctly to deliver info@powerhanddesigns.com",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      
      {/* BACK LINK */}
      <div className="container-custom pt-28">
        <Link href="/#work" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      <section className="section-padding">
        <div className="container-custom space-y-6">
          <h1 className="display text-6xl md:text-8xl">
            Powerhand <span className="text-ash">Designs</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            A full-stack business website for a Pan-African branding agency, built with Django, fully responsive, and delivered with professional email infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="https://www.powerhanddesigns.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink font-bold hover:opacity-90 transition-opacity no-underline">
              <ExternalLink className="w-4 h-4" /> Live Site
            </a>
            <a href="https://github.com/MairoPedroIsaac/powerhanddesigns" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-white hover:border-white transition-colors no-underline">
              <Github className="w-4 h-4" /> GitHub Repo
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-neutral-800">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-white">2025</div><div className="text-neutral-400 text-sm mt-1">Year Delivered</div></div>
            <div><div className="text-3xl font-bold text-white">Django</div><div className="text-neutral-400 text-sm mt-1">Primary Stack</div></div>
            <div><div className="text-3xl font-bold text-white">{pagesCount}</div><div className="text-neutral-400 text-sm mt-1">Pages Built</div></div>
            <div><div className="text-3xl font-bold text-white">{responsiveCount}%</div><div className="text-neutral-400 text-sm mt-1">Responsive</div></div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-4">
          <h2 className="display text-3xl md:text-4xl">Desktop Views</h2>
          <DesktopCarousel images={desktopImages} />
        </div>
      </section>

      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom space-y-4">
          <h2 className="display text-3xl md:text-4xl">Mobile Views</h2>
          <MobileCarousel images={mobileImages} />
        </div>
      </section>

      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h2 className="display text-3xl md:text-4xl">The Challenge</h2>
              <p className="text-neutral-400 leading-relaxed">
                Powerhand Designs needed a professional web presence that matched their brand identity as a Pan-African agency. The site had to work flawlessly across all devices, include a custom email setup, and be built and maintained independently without relying on website builders.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="display text-3xl md:text-4xl">The Solution</h2>
              <p className="text-neutral-400 leading-relaxed">
                Built a full-stack Django website from scratch covering five pages: Home, About, Solutions, Portfolio, and Contact. Configured DNS records on Namecheap with Zoho Mail to deliver a professional info@powerhanddesigns.com address. Solved device-specific layout issues and built an auto-scrolling client logo slider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container-custom space-y-6">
          <h2 className="display text-3xl md:text-4xl">Problems Solved</h2>
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="p-6 bg-neutral-900/50 border border-neutral-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-ash font-semibold uppercase tracking-wider mb-2">Problem</div>
                    <p className="text-neutral-300 text-sm">{item.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs text-ash font-semibold uppercase tracking-wider mb-2">Solution</div>
                    <p className="text-neutral-300 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom space-y-4">
          <h2 className="display text-3xl md:text-4xl">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom space-y-4">
          <h2 className="display text-3xl md:text-4xl">The Result</h2>
          <p className="text-neutral-400 leading-relaxed max-w-2xl">
            Powerhand Designs launched with a fully responsive, professional website across all five pages. The client received a working business email, a polished online presence, and a scalable Django codebase they can build on. 100% client satisfaction.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom text-center space-y-6">
          <h2 className="display text-5xl md:text-7xl">
            Have a similar project? <span className="text-ash">Let's build.</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Need a business website, custom web app, or full-stack solution? Let's talk.
          </p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-ink font-bold hover:opacity-90 transition-opacity no-underline text-lg">
            Work with me
          </a>
        </div>
      </section>

    </main>
  );
}