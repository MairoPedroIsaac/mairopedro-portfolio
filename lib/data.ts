// PROJECT DATA - EDIT YOUR PROJECT INFORMATION HERE
export const projects = [
  {
    id: 1,
    title: "Health Vault Rwanda",
    description: "Healthcare data management system giving patients ownership of their medical records. Patients carry their complete health history via QR code and control which doctors can access their records. The QR code contains an encrypted patient ID that acts as a key to unlock records.",
    techStack: ["Next.js", "Django", "QR Code Encryption", "PostgreSQL"],
    status: "In Development",
    category: "Capstone Project",
    images: [
      "/images/projects/healthvault-1.png", // REPLACE with your actual screenshot
      "/images/projects/healthvault-2.png", // REPLACE with your actual screenshot
    ],
    featured: true, // This project will be displayed prominently
    slug: "health-vault-rwanda", // ADD THIS: URL-friendly name
    link: "/projects/health-vault-rwanda", // ADD THIS: Case study page link
  },
  {
    id: 2,
    title: "Powerhand Design Website",
    description: "A professional business website for Powerhand Design, featuring a modern interface, responsive design, and seamless user experience. Built with Django to deliver a robust and scalable web solution.",
    techStack: ["Django", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Client Project",
    images: [
      "/images/projects/powerhand-1.png", // REPLACE with your actual screenshot
      "/images/projects/powerhand-2.png", // REPLACE with your actual screenshot
    ],
    featured: false,
    slug: "powerhand-design", // ADD THIS: URL-friendly name
    link: "/projects/powerhand-design", // ADD THIS: Case study page link
  },
  // ADD MORE PROJECTS HERE following the same format
  // {
  //   id: 3,
  //   title: "Project Name",
  //   description: "Project description...",
  //   techStack: ["Tech 1", "Tech 2"],
  //   status: "Completed",
  //   category: "Project Type",
  //   images: ["/images/projects/image.png"],
  //   featured: false,
  //   slug: "project-name", // Always add this
  //   link: "/projects/project-name", // Always add this
  // },
];

// SERVICES DATA (unchanged)
export const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies. From concept to deployment, I handle the complete development process.",
    icon: "code",
  },
  {
    title: "AI Integration",
    description: "Implementing AI solutions into existing systems. Enhance your applications with intelligent features and automation.",
    icon: "brain",
  },
  {
    title: "Custom Solutions",
    description: "Tailored software for specific business needs. Get exactly what your business requires with custom-built applications.",
    icon: "settings",
  },
];

// SKILLS DATA (unchanged)
export const skills = [
  "Next.js",
  "React",
  "Django",
  "Python",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
  "AI Integration",
  "RESTful APIs",
  "Responsive Design",
];

// CONTACT DATA - UPDATE WITH YOUR ACTUAL INFORMATION (unchanged)
export const contact = {
  email: "mairopedroisaac@gmail.com",
  whatsapp: "250798972117", // No + or spaces
  linkedin: "https://www.linkedin.com/in/mairo-pedro-isaac-3a0b59291/",
  whatsappMessage: "Hi Mairo, I'm interested in your web development services",
};