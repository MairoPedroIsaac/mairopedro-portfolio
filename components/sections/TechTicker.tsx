"use client";

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
          <span
            key={index}
            className="inline-flex items-center gap-3 mx-6 text-gray-400 text-sm font-medium uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0"></span>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}