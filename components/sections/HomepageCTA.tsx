import Link from "next/link";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";

export default function HomepageCTA() {
  return (
    <section className="bg-white text-black py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="container-page grid md:grid-cols-12 gap-10 items-end">
        <LineReveal
          as="h2"
          className="md:col-span-8 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.035em] leading-[0.98] text-black"
          lines={["Got something", <span key="g" className="text-grey-3">to build?</span>]}
        />
        <Reveal className="md:col-span-4" delay={200}>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Tell me what you need. I&apos;ll reply within a day and tell you straight if I&apos;m the right person for it.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-black text-white font-semibold rounded-[6px] hover:bg-grey-3 hover:text-white transition-colors duration-300"
            >
              Message me
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/projects" className="draw-link font-semibold text-black hover:text-black pb-0.5">
              See my work
            </Link>
          </div>
          <p className="mt-8 text-sm text-neutral-500">Open to freelance projects and full-time roles.</p>
        </Reveal>
      </div>
    </section>
  );
}
