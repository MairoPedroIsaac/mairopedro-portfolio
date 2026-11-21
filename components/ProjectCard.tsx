import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  status: string;
  category: string;
  images: string[];
  featured: boolean;
  link?: string; // Add link prop if you want cards to be clickable
}

export default function ProjectCard({
  title,
  description,
  techStack,
  status,
  category,
  images,
  featured,
  link,
}: ProjectCardProps) {
  // Wrap the entire card in a link if link prop is provided
  const CardContent = (
    <div
      className={`bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800 ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{ transition: "none" }} // Remove all transitions
    >
      {/* Project Image */}
      <div className="relative h-auto bg-neutral-900 overflow-hidden">
        {/* PLACEHOLDER - Replace with your actual project screenshot */}
        <Image
          src={images[0] || "..."}
          alt={title}
          width={1280}
          height={720}
          className="w-full object-cover object-center"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              status === "Completed"
                ? "bg-[#9A9A9A] text-[#CFCFCF] border border-[#9A9A9A]"
                : "bg-[#9A9A9A] text-white border border-[#9A9A9A]"
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
              <span className="text-xs px-3 py-1 bg-[#00D9FF]/20 text-[#00D9FF] rounded-full border border-[#00D9FF]/50">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm text-neutral-400">{category}</p>
        </div>

        <p className="text-neutral-300 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-neutral-800 text-[#00D9FF] text-sm rounded-md border border-[#00D9FF]/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // If link is provided, wrap the card in a link
  if (link) {
    return (
      <a 
        href={link} 
        className="block no-underline"
        style={{ textDecoration: "none", transition: "none" }}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}