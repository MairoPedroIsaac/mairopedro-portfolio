import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col justify-end pt-32 pb-10 md:pb-14">
      <div className="container-site">
        <Reveal>
          <p className="label mb-6 md:mb-8">{site.role}</p>
        </Reveal>

        <h1 className="display text-[clamp(4.25rem,17vw,15rem)] !leading-[0.86]">
          <Reveal as="span" delay={80} className="block">Mairo</Reveal>
          <Reveal as="span" delay={160} className="block">Pedro Isaac</Reveal>
        </h1>

        <div className="mt-10 md:mt-14 grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal delay={260} className="md:col-span-6 lg:col-span-5">
            <p className="text-lg md:text-xl leading-relaxed text-mist">{site.tagline}</p>
          </Reveal>
          <Reveal delay={340} className="md:col-span-6 lg:col-span-7 flex flex-wrap gap-4 md:justify-end">
            <Link href="/#contact" className="btn-primary">
              Work with me <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/#work" className="btn-ghost">
              See my work
            </Link>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <div className="mt-16 md:mt-24 flex flex-col gap-3 border-t border-smoke/40 pt-6 sm:flex-row sm:justify-between">
            <p className="label">Available for new projects</p>
            <p className="label">Websites · Web apps · Mobile apps</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
