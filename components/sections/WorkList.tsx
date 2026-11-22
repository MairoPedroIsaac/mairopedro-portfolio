"use client";

import { projects } from "@/lib/data";
import ProjectReel from "@/components/ProjectReel";
import Reveal from "@/components/motion/Reveal";

// Client work first, then the products built to push further.
const order = ["powerhand-design", "swiftbill", "nephrosasa-rwanda", "influence-trading-house"];

export default function WorkList({ limit }: { limit?: number }) {
  const list = order
    .slice(0, limit ?? order.length)
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <div className="space-y-24 md:space-y-36">
      {list.map((p, i) => (
        <article key={p.slug} className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className={`md:col-span-8 ${i % 2 ? "md:order-2" : ""}`}>
            <ProjectReel video={p.video} poster={p.poster} title={p.title} href={p.link} />
          </div>

          <Reveal className={`md:col-span-4 ${i % 2 ? "md:order-1" : ""}`}>
            <div className="flex items-baseline justify-between border-b border-white/15 pb-4 mb-5">
              <span className="font-display text-5xl md:text-6xl font-extrabold text-white/15 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-grey-2">{p.category}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{p.title}</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">{p.summary}</p>
            <p className="mt-5 text-sm text-neutral-500">{p.techStack.slice(0, 4).join("  /  ")}</p>
            <div className="mt-7 flex gap-6 text-sm font-semibold">
              <a href={p.link} className="draw-link text-white pb-0.5">
                Case study
              </a>
              {p.externalLink && (
                <a
                  href={p.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="draw-link text-grey-1 hover:text-white pb-0.5"
                >
                  Live site ↗
                </a>
              )}
            </div>
          </Reveal>
        </article>
      ))}
    </div>
  );
}
