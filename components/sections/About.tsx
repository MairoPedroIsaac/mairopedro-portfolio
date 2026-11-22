"use client";

import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { skills } from "@/lib/data";
import TechBadge from "@/components/ui/TechBadge";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";

const facts = [
  { value: "4", label: "Projects built and online" },
  { value: "1", label: "Client website delivered on time" },
  { value: "< 1 day", label: "To reply to your message" },
];

export default function About() {
  const updatedSkills = [...skills, "Node.js", "Express.js", "MongoDB", "Docker", "AWS", "Scikit-Learn"];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom space-y-20">
        <div className="grid md:grid-cols-12 gap-14 items-start">

          {/* Story */}
          <div className="md:col-span-7 space-y-6">
            <LineReveal
              as="h2"
              className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] text-black leading-[1.02]"
              lines={["One step", <span key="g" className="text-[#5E5E5E]">at a time.</span>]}
            />
            <Reveal className="space-y-5 text-neutral-700 text-lg leading-relaxed max-w-2xl">
              <p>
                I&apos;m Mairo, a full-stack developer. I build websites, web apps and mobile apps with Next.js,
                Django, Python and Node.js.
              </p>
              <p>
                Before I wrote code for a living, I spent years studying and testing trading strategies. That&apos;s
                where my patience for detail comes from, and why I enjoy building things around money and numbers,
                like SwiftBill and Influence Trading House.
              </p>
              <p>
                Powerhand Designs was built for a client. SwiftBill, NephroSasa and Influence Trading House I built
                to push myself further. Every project is a step up, and I give each one my full attention.
              </p>
              <p>
                If you message me, I&apos;ll be there. I reply quickly, I keep to the dates we agree on, and I
                don&apos;t hand over work I&apos;m not proud of.
              </p>
            </Reveal>
            <DownloadCVButton className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-[6px] hover:bg-[#5E5E5E] transition-colors duration-300 no-underline" iconClassName="w-4 h-4" />
          </div>

          {/* Tools */}
          <Reveal className="md:col-span-5 space-y-6" delay={150}>
            <h3 className="text-2xl font-bold text-black">What I work with</h3>
            <div className="flex flex-wrap gap-2.5">
              {updatedSkills.map((skill, index) => (
                <TechBadge key={index} tech={skill} className="!bg-white !border-neutral-200 hover:!border-black !text-neutral-700 !px-4 !py-2" />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Plain facts */}
        <div className="grid sm:grid-cols-3 border-t border-neutral-200">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 120} className="pt-8 sm:pr-8">
              <div className="font-display text-5xl font-extrabold tracking-tight text-black">{f.value}</div>
              <div className="text-neutral-500 text-sm mt-2">{f.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
