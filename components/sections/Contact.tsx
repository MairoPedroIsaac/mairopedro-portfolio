import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-44 scroll-mt-16">
      <div className="container-site">
        <Reveal>
          <p className="label mb-8">
            <span className="text-smoke">04</span>
            <span className="mx-3 text-smoke">/</span>
            Contact
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display text-[clamp(3.25rem,11vw,10rem)]">
            Let&apos;s build
            <br />
            something great.
          </h2>
        </Reveal>

        <Reveal delay={160} className="mt-12 md:mt-16 max-w-xl">
          <p className="text-lg leading-relaxed text-mist">
            Tell me about your business and what you need. I'll get back to you with clear next steps.
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-14 md:mt-20 grid gap-10 border-t border-smoke/40 pt-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label mb-4">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="link-line break-all text-2xl sm:text-3xl md:text-4xl text-white font-medium"
            >
              {contact.email}
            </a>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 md:items-end md:text-right">
            {contact.facebook.url && (
              <div>
                <p className="label mb-4">Facebook</p>
                <a
                  href={contact.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line inline-flex items-center gap-2 text-xl text-white"
                >
                  {contact.facebook.label} <ArrowUpRight className="h-5 w-5" aria-hidden />
                </a>
              </div>
            )}
            {contact.cv && (
              <a href={contact.cv} download className="btn-ghost">
                Download CV <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-14">
          <a href={`mailto:${contact.email}?subject=New%20project`} className="btn-primary">
            Work with me <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
