import LineReveal from "@/components/motion/LineReveal";
import WorkList from "@/components/sections/WorkList";
import Reveal from "@/components/motion/Reveal";
import { projectOrder } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-black pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="container-page flex items-end justify-between gap-6">
          <LineReveal
            as="h1"
            className="text-6xl md:text-8xl font-extrabold tracking-[-0.04em] text-white leading-none"
            lines={["Projects"]}
          />
          {/* Counts itself from the project list */}
          <Reveal className="text-right pb-1 md:pb-2" delay={200}>
            <div className="font-display text-4xl md:text-6xl font-extrabold text-grey-1 leading-none tabular-nums">
              {String(projectOrder.length).padStart(2, "0")}
            </div>
            <div className="mt-2 text-xs md:text-sm text-grey-2">In total</div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black pb-28 md:pb-36 px-6 md:px-12 lg:px-24">
        <div className="container-page">
          <WorkList />
        </div>
      </section>
    </main>
  );
}
