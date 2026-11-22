import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TechTicker from "@/components/sections/TechTicker";
import HomepageCTA from "@/components/sections/HomepageCTA";
import Testimonial from "@/components/sections/Testimonial";
import WorkList from "@/components/sections/WorkList";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";

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
                A website I built for a client, and an app I built for freelancers. There&apos;s more on the projects
                page.
              </p>
              <Link href="/projects" className="draw-link inline-block mt-4 text-sm font-semibold text-white pb-0.5">
                See all 4 projects →
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
