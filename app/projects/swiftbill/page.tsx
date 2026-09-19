"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import TechBadge from "@/components/ui/TechBadge";

const desktopImages = [
  { src: "/images/projects/swiftbill-landing_page.png", label: "Landing Page" },
  { src: "/images/projects/swiftbill-dashboard.png", label: "Authenticated Dashboard" },
  { src: "/images/projects/swiftbill-invoice_builder1.png", label: "Invoice Builder — Editor" },
  { src: "/images/projects/swiftbill-invoice_builder2.png", label: "Invoice Builder — Settings" },
];

const mobileImages = [
  { src: "/images/projects/swiftbill-mobile_landing_page.jpeg", label: "Mobile Landing Page" },
  { src: "/images/projects/swiftbill-mobile_dashboard.jpeg", label: "Mobile Dashboard" },
  { src: "/images/projects/swiftbill-mobile_invoice_builder.jpeg", label: "Mobile Invoice Builder" },
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

export default function SwiftBillPage() {
  const techStack = ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Supabase", "NextAuth", "jspdf/jspdf-autotable"];

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
      problem: "Letting visitors try the product with zero friction while still giving signed-up users full persistence.",
      solution: "Built a stateless guest invoice builder (PDF download only, localStorage autosave for draft protection) alongside a full authenticated dashboard with database-backed invoices, customers, and items — so users can evaluate the product before committing to an account.",
    },
    {
      problem: "Preventing duplicate invoice numbers (e.g., INV-001) if multiple creation requests are processed concurrently.",
      solution: "Implemented atomic invoice numbering using database-level transactions with Prisma to ensure sequence integrity.",
    },
    {
      problem: "Generating professional PDFs without heavy backend processing overhead or complex server dependencies.",
      solution: "Handled PDF generation entirely on the client-side directly in the browser, offering multiple templates (Minimal, Modern, Classic).",
    },
    {
      problem: "Ensuring the dashboard remains fast and responsive as users accumulate hundreds of invoices.",
      solution: "Replaced bulk data fetching with server-side pagination using Next.js App Router and Prisma, loading data only as needed.",
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
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-[#3b82f6]">SwiftBill</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A full-stack invoice platform for freelancers. Try it instantly as a guest with PDF-only downloads, or sign up for a full dashboard to save clients, items, and invoice history. Features atomic invoice numbering and client-side PDF generation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://swiftbill-swart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline"
            >
              <ExternalLink className="w-4 h-4" /> Visit Live Site
            </a>
            <a
              href="https://github.com/MairoPedroIsaac/swiftbill"
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
            <div><div className="text-3xl font-bold text-blue-400">2026</div><div className="text-gray-400 text-sm mt-1">Year Built</div></div>
            <div><div className="text-3xl font-bold text-blue-400">Next.js 15</div><div className="text-gray-400 text-sm mt-1">Primary Stack</div></div>
            <div><div className="text-3xl font-bold text-blue-400">{pagesCount}+</div><div className="text-gray-400 text-sm mt-1">Pages Built</div></div>
            <div><div className="text-3xl font-bold text-blue-400">Production</div><div className="text-gray-400 text-sm mt-1">Status</div></div>
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
                Traditional accounting software is often too complex and bloated for freelancers and small business owners who just need to generate a professional invoice quickly. Furthermore, most platforms force users to create an account before they can even try the product, causing massive friction for single-use or first-time visitors.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Solution</h2>
              <p className="text-gray-400 leading-relaxed">
                SwiftBill delivers a frictionless experience by offering two distinct paths: a stateless guest invoice builder right on the landing page for immediate use (with localStorage draft protection), and a fully authenticated dashboard powered by NextAuth, PostgreSQL, and Prisma for users who want persistent storage, analytics, and historical tracking.
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
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-4">
          <h2 className="text-2xl font-bold text-white">The Result</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            SwiftBill is successfully deployed on Vercel, providing a blazing-fast, robust invoicing solution. With a modern Next.js App Router architecture and server-side pagination, the platform maintains exceptional performance even as user data grows. The client-side PDF generation allows for immediate invoice downloads, minimizing server load while delivering professional-grade documents to users.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in web apps?{" "}
            <span className="text-[#3b82f6]">Let&apos;s connect.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building a SaaS product, custom dashboard, or need a full-stack engineer?
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
