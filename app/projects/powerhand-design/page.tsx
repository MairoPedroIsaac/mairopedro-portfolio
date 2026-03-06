"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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

      {/* Back navigation */}
      <div className="container-custom pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="section-padding">
        <div className="container-custom space-y-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="px-3 py-1 bg-green-900/50 text-green-400 border border-green-700/50 rounded-full text-sm font-semibold">
              Completed
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              Client Project
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            Powerhand <span className="text-[#3b82f6]">Design Website</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            A full-stack business website for a Pan-African branding agency, built with
            Django, fully responsive, and delivered with professional email infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://www.powerhanddesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
            <a
              href="https://github.com/MairoPedroIsaac/powerhanddesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-[#3b82f6] transition-colors no-underline"
            >
              <Github className="w-4 h-4" />
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW STATS — animated */}
      <section className="py-8 border-y border-gray-800">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#3b82f6]">2025</div>
              <div className="text-gray-400 text-sm mt-1">Year Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#3b82f6]">Django</div>
              <div className="text-gray-400 text-sm mt-1">Primary Stack</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#3b82f6]">{pagesCount}</div>
              <div className="text-gray-400 text-sm mt-1">Pages Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#3b82f6]">{responsiveCount}%</div>
              <div className="text-gray-400 text-sm mt-1">Responsive</div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP SCREENSHOTS */}
      <section className="section-padding">
        <div className="container-custom space-y-6">
          <h2 className="text-2xl font-bold text-white">Desktop Views</h2>
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/images/projects/powerhand-desktop-hero.png"
                alt="Powerhand Design - Hero Section"
                width={1280}
                height={720}
                className="w-full object-cover object-top"
              />
              <div className="px-4 py-3 bg-gray-900/50 text-gray-400 text-sm">
                Homepage - Hero Section
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/images/projects/powerhand-desktop-about.png"
                  alt="Powerhand Design - About Section"
                  width={800}
                  height={600}
                  className="w-full object-cover object-top"
                />
                <div className="px-4 py-3 bg-gray-900/50 text-gray-400 text-sm">
                  About Page
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/images/projects/powerhand-desktop-solutions.png"
                  alt="Powerhand Design - Solutions Section"
                  width={800}
                  height={600}
                  className="w-full object-cover object-top"
                />
                <div className="px-4 py-3 bg-gray-900/50 text-gray-400 text-sm">
                  Solutions Page
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SCREENSHOTS — centered */}
      <section className="py-8">
        <div className="container-custom space-y-6">
          <h2 className="text-2xl font-bold text-white">Mobile Views</h2>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/images/projects/powerhand-mobile-hero.jpeg"
                alt="Powerhand Mobile - Hero"
                width={390}
                height={844}
                className="w-full object-cover object-top"
              />
              <div className="px-3 py-2 bg-gray-900/50 text-gray-400 text-xs text-center">
                Hero
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/images/projects/powerhand-mobile-about.jpeg"
                alt="Powerhand Mobile - About"
                width={390}
                height={844}
                className="w-full object-cover object-top"
              />
              <div className="px-3 py-2 bg-gray-900/50 text-gray-400 text-xs text-center">
                About
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/images/projects/powerhand-mobile-solutions.jpeg"
                alt="Powerhand Mobile - Solutions"
                width={390}
                height={844}
                className="w-full object-cover object-top"
              />
              <div className="px-3 py-2 bg-gray-900/50 text-gray-400 text-xs text-center">
                Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE & SOLUTION */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Challenge</h2>
              <p className="text-gray-400 leading-relaxed">
                Powerhand Designs needed a professional web presence that matched their brand
                identity as a Pan-African agency. The site had to work flawlessly across all
                devices, include a custom email setup, and be built and maintained independently
                without relying on website builders.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">The Solution</h2>
              <p className="text-gray-400 leading-relaxed">
                Built a full-stack Django website from scratch covering five pages: Home, About,
                Solutions, Portfolio, and Contact. Configured DNS records on Namecheap with Zoho
                Mail to deliver a professional info@powerhanddesigns.com address. Solved
                device-specific layout issues and built an auto-scrolling client logo slider.
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
                    <div className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">
                      Problem
                    </div>
                    <p className="text-gray-300 text-sm">{item.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-2">
                      Solution
                    </div>
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
        <div className="container-custom space-y-6">
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-[#3b82f6] rounded-md border border-[#3b82f6]/30 text-sm font-medium"
              >
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
            Powerhand Designs launched with a fully responsive, professional website across all
            five pages. The client received a working business email, a polished online presence,
            and a scalable Django codebase they can build on. 100% client satisfaction.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a similar project?{" "}
            <span className="text-[#3b82f6]">Let's build.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Need a business website, custom web app, or full-stack solution? Let's talk.
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