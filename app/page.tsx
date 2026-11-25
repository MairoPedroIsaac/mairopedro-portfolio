import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TechTicker from "@/components/sections/TechTicker";
import HomepageCTA from "@/components/sections/HomepageCTA";
import Testimonial from "@/components/sections/Testimonial";
import WorkList from "@/components/sections/WorkList";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";
import { projectOrder } from "@/lib/data";

// Counted from the project list, so it stays right when a project is added.
const total = projectOrder.length;
const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const totalWord = words[total] ?? String(total);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechTicker />

      {/* Work */}
      <section className="bg-black py-24 md:py-32">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-16 md:mb-24">
            <LineReveal
              as="h2"
              className="md:col-span-7 text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white leading-none"
              lines={["Work"]}
            />
            <Reveal className="md:col-span-5">
              <p className="text-neutral-400 leading-relaxed">
                Two of the {totalWord} I&apos;ve built. A website for a client, and an invoicing app for freelancers.
              </p>
              <Link href="/projects" className="draw-link inline-block mt-4 text-sm font-semibold text-white pb-0.5">
                See all {total} projects →
              </Link>
            </Reveal>
          </div>

          <WorkList limit={2} />
        </div>
      </section>

      <Testimonial />
      <HomepageCTA />
    </main>
  );
}
