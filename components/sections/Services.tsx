import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40 scroll-mt-16">
      <div className="container-site">
        <SectionHeader index="01" label="Services" title="What I build" />
        <ul className="border-b border-smoke/40">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 80} className="group grid gap-4 border-t border-smoke/40 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <span className="label md:col-span-3 md:pt-4">{s.number}</span>
                <h3 className="display text-5xl md:text-7xl md:col-span-5 transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="md:col-span-4 md:pt-3 text-base md:text-lg leading-relaxed text-ash group-hover:text-mist transition-colors duration-500">
                  {s.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
