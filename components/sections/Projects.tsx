import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-[#3b82f6]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building modern web applications
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Screenshot */}
                <div className="relative rounded-xl overflow-hidden border border-white/10">
                  <div className="relative">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={1280}
                      height={800}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                    />
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-900/80 text-green-400 border border-green-700/50"
                          : "bg-blue-900/80 text-blue-400 border border-blue-700/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  {/* Number + Category */}
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 text-sm font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-8 bg-gray-700"></div>
                    <span className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 text-gray-300 rounded-md border border-white/10 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 no-underline text-sm"
                    >
                      View Case Study
                    </Link>
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-[#3b82f6] transition-all duration-300 no-underline text-sm"
                      >
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}