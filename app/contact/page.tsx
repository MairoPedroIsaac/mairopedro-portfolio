import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* Page Hero */}
      <section className="bg-[#0a0f1a] pt-32 pb-16 border-b border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest mb-4">Let's Talk</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Get In Touch</h1>
          <p className="text-gray-400 mt-4 max-w-xl text-lg leading-relaxed">
            Whether you need a fintech platform, a healthcare system, or an AI-powered web app. Let's build something great together.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}
