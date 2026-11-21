import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-40 scroll-mt-16">
      <div className="container-site">
        <SectionHeader index="02" label="Selected work" title="Projects" />

        <div className="space-y-28 md:space-y-44">
          {projects.map((p, i) => (
            <article key={p.slug} className="grid gap-10 md:grid-cols-12 md:gap-12 md:items-end">
              <Reveal className={`md:col-span-8 ${i % 2 ? "md:order-2" : ""}`}>
                <Link href={`/projects/${p.slug}`} className="group block overflow-hidden border border-smoke/30 bg-coal" aria-label={`${p.title} case study`}>
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </Link>
              </Reveal>

              <Reveal delay={120} className={`md:col-span-4 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="flex items-center justify-between gap-4 border-b border-smoke/40 pb-4 mb-8">
                  <span className="label">{p.number}</span>
                  <span className="label text-right">{p.status ?? p.category}</span>
                </div>
                <h3 className="display text-5xl md:text-6xl">{p.title}</h3>
                {p.status && <p className="label mt-4">{p.category}</p>}
                <p className="mt-6 text-base leading-relaxed text-mist">{p.summary}</p>
                <p className="mt-6 text-sm text-smoke">{p.stack.join("  /  ")}</p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  <Link href={`/projects/${p.slug}`} className="label !text-white link-line">
                    Case study
                  </Link>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="label link-line inline-flex items-center gap-1">
                      Live site <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="label link-line inline-flex items-center gap-1">
                      GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
