import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = { title: "Services", alternates: { canonical: "/services" } };

export default function Page() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  );
}
