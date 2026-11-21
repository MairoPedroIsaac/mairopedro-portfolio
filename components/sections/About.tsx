import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { contact, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 scroll-mt-16">
      <div className="container-site">
        <SectionHeader index="03" label="About" title="Calm. Clear. Built to last." />

        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5 lg:col-span-4 md:col-start-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-coal">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Mairo Pedro Isaac"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale contrast-[1.08]"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-7 lg:col-span-6 lg:col-start-6 space-y-6 text-lg leading-relaxed">
            <p className="text-2xl md:text-3xl leading-snug text-white">
              I&apos;m Mairo, a full-stack developer who builds websites, web apps and mobile apps for small and growing businesses.
            </p>
            <p className="text-mist">
              I care about two things: work that looks premium, and work that brings you results. I handle everything from design to launch,
              so you have one person to talk to and nothing gets lost along the way.
            </p>
            <p className="text-mist">
              I&apos;ve shipped invoicing software, business websites, an AI health platform and a trading dashboard. Each one fast, clean and
              built to grow with the people using it.
            </p>

            <div className="pt-6 border-t border-smoke/40">
              <p className="label mb-4">Tools I use</p>
              <p className="text-ash text-base">{skills.join("  /  ")}</p>
            </div>

            {contact.cv && (
              <a href={contact.cv} download className="btn-ghost mt-4">
                Download CV <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
