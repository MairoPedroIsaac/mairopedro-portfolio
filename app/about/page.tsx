import About from "@/components/sections/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Page Hero */}
      <section className="bg-[#050505] pt-32 pb-16 border-b border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <p className="text-[#9A9A9A] text-xs font-semibold uppercase tracking-widest mb-4">Background</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">About Me</h1>
          <p className="text-neutral-400 mt-4 max-w-xl text-lg leading-relaxed">
            A full-stack developer building websites, web apps and mobile apps that help businesses win more customers.
          </p>
        </div>
      </section>

      <About />
    </main>
  );
}
