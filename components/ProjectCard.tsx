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
      className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{ transition: "none" }} // Remove all transitions
    >
      {/* Project Image */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        {/* PLACEHOLDER - Replace with your actual project screenshot */}
        <Image
          src={images[0] || "https://via.placeholder.com/800x600/111827/00D9FF?text=Project+Screenshot"}
          alt={title}
          fill
          className="object-cover"
          style={{ transition: "none" }} // Remove image hover scale
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              status === "Completed"
                ? "bg-green-900/50 text-green-400 border border-green-700/50"
                : "bg-blue-900/50 text-blue-400 border border-blue-700/50"
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
          <p className="text-sm text-gray-400">{category}</p>
        </div>

        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-[#00D9FF] text-sm rounded-md border border-[#00D9FF]/30"
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