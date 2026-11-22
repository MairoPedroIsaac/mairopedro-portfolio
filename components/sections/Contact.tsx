import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { contact } from "@/lib/data";
import { Clock, Download, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const contactMethods = [
    { icon: <SiGmail className="w-5 h-5" />, title: "Email Me", description: contact.email, link: `mailto:${contact.email}`, hover: "group-hover:bg-[#EA4335]" },
    { icon: <FaWhatsapp className="w-5 h-5" />, title: "Chat on WhatsApp", description: "Quick replies, any time", link: contact.whatsapp, hover: "group-hover:bg-[#25D366]" },
    { icon: <FaFacebookF className="w-5 h-5" />, title: "Facebook Page", description: contact.facebookName, link: contact.facebook, hover: "group-hover:bg-[#1877F2]" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, title: "Connect on LinkedIn", description: "Let's grow our network", link: contact.linkedin, hover: "group-hover:bg-[#0A66C2]" },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-grey-3 text-xs font-semibold uppercase tracking-[0.25em]">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Let&apos;s <span className="text-grey-2">Work Together</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Need a website, web app or mobile app for your business? Let&apos;s talk about it.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          {/* Left: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Open to new projects</h3>
              <p className="text-neutral-500 leading-relaxed">
                I&apos;m available for freelance work and open to full-time roles. Whether you need a fast business website,
                a custom web app or a mobile app, I&apos;ll take it from idea to launch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Response Time</div>
                  <div className="text-sm text-neutral-500">Responds within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Status</div>
                  <div className="text-sm text-neutral-500">Available for work</div>
                </div>
              </div>
            </div>

            <DownloadCVButton className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-grey-3 transition-colors duration-300 no-underline" iconClassName="w-4 h-4" />
          </div>

          {/* Right: Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline space-y-3"
              >
                <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                <div className={`w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center transition-colors duration-300 ${method.hover}`}>
                  {method.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">{method.title}</div>
                  <div className="text-xs text-neutral-500 mt-0.5 break-all">{method.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-400 text-sm">
            Or use the live chat in the bottom right corner for a quick message
          </p>
        </div>

      </div>
    </section>
  );
}
