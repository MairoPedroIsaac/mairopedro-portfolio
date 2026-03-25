"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const desktopImages = [
  { src: "/images/projects/healthvault-desktop-hero.png", label: "Homepage — Hero Section" },
  { src: "/images/projects/healthvault-desktop-about.png", label: "About Page" },
  { src: "/images/projects/healthvault-desktop-contact.png", label: "Contact Page" },
  { src: "/images/projects/healthvault-desktop-patient-registeration.png", label: "Patient Registration" },
  { src: "/images/projects/healthvault-desktop-provider-registeration.png", label: "Provider Registration" },
];

const mobileImages = [
  { src: "/images/projects/healthvault-mobile-hero.jpeg", label: "Hero" },
  { src: "/images/projects/healthvault-mobile-patient.jpeg", label: "Patient View" },
  { src: "/images/projects/healthvault-mobile-provider.jpeg", label: "Provider View" },
  { src: "/images/projects/healthvault-mobile-other.jpeg", label: "Other" },
  { src: "/images/projects/healthvault-mobile-patient.jpeg", label: "Patient Dashboard" },
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

export default function HealthVaultRwandaPage() {
  const techStack = ["Next.js", "Django", "PostgreSQL", "QR Code Encryption", "TailwindCSS", "i18n"];

  const [pagesCount, setPagesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
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
            setPagesCount(Math.min(Math.round(6 * progress), 6));
            setUsersCount(Math.min(Math.round(1000 * progress), 1000));
            if (step >= steps) {
              clearInterval(timer);
              setPagesCount(6);
              setUsersCount(1000);
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
      problem: "Hero section background images overpowered by blue gradient overlays — images only 20-30% visible",
      solution: "Reduced gradient opacity to from-primary/60 to-primary-dark/50, added drop-shadow-lg to text for readability",
    },
    {
      problem: "Mobile hero content cut off — buttons, trust badges, and taglines not visible on small screens",
      solution: "Changed fixed height h-[500px] to min-h-[600px] md:min-h-[700px] with proper vertical padding",
    },
    {
      problem: "Logo design had white/gray backgrounds instead of transparent, too small at 30x30px",
      solution: "Built custom logo generator using React + Canvas API, generated SVG files with exact brand colors #2563EB",
    },
    {
      problem: "CTA section healthcare worker face was cropped — looked unprofessional",
      solution: "Added precise object positioning: object-cover object-[center_20%] to shift focus up 20%",
    },
    {
      problem: "DNS/Email configuration and Next.js image quality warnings causing performance concerns",
      solution: "Configured next.config.ts with device sizes, image formats, and quality={90} on all Image components",
    },
    {
      problem: "Color inconsistency — multiple shades of blue used across components",
      solution: "Established single source of truth in globals.css with CSS variables: --primary-blue: #2563EB",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

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
              In Development
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              Capstone Project
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            HealthVault <span className="text-[#3b82f6]">Rwanda</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Healthcare data management system giving patients ownership of their medical records.
            Patients carry their complete health history via QR code and control which doctors
            can access their records — built for Rwanda's healthcare infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="https://healthvault-rwanda-s42z.vercel.app/en" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline">
              <ExternalLink className="w-4 h-4" /> Live Preview
            </a>
            <a href="https://github.com/MairoPedroIsaac/healthvault-rwanda" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-[#3b82f6] transition-colors no-underline">
              <Github className="w-4 h-4" /> GitHub (Private)
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 border-y border-gray-800">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-blue-400">2026</div><div className="text-gray-400 text-sm mt-1">Expected Launch</div></div>
            <div><div className="text-3xl font-bold text-blue-400">Next.js</div><div className="text-gray-400 text-sm mt-1">Primary Stack</div></div>
            <div><div className="text-3xl font-bold text-blue-400">{pagesCount}+</div><div className="text-gray-400 text-sm mt-1">Pages Built</div></div>
            <div><div className="text-3xl font-bold text-blue-400">{usersCount}+</div><div className="text-gray-400 text-sm mt-1">Target Users</div></div>
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
              <h2 className="text-2xl font-bold text-white">The Challenge</h2>
              <p className="text-gray-400 leading-relaxed">
                Rwanda's healthcare system lacks a unified patient record infrastructure. Patients
                visit multiple facilities but carry no portable medical history, leading to
                duplicate tests, misdiagnoses, and poor continuity of care. The goal was to
                build a secure, accessible platform that gives patients full ownership of
                their data using QR code encryption.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Solution</h2>
              <p className="text-gray-400 leading-relaxed">
                Built a full-stack Next.js and Django platform with multilingual support (i18n),
                separate patient and provider registration flows, and QR code-based record access.
                Each patient gets an encrypted QR ID that acts as a portable key — doctors scan
                to access records only with the patient's consent. Deployed on Vercel with
                PostgreSQL backend.
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
            HealthVault Rwanda is currently in active development as a final year capstone project,
            due July 2026. The platform features fully responsive patient and provider flows,
            QR code encryption, multilingual support for Rwanda's four national languages,
            and a production-ready deployment on Vercel. Target: 1,000+ patients at launch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in healthcare tech?{" "}
            <span className="text-[#3b82f6]">Let's connect.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building something in healthtech, fintech, or need a full-stack developer? Let's talk.
          </p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-[#3b82f6] text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline text-lg">
            Get In Touch
          </a>
        </div>
      </section>

    </main>
  );
}