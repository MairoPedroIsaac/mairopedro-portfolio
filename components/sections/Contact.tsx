import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { contact } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { GmailLogo, WhatsAppLogo, FacebookLogo, LinkedInLogo } from "@/components/ui/BrandIcons";
import Reveal from "@/components/motion/Reveal";

export default function Contact() {
  const methods = [
    { Logo: GmailLogo, title: "Email", detail: contact.email, link: `mailto:${contact.email}` },
    { Logo: WhatsAppLogo, title: "WhatsApp", detail: "Quick replies, any time", link: contact.whatsapp },
    { Logo: FacebookLogo, title: "Facebook", detail: contact.facebookName, link: contact.facebook },
    { Logo: LinkedInLogo, title: "LinkedIn", detail: "Let's connect", link: contact.linkedin },
  ];

  return (
    <section id="contact" className="bg-black px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
      <div className="container-page grid md:grid-cols-12 gap-14 md:gap-10 items-start">
        {/* Left: info */}
        <Reveal className="md:col-span-5 space-y-6">
          <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
            I&apos;m open to freelance projects and full-time roles. Tell me what you need, and I&apos;ll reply within a
            day.
          </p>
          <div className="text-sm text-grey-2">
            Or use the live chat in the bottom right corner.
          </div>
          <DownloadCVButton
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-[6px] hover:bg-grey-1 transition-colors duration-300"
            iconClassName="w-4 h-4"
          />
        </Reveal>

        {/* Right: plain list with the real logos */}
        <div className="md:col-span-7 md:pl-10">
          {methods.map(({ Logo, title, detail, link }, i) => (
            <Reveal key={title} delay={i * 90}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-5 py-5"
              >
                <Logo className="w-8 h-8 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.15,1)] group-hover:scale-[1.18] group-hover:-rotate-6" />
                <div className="min-w-0 flex-1 transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.15,1)] group-hover:translate-x-2">
                  <div className="text-xl md:text-2xl font-semibold text-white">{title}</div>
                  <div className="text-sm text-neutral-500 mt-0.5 break-all">{detail}</div>
                </div>
                <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 transition-colors duration-300 group-hover:bg-white group-hover:border-white">
                  <ArrowUpRight className="w-4 h-4 text-grey-2 transition-all duration-500 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-0" />
                  <ArrowUpRight className="absolute w-4 h-4 text-black -translate-x-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </span>
                <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white/40 transition-transform duration-700 ease-[cubic-bezier(0.2,0.75,0.15,1)] group-hover:scale-x-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
