import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = { title: "Contact", alternates: { canonical: "/contact" } };

export default function Page() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
