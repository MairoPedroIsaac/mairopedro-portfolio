import Reveal from "@/components/ui/Reveal";
import { testimonial } from "@/lib/data";

export default function Testimonial() {
  if (!testimonial.quote) return null;

  return (
    <section aria-label="Client testimonial" className="py-28 md:py-40 border-y border-smoke/40">
      <div className="container-site grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="label">Client words</p>
        </Reveal>
        <Reveal as="figure" delay={80} className="md:col-span-9">
          <blockquote className="text-3xl md:text-5xl leading-[1.2] font-light text-white">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-10 label">
            {testimonial.name && <span className="text-white">{testimonial.name}</span>}
            {testimonial.name && <span className="mx-3 text-smoke">/</span>}
            {testimonial.role}
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
