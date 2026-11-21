import Services from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">

      {/* Page Hero */}
      <section className="bg-[#050505] pt-32 pb-16 border-b border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <p className="text-[#9A9A9A] text-xs font-semibold uppercase tracking-widest mb-4">Capabilities</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Services</h1>
          <p className="text-neutral-400 mt-4 max-w-xl text-lg leading-relaxed">
            End-to-end web development services, from product design to deployment. Built for small and growing businesses.
          </p>
        </div>
      </section>

      <Services />
    </main>
  );
}
