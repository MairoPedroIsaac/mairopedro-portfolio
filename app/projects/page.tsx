import type { Metadata } from "next";
import Work from "@/components/sections/Work";

export const metadata: Metadata = { title: "Projects", alternates: { canonical: "/projects" } };

export default function Page() {
  return (
    <div className="pt-16">
      <Work />
    </div>
  );
}
