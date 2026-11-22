import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";
import WorkList from "@/components/sections/WorkList";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-black pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="container-custom grid md:grid-cols-12 gap-8 items-end">
          <LineReveal
            as="h1"
            className="md:col-span-7 text-6xl md:text-8xl font-extrabold tracking-[-0.04em] text-white leading-none"
            lines={["Projects"]}
          />
          <Reveal className="md:col-span-5" delay={150}>
            <p className="text-neutral-400 text-lg leading-relaxed">
              One website for a client, and three products I built to push myself: invoicing, health records and
              trading. Every clip below is the real product. Click one to read how I built it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-black pb-28 md:pb-36 px-6 md:px-12 lg:px-24">
        <div className="container-custom">
          <WorkList />
        </div>
      </section>
    </main>
  );
}
