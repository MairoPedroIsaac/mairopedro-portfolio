import LineReveal from "@/components/motion/LineReveal";
import WorkList from "@/components/sections/WorkList";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-black pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="container-custom text-center">
          <LineReveal
            as="h1"
            className="text-6xl md:text-8xl font-extrabold tracking-[-0.04em] text-white leading-none"
            lines={["Projects"]}
          />
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
