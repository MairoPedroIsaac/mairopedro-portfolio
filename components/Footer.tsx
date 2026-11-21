import Link from "next/link";
import Logo from "@/components/ui/Logo";
import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { Mail } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { contact } from "@/lib/data";

const socials = [
  { label: "WhatsApp", href: contact.whatsapp, Icon: FaWhatsapp },
  { label: "Facebook", href: contact.facebook, Icon: FaFacebookF },
  { label: "LinkedIn", href: contact.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: contact.github, Icon: FaGithub },
  { label: "Instagram", href: contact.instagram, Icon: FaInstagram },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10">

      {/* Main Footer */}
      <div className="container-custom px-6 md:px-12 lg:px-24 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="inline-block no-underline" aria-label="Mairo Pedro, home"><Logo /></Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer building websites, web apps and mobile apps for small and growing businesses.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="text-[#CFCFCF] text-sm">Available for work</span>
            </div>
            <div className="flex gap-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-[#CFCFCF] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.25em]">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.name} href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm no-underline w-fit">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.25em]">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9A9A9A] mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`mailto:${contact.email}`} className="text-neutral-200 text-sm hover:text-white transition-colors no-underline">
                    {contact.email}
                  </a>
                  <p className="text-neutral-500 text-xs">Responds within 24h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaFacebookF className="w-4 h-4 text-[#9A9A9A] mt-0.5 flex-shrink-0" />
                <div>
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-200 text-sm hover:text-white transition-colors no-underline">
                    {contact.facebookName}
                  </a>
                  <p className="text-neutral-500 text-xs">Facebook Page</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <DownloadCVButton
                    className="inline-flex items-center gap-3 text-neutral-200 text-sm hover:text-white transition-colors no-underline"
                    iconClassName="w-4 h-4 text-[#9A9A9A]"
                  />
                  <p className="text-neutral-500 text-xs pl-7">PDF</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-neutral-500 text-xs">© {currentYear} Mairo Pedro Isaac. All rights reserved.</p>
          <p className="text-neutral-500 text-xs">Full-Stack Developer</p>
        </div>
      </div>

    </footer>
  );
}
