// PROJECT DATA
export const projects = [
  {
    id: 1,
    title: "NephroSasa Rwanda",
    description: "A web-based kidney risk-classification, health-record tracking, and teleconsultation platform for hypertensive and Type 2 diabetic patients in Rwanda. Features Random Forest ML risk classification (84.94% accuracy), encrypted QR-based medical record sharing, automated email alerts, and teleconsultations with verified nephrologists.",
    techStack: ["Next.js 16", "Django REST", "Python", "Scikit-Learn", "PostgreSQL", "QR Code", "SendGrid"],
    status: "Completed",
    category: "Capstone Project",
    images: [
      "/images/projects/nephrosasa-laptop-homepage.png",
      "/images/projects/nephrosasa-patient-dashboard.png",
      "/images/projects/nephrosasa-doctor-dashboard.png",
    ],
    featured: true,
    slug: "nephrosasa-rwanda",
    link: "/projects/nephrosasa-rwanda",
    externalLink: "https://nephrosasa-rwanda.vercel.app/en",
  },
  {
    id: 2,
    title: "Powerhand Design Website",
    description: "A professional business website for Powerhand Design, featuring a modern interface, responsive design, and seamless user experience. Built with Django to deliver a robust and scalable web solution.",
    techStack: ["Django", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Client Project",
    images: [
      "/images/projects/powerhand-desktop-hero.png",
    ],
    featured: false,
    slug: "powerhand-design",
    link: "/projects/powerhand-design",
    externalLink: "https://www.powerhanddesigns.com/",
  },
  {
    id: 3,
    title: "Influence Trading House",
    description: "Trading signals platform with account management, subscription services, and financial education. Built for serious traders.",
    techStack: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    status: "In Development",
    category: "Fintech Platform",
    images: [
      "/images/projects/influence-trading-desktop-hero.png",
    ],
    featured: false,
    slug: "influence-trading-house",
    link: "/projects/influence-trading-house",
    externalLink: "https://influence-trading-house.vercel.app",
  },
];

// SERVICES DATA
export const services = [
  {
    title: "Fintech & Trading Platforms",
    description: "Build secure, scalable financial applications—from trading dashboards to payment systems. With 5+ years in financial markets, I understand the domain, not just the code.",
    icon: "TrendingUp",
  },
  {
    title: "Healthcare & Data Systems",
    description: "HIPAA-compliant platforms for patient records, appointment scheduling, and medical data management. Secure, reliable, and built for healthcare workflows.",
    icon: "Heart",
  },
  {
    title: "Custom Web Development",
    description: "Full-stack applications tailored to your business needs. From MVP to production-ready platforms, I handle frontend, backend, database, and deployment.",
    icon: "Code",
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
  "Flutter",
  "RESTful APIs",
  "Responsive Design",
];

// CONTACT DATA
export const contact = {
  email: "mairopedroisaac@gmail.com",
  whatsapp: "250798972117",
  linkedin: "https://www.linkedin.com/in/mairo-pedro-isaac-3a0b59291/",
  whatsappMessage: "Hi Mairo, I'm interested in your web development services",
};