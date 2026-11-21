"use client";

import Image from "next/image";
import { Code2, Briefcase, Users, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-black to-black opacity-80"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/[0.04] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Text Content */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-[#CFCFCF] text-sm font-medium">Available for work</span>
            </div>

            <p className="text-[#9A9A9A] text-xs md:text-sm font-semibold uppercase tracking-[0.3em]">
              Mairo Pedro Isaac &nbsp;/&nbsp; Full-Stack Developer
            </p>

            <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white">
              Websites, web apps &amp; mobile apps that bring your business{" "}
              <span className="text-[#9A9A9A]">more customers.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl">
              I design and build fast, modern products for small and growing businesses, from first idea to launch, with Next.js, Django and Node.js.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-[#CFCFCF] transition-all duration-300 no-underline"
              >
                Work With Me <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-all duration-300 no-underline"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right: Photo + Info Card */}
          <div className="flex flex-col items-center gap-6 mt-8">

            {/* Profile Circle */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-neutral-600 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/25">
                <Image
                  src="/images/profile.jpg"
                  alt="Mairo Pedro Isaac"
                  fill
                  className="object-cover object-[center_50%]"
                  priority
                />
              </div>
            </div>

            {/* Info Card */}
            <div className="w-full max-w-sm bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 space-y-3">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <div className="text-white font-semibold text-sm">Mairo Pedro Isaac</div>
                  <div className="text-neutral-400 text-xs">Full-Stack Developer</div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 text-[10px] uppercase tracking-widest text-[#CFCFCF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Available
                </span>
              </div>

              {/* Card Details */}
              <div className="space-y-2.5 text-sm">
                {[
                  { Icon: Briefcase, label: "Builds", value: "Websites · Web apps · Mobile apps" },
                  { Icon: Users, label: "For", value: "Small & growing businesses" },
                  { Icon: Code2, label: "Stack", value: "Next.js · Django · Node.js" },
                  { Icon: Rocket, label: "Shipped", value: "4 live platforms" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-4">
                    <span className="text-neutral-500 uppercase text-xs tracking-wider flex items-center gap-1.5">
                      <Icon className="w-3 h-3" /> {label}
                    </span>
                    <span className="text-neutral-200 text-xs text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}