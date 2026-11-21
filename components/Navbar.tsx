"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 border-b ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-smoke/30" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container-site flex h-18 md:h-20 items-center justify-between" aria-label="Main">
        <Link href="/" className="font-display text-xl tracking-[0.08em] text-white uppercase" onClick={() => setOpen(false)}>
          Mairo Pedro
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="label link-line hover:text-white">
              {l.name}
            </Link>
          ))}
          <Link href="/#contact" className="btn-ghost !py-3 !px-5">
            Work with me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative h-10 w-10 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`absolute left-2 right-2 h-px bg-white transition-transform duration-300 ${open ? "top-1/2 rotate-45" : "top-[15px]"}`} />
          <span className={`absolute left-2 right-2 h-px bg-white transition-transform duration-300 ${open ? "top-1/2 -rotate-45" : "top-[25px]"}`} />
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-x-0 top-18 bottom-0 bg-ink transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-site flex h-full flex-col justify-between pt-10 pb-12">
          <ul className="space-y-2">
            {links.map((l, i) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display block text-6xl py-2 text-white"
                  tabIndex={open ? 0 : -1}
                >
                  <span className="label mr-4 align-middle">0{i + 1}</span>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary justify-center" tabIndex={open ? 0 : -1}>
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
}
