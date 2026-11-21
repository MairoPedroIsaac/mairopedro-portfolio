"use client";

import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/lib/data";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="no-underline" aria-label="Mairo Pedro, home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <DownloadCVButton className="inline-flex items-center justify-center min-w-[152px] gap-2 pl-4 pr-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#CFCFCF] transition-colors duration-300 no-underline" iconClassName="w-4 h-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white transition-colors" aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 bg-[#050505] border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <DownloadCVButton className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold no-underline" iconClassName="w-4 h-4" />
          </div>
        )}
      </div>
    </nav>
  );
}