import Link from "next/link";
import { contact } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = [
    contact.facebook.url && { label: "Facebook", href: contact.facebook.url },
    { label: "LinkedIn", href: contact.linkedin },
    { label: "GitHub", href: contact.github },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="border-t border-smoke/40">
      <div className="container-site py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-display text-lg tracking-[0.08em] text-white uppercase">
          Mairo Pedro Isaac
        </Link>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="label link-line hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="label !text-smoke !tracking-[0.18em]">© {year} All rights reserved</p>
      </div>
    </footer>
  );
}
