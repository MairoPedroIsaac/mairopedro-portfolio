import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  status: string;
  category: string;
  images: string[];
  featured: boolean;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  status,
  category,
  images,
  featured,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-navy-light rounded-xl overflow-hidden border border-navy-lighter hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative h-64 md:h-80 bg-navy-lighter overflow-hidden group">
        {/* PLACEHOLDER - Replace with your actual project screenshot */}
        <Image
          src={images[0] || "https://via.placeholder.com/800x600/1A2332/00D9FF?text=Project+Screenshot"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              status === "Completed"
                ? "bg-green-500/20 text-green-400 border border-green-500/50"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {featured && (
              <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/50">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400">{category}</p>
        </div>

        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-navy-lighter text-primary text-sm rounded-md border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}