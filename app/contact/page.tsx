import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* Page Hero */}
      <section className="bg-coal pt-32 pb-16 border-b border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <p className="text-grey-2 text-xs font-semibold uppercase tracking-widest mb-4">Let's Talk</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Get In Touch</h1>
          <p className="text-neutral-400 mt-4 max-w-xl text-lg leading-relaxed">
            Whether you need a website, a web app or a mobile app, let's build something that brings your business more customers.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}
