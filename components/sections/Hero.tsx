"use client";

import Image from "next/image";
import { ArrowDown, MapPin, Code2, Briefcase, Circle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-black to-black opacity-80"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Text Content */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Full-Stack Developer Specializing in Fintech, Healthcare{" "}
              <span className="text-[#3b82f6]">and AI-Driven Solutions</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              I build scalable web applications using Next.js, Django, and Node.js with a focus on fintech systems, health infrastructure, and ML-powered features.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/projects"
                className="px-8 py-4 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 no-underline"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-[#3b82f6] text-[#3b82f6] font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 no-underline"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right — Photo + Info Card */}
          <div className="flex flex-col items-center gap-6 mt-8">

            {/* Profile Circle */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-blue-400 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#3b82f6]/50">
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
            <div className="w-full max-w-sm bg-[#0d1117] border border-white/10 rounded-2xl p-5 space-y-3">

              {/* Card Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#3b82f6]/50">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mairo Pedro Isaac"
                    width={96}
                    height={96}
                    className="object-cover object-[center_50%] w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Mairo Pedro Isaac</div>
                  <div className="text-gray-400 text-xs">Full-Stack Developer</div>
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-xs tracking-wider flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> Role
                  </span>
                  <span className="text-gray-200 text-xs">Freelance Developer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-xs tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Location
                  </span>
                  <span className="text-gray-200 text-xs">Kigali, Rwanda</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-xs tracking-wider flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> Focus
                  </span>
                  <span className="text-gray-200 text-xs">Fintech · Healthcare · AI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-xs tracking-wider flex items-center gap-1">
                    <Circle className="w-3 h-3" /> Status
                  </span>
                  <span className="text-green-400 text-xs font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="/projects" className="text-[#3b82f6]">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}