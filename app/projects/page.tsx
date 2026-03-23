import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">

      {/* Page Hero */}
      <section className="bg-[#0a0f1a] pt-32 pb-16 border-b border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest mb-4">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Projects</h1>
              <p className="text-gray-400 mt-4 max-w-xl text-lg leading-relaxed">
                Real-world platforms built for fintech, healthcare, and trading. Deployed and used across Africa.
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-7xl font-bold text-white">3</p>
              <p className="text-gray-500 text-sm mt-1">Live Platforms</p>
            </div>
          </div>
        </div>
      </section>

      <Projects />
    </main>
  );
}
