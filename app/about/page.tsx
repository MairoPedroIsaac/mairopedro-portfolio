import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = { title: "About", alternates: { canonical: "/about" } };

export default function Page() {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
}
