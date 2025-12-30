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
  },
  // ADD MORE PROJECTS HERE following the same format
];

// SERVICES DATA
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

// SKILLS DATA
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

// CONTACT DATA - UPDATE WITH YOUR ACTUAL INFORMATION
export const contact = {
  email: "mairopedroisaac@gmail.com",
  whatsapp: "250798972117", // No + or spaces
  linkedin: "https://www.linkedin.com/in/mairo-pedro-isaac-3a0b59291/",
  whatsappMessage: "Hi Mairo, I'm interested in your web development services",
};