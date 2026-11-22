"use client";

import Image from "next/image";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";

const promises = [
  { title: "Quick replies", text: "Message me and you hear back within a day." },
  { title: "On time", text: "I give you a date and I keep it." },
  { title: "Done properly", text: "I don't hand over half-finished work." },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-black pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10 items-end">

          {/* Words */}
          <div className="md:col-span-7 lg:col-span-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-8">
                <span className="font-display text-white text-lg md:text-xl font-extrabold uppercase tracking-[0.18em]">
                  Mairo Pedro Isaac
                </span>
                <span className="hidden sm:block h-5 w-px bg-white/30" aria-hidden></span>
                <span className="text-grey-1 text-sm md:text-base font-semibold uppercase tracking-[0.18em]">
                  Full-Stack Developer
                </span>
              </div>
            </Reveal>

            <LineReveal
              as="h1"
              delay={150}
              className="text-[2.7rem] sm:text-6xl lg:text-[5rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-white"
              lines={[
                "Built properly.",
                <span key="g" className="text-grey-2">Delivered on time.</span>,
              ]}
            />

            <Reveal delay={500}>
              <p className="mt-8 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl">
                I&apos;m Mairo. I build websites, web apps and mobile apps for businesses, with Next.js, Django and Node.js.
                Send me a message and I&apos;ll get back to you quickly.
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-9">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-white text-black font-semibold rounded-[6px] hover:bg-grey-1 transition-colors duration-300"
                >
                  Message me
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href="/projects" className="draw-link text-white font-semibold pb-0.5">
                  See my work
                </a>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative grain aspect-[4/5] w-full max-w-md md:ml-auto overflow-hidden rounded-[6px] bg-panel">
              <Image
                src="/images/profile.jpg"
                alt="Mairo Pedro Isaac"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="settle object-cover object-[center_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between text-sm">
                <div>
                  <div className="text-white font-semibold">Mairo Pedro Isaac</div>
                  <div className="text-grey-1 text-xs mt-0.5">Open to freelance work and full-time roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What you can count on */}
        <div className="mt-20 md:mt-28 grid sm:grid-cols-3 border-t border-white/15">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="pt-6 pb-2 sm:pr-8">
              <div className="text-white font-semibold">{p.title}</div>
              <div className="text-neutral-500 text-sm mt-1.5 leading-relaxed">{p.text}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
