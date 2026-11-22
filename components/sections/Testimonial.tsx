import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { testimonial } from "@/lib/data";

// The quote is the hero here. Augustine shows as a small profile picture next to his name.
export default function Testimonial() {
  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/10">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <Reveal>
          <figure className="relative mx-auto max-w-4xl">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-grey-2">
              In a client&apos;s words
            </p>

            {/* The words sit between an opening and a closing quotation mark */}
            <div className="relative mt-8 md:mt-10 px-10 sm:px-14 md:px-20">
              <span
                aria-hidden
                className="absolute left-0 -top-3 md:-top-5 font-display text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] leading-none text-white/25 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="text-[1.3rem] sm:text-[1.7rem] lg:text-[2rem] font-semibold leading-[1.38] tracking-[-0.015em] text-white text-balance">
                {testimonial.quote}
              </blockquote>
              <span
                aria-hidden
                className="absolute right-0 -bottom-12 sm:-bottom-16 md:-bottom-20 font-display text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] leading-none text-white/25 select-none"
              >
                &rdquo;
              </span>
            </div>

            <figcaption className="mt-14 md:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-7 border-t border-white/15">
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
    </section>
  );
}
