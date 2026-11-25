import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { caseStudies, caseStudyOrder, type CaseStudy } from "@/lib/caseStudies";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import Stage3D from "./Stage3D";
import ScreensToggle from "./ScreensToggle";
import HomepageCTA from "@/components/sections/HomepageCTA";

export default function CaseStudyPage({ slug }: { slug: string }) {
  const c = caseStudies.find((x) => x.slug === slug) as CaseStudy;
  const nextSlug = caseStudyOrder[(caseStudyOrder.indexOf(slug) + 1) % caseStudyOrder.length];
  const next = caseStudies.find((x) => x.slug === nextSlug)!;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 md:pt-40 px-6 md:px-12 lg:px-24">
        <div className="container-page">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-grey-2 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <Reveal>
                <p className="text-sm text-grey-2 mb-5">{c.kind}</p>
              </Reveal>
              <LineReveal
                as="h1"
                className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] leading-[0.98]"
                lines={c.title.split(" ").length > 2 ? [c.title.split(" ").slice(0, 1).join(" "), c.title.split(" ").slice(1).join(" ")] : [c.title]}
              />
            </div>
            <Reveal className="md:col-span-4" delay={200}>
              <p className="text-lg text-neutral-400 leading-relaxed">{c.intro}</p>
              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
                {c.live && (
                  <a href={c.live} target="_blank" rel="noopener noreferrer" className="draw-link pb-0.5 inline-flex items-center gap-1">
                    Live site <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {c.github && (
                  <a href={c.github} target="_blank" rel="noopener noreferrer" className="draw-link pb-0.5 text-grey-1 hover:text-white inline-flex items-center gap-1">
                    Code on GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {c.links?.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="draw-link pb-0.5 text-grey-1 hover:text-white inline-flex items-center gap-1">
                    {l.label} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Plain facts */}
          <Reveal className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-white/15 text-sm" delay={300}>
            {[
              ["Role", c.role],
              ["Year", c.year],
              ["Status", c.status],
              ["Stack", c.stack.slice(0, 3).join(", ")],
            ].map(([k, v]) => (
              <div key={k} className="pt-5 pb-2 pr-6">
                <div className="text-grey-2">{k}</div>
                <div className="mt-1 text-white">{v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3D product stage */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
        <div className="container-page">
          <Stage3D video={c.video} poster={c.poster} phone={c.mobile[0].src} title={c.title} />
        </div>
      </section>

      {/* Numbers */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-y-10 border-y border-white/15 py-10 md:py-14">
          {c.stats.map((s) => (
            <div key={s.label} className="pr-6">
              <div className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
                {"value" in s ? <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} /> : s.text}
              </div>
              <div className="mt-2 text-sm text-grey-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem and approach */}
      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
        <div className="container-page grid md:grid-cols-2 gap-14 md:gap-20">
          {[
            ["The problem", c.problem],
            ["What I did", c.approach],
          ].map(([h, paras]) => (
            <Reveal key={h as string}>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">{h as string}</h2>
              <div className="mt-6 space-y-4 text-lg text-neutral-400 leading-relaxed">
                {(paras as string[]).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Screens */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
        <div className="container-page">
          <LineReveal as="h2" className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-10" lines={["The screens"]} />
          <ScreensToggle desktop={c.desktop} mobile={c.mobile} />
        </div>
      </section>

      {/* Companion app, when there is one */}
      {c.app && (
        <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
          <div className="container-page">
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end mb-10 md:mb-14">
              <div className="md:col-span-6">
                <Reveal>
                  <p className="text-sm text-grey-2 mb-5">Android app</p>
                </Reveal>
                <LineReveal as="h2" className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.02]" lines={[c.app.heading]} />
              </div>
              <Reveal className="md:col-span-6 space-y-4 text-lg text-neutral-400 leading-relaxed" delay={150}>
                {c.app.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="pt-3 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-semibold">
                  <a
                    href={c.app.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" /> Download the APK
                  </a>
                  <a href={c.app.code} target="_blank" rel="noopener noreferrer" className="draw-link pb-0.5 text-grey-1 hover:text-white inline-flex items-center gap-1">
                    App code on GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[8px] border border-white/10">
              <Image src={c.app.image} alt={`${c.title} Android app screens`} fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover" />
            </Reveal>

            {c.app.templates && (
              <Reveal className="mt-6 md:mt-8 relative aspect-[1600/620] overflow-hidden rounded-[8px] border border-white/10" delay={100}>
                <Image src={c.app.templates} alt="Minimal, Modern and Classic invoice designs" fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover" />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Problems solved */}
      <section className="bg-white text-black px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <LineReveal
              as="h2"
              className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] md:sticky md:top-32 text-black"
              lines={["Problems", <span key="g" className="text-grey-3">I solved</span>]}
            />
          </div>
          <ol className="md:col-span-8">
            {c.solved.map((s, i) => (
              <Reveal key={s.problem}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-neutral-200 py-8">
                  <span className="font-display text-sm font-bold text-grey-2 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{s.problem}</p>
                    <p className="mt-3 text-neutral-600 leading-relaxed">{s.solution}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Result */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">The result</h2>
          </div>
          <Reveal className="md:col-span-8 space-y-5">
            {c.result.map((p) => (
              <p key={p} className="text-2xl md:text-3xl leading-snug text-white font-medium">
                {p}
              </p>
            ))}
            <p className="pt-6 text-sm text-grey-2">Built with {c.stack.join(", ")}.</p>
            {c.next && (
              <div className="pt-8 grid sm:grid-cols-2 gap-x-10">
                {c.next.map((n) => (
                  <div key={n.label} className="border-t border-white/15 py-5">
                    <div className="text-sm text-grey-2">{n.label}</div>
                    <div className="mt-1 text-white">{n.text}</div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
        <Link href={`/projects/${next.slug}`} className="group container-page block border-t border-white/15 pt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm text-grey-2">Next project</div>
              <div className="mt-3 text-4xl md:text-7xl font-extrabold tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2">
                {next.title} →
              </div>
            </div>
            <div className="relative hidden md:block w-80 aspect-[16/9] overflow-hidden rounded-[6px] border border-white/10">
              <Image src={next.poster} alt="" fill sizes="320px" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </Link>
      </section>

      <HomepageCTA />
    </main>
  );
}
