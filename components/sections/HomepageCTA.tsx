import Link from "next/link";

export default function HomepageCTA() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container-custom">
        <div className="bg-[#050505] border border-white/10 rounded-2xl px-8 md:px-16 py-16 text-center space-y-6">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-widest rounded-full">
            Available for Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to work <span className="text-[#9A9A9A]">together?</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
            Open to freelance projects and full-time roles. Tell me what your business needs and let's build it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-[#CFCFCF] transition-all duration-300 hover:scale-105 no-underline"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 no-underline"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}