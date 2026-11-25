import Contact from "@/components/sections/Contact";
import LineReveal from "@/components/motion/LineReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="pt-36 md:pt-44 pb-14 md:pb-20 px-6 md:px-12 lg:px-24">
        <div className="container-page">
          <LineReveal
            as="h1"
            className="text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.98] text-white"
            lines={["Let's work", <span key="g" className="text-grey-2">together.</span>]}
          />
        </div>
      </section>
      <Contact />
    </main>
  );
}
