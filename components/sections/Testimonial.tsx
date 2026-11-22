import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { testimonial } from "@/lib/data";

// The quote is the hero here. Augustine shows as a small profile picture next to his name.
export default function Testimonial() {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/10">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Label */}
          <Reveal className="md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-grey-2">
              In a client&apos;s words
            </p>
          </Reveal>

          <Reveal className="md:col-span-9" delay={120}>
            <figure>
              <div
                aria-hidden
                className="font-display text-[7rem] md:text-[10rem] leading-[0.7] h-[0.55em] text-white/25 select-none"
              >
                &ldquo;
              </div>
              <blockquote className="text-[1.75rem] sm:text-4xl lg:text-[3.1rem] font-semibold leading-[1.18] tracking-[-0.02em] text-white">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-12 md:mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-white/15">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-white text-lg font-bold leading-tight">{testimonial.name}</div>
                    <div className="text-grey-2 text-sm mt-1">{testimonial.role}</div>
                  </div>
                </div>
                <Link
                  href={testimonial.caseStudy}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-grey-1 hover:text-white transition-colors no-underline"
                >
                  See the project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
