import Hero from "@/components/sections/Hero";
import TechTicker from "@/components/sections/TechTicker";
import HomepageCTA from "@/components/sections/HomepageCTA";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    number: "01",
    category: "CAPSTONE PROJECT",
    title: "Health Vault Rwanda",
    description:
      "Healthcare data management system giving patients ownership of their medical records. Patients carry their complete health history via QR code and control which doctors can access their records.",
    tech: ["Next.js", "Django", "QR Code Encryption", "PostgreSQL"],
    slug: "health-vault-rwanda",
    externalLink: "https://healthvault-rwanda-s42z.vercel.app/en",
    image: "/images/projects/healthvault-desktop-hero.png",
  },
  {
    number: "02",
    category: "CLIENT PROJECT",
    title: "Powerhand Designs",
    description:
      "Full branding agency website for a Pan-African design firm with offices in Port Harcourt and Kigali. Built with Django, featuring live chat integration, custom domain, and professional email setup.",
    tech: ["Django", "HTML", "CSS", "JavaScript"],
    slug: "powerhand-design",
    externalLink: "https://www.powerhanddesigns.com/",
    image: "/images/projects/powerhand-desktop-hero.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechTicker />

      {/* Featured Projects */}
      <section className="bg-black py-20">
        <div className="container-custom px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest mb-3">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="text-[#3b82f6] font-semibold hover:underline no-underline text-sm"
            >
              View All Projects →
            </Link>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-sm font-mono">{project.number}</span>
                    <span className="w-8 h-px bg-gray-600"></span>
                    <span className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="px-5 py-2.5 bg-[#3b82f6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-all no-underline"
                    >
                      View Case Study
                    </Link>
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all no-underline"
                    >
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomepageCTA />
    </main>
  );
}