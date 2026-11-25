import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";
import WorkList from "@/components/sections/WorkList";
import { projectOrder, projects } from "@/lib/data";

// Counted from the project list, so the numbers stay right when a project is added.
const total = projectOrder.length;
const forClients = projects.filter((p) => projectOrder.includes(p.slug) && p.category.startsWith("Client")).length;
const counts = [
  [total, total === 1 ? "Project" : "Projects"],
  [forClients, forClients === 1 ? "For a client" : "For clients"],
  [total - forClients, "Products of my own"],
] as const;
const pad = (n: number) => String(n).padStart(2, "0");

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
              One website for a client, and four products I built to push myself: invoicing, health records, renting
              in Kigali and trading. Every clip below is the real product. Click one to read how I built it.
            </p>
          </Reveal>
        </div>

        <Reveal className="container-custom mt-14 md:mt-20 grid grid-cols-3 border-t border-white/15" delay={250}>
          {counts.map(([n, label]) => (
            <div key={label} className="pt-6 pr-4">
              <div className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white tabular-nums">{pad(n)}</div>
              <div className="mt-2 text-sm text-grey-2">{label}</div>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-black pb-28 md:pb-36 px-6 md:px-12 lg:px-24">
        <div className="container-custom">
          <WorkList />
        </div>
      </section>
    </main>
  );
}
