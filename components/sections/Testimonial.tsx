import { Quote } from "lucide-react";
import { testimonial } from "@/lib/data";

export default function Testimonial() {
  return (
    <section className="bg-black py-20 border-t border-white/10">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <p className="text-[#9A9A9A] text-xs font-semibold uppercase tracking-[0.25em] mb-3">Client Words</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
          What clients <span className="text-[#9A9A9A]">say</span>
        </h2>

        <figure className="relative max-w-4xl bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 md:p-12">
          <Quote className="w-10 h-10 text-white/20 mb-6" aria-hidden />
          <blockquote className="text-xl md:text-3xl leading-relaxed text-white font-medium">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold">
              {testimonial.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="text-white font-semibold">{testimonial.name}</div>
              <div className="text-neutral-400 text-sm">{testimonial.company}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
