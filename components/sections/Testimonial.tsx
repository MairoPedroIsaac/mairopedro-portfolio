import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ScrollZoom from "@/components/motion/ScrollZoom";
import { testimonial } from "@/lib/data";

export default function Testimonial() {
  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/10">
      <div className="container-custom px-6 md:px-12 lg:px-24">

        {/* Header: same style as Featured Projects */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] text-white">
            In a client&apos;s <span className="text-[#9A9A9A]">words</span>
          </h2>
        </div>

        <Reveal>
        <figure className="grid md:grid-cols-12 overflow-hidden rounded-[6px] border border-white/10 bg-[#0d0d0d]">
          {/* Photo */}
          <ScrollZoom className="relative md:col-span-5 aspect-[4/3] md:aspect-auto md:min-h-[460px] bg-[#e9e9e9]" from={1.1}>
            <div className="relative h-full w-full aspect-[4/3] md:aspect-auto md:min-h-[460px]">
            <Image
              src={testimonial.photo}
              alt={`${testimonial.name}, ${testimonial.role}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top grayscale"
            />
            </div>
          </ScrollZoom>

          {/* Quote */}
          <div className="md:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-10">
            <div>
              <div className="font-display text-7xl leading-none text-white/20 mb-2" aria-hidden>&ldquo;</div>
              <blockquote className="text-xl md:text-2xl lg:text-[1.75rem] leading-relaxed text-white font-medium">
                {testimonial.quote}
              </blockquote>
            </div>

            <figcaption className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-white text-lg font-bold">{testimonial.name}</div>
                <div className="text-[#9A9A9A] text-sm mt-1">{testimonial.role}</div>
              </div>
              <Link
                href={testimonial.caseStudy}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#CFCFCF] hover:text-white transition-colors no-underline"
              >
                See the project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </figcaption>
          </div>
        </figure>
        </Reveal>
      </div>
    </section>
  );
}
