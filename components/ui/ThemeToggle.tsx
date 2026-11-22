"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

// Switch between the black mode and the sharp white mode. Remembers the choice.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) || "dark");
  }, []);

  const flip = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-fade");
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-fade"), 500);
  };

  const light = theme === "light";
  return (
    <button
      type="button"
      onClick={flip}
      role="switch"
      aria-checked={light}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Dark mode" : "Light mode"}
      className={`relative inline-flex h-8 w-[60px] shrink-0 items-center rounded-full border border-white/25 transition-colors duration-300 hover:border-white/60 ${className}`}
    >
      <Moon className="absolute left-2 h-3.5 w-3.5 text-grey-2" aria-hidden />
      <Sun className="absolute right-2 h-3.5 w-3.5 text-grey-2" aria-hidden />
      <span
        aria-hidden
        className="absolute top-[3px] left-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.15,1)]"
        style={{ transform: light ? "translateX(28px)" : "translateX(0)" }}
      >
        {light ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
