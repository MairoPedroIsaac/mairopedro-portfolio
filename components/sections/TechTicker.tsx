"use client";

import TechBadge from "@/components/ui/TechBadge";

const techs = [
  "Next.js", "React", "Django", "Python", "JavaScript", "TypeScript",
  "Tailwind CSS", "PostgreSQL", "Node.js", "Express.js", "MongoDB",
  "Docker", "AWS", "RESTful APIs", "Git", "Responsive Design",
];

export default function TechTicker() {
  return (
    <section className="bg-black border-t border-b border-white/10 py-5 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...techs, ...techs].map((tech, index) => (
          <TechBadge 
            key={index} 
            tech={tech} 
            className="mx-6 !bg-transparent !border-none !text-gray-400 !text-sm !font-medium !uppercase !tracking-widest"
          />
        ))}
      </div>
    </section>
  );
}