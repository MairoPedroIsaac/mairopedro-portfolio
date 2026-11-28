// PROJECT DATA
export const projects = [
  {
    id: 1,
    title: "NephroSasa",
    description: "A web-based kidney risk-classification, health-record tracking, and teleconsultation platform for hypertensive and Type 2 diabetic patients. Features Random Forest ML risk classification (84.94% accuracy), encrypted QR-based medical record sharing, automated email alerts, and teleconsultations with verified nephrologists.",
    techStack: ["Next.js 16", "Django REST", "Python", "Scikit-Learn", "PostgreSQL", "QR Code", "SendGrid"],
    status: "Completed",
    category: "Capstone Project",
    images: [
      "/projects/nephrosasa/nephrosasa-home.webp",
      "/projects/nephrosasa/nephrosasa-patient-dashboard.webp",
      "/projects/nephrosasa/nephrosasa-doctor-dashboard.webp",
    ],
    featured: true,
    slug: "nephrosasa-rwanda",
    summary: "Kidney risk checks and health records for patients with high blood pressure or diabetes. A trained model flags risk, and patients share records with doctors through a secure QR code.",
    video: "/videos/nephrosasa.mp4",
    poster: "/videos/nephrosasa-poster.jpg",
    phoneVideo: "/videos/nephrosasa-phone.mp4",
    phonePoster: "/videos/nephrosasa-phone-poster.jpg",
    link: "/projects/nephrosasa-rwanda",
    externalLink: "https://nephrosasa-rwanda.vercel.app/en",
  },
  {
    id: 2,
    title: "Powerhand Designs",
    description: "A professional business website for Powerhand Design, featuring a modern interface, responsive design, and seamless user experience. Built with Django to deliver a robust and scalable web solution.",
    techStack: ["Django", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Client Project",
    images: [
      "/images/projects/powerhand-desktop-hero.png",
    ],
    featured: false,
    slug: "powerhand-design",
    summary: "Website for a design agency, built for my client Augustine. Live on its own domain, with live chat and business email set up.",
    video: "/videos/powerhand.mp4",
    poster: "/videos/powerhand-poster.jpg",
    link: "/projects/powerhand-design",
    externalLink: "https://www.powerhanddesigns.com/",
  },
  {
    id: 3,
    title: "SwiftBill",
    description: "Invoicing for freelancers and small teams, on the web and on Android. One account on both, three invoice designs, logo upload, RWF and other currencies, and PDFs you can share straight to WhatsApp.",
    techStack: ["Next.js 15", "React Native", "Expo", "PostgreSQL", "TypeScript", "Prisma", "NextAuth", "jsPDF"],
    status: "Completed",
    category: "Web and Android App",
    images: [
      "/images/projects/swiftbill-web-landing.webp",
    ],
    featured: true,
    slug: "swiftbill",
    summary: "Invoices for freelancers, on the web and on Android. One account on both, three invoice designs, and PDFs you can share straight to WhatsApp.",
    video: "/videos/swiftbill.mp4",
    poster: "/videos/swiftbill-poster.jpg",
    phoneVideo: "/videos/swiftbill-phone.mp4",
    phonePoster: "/videos/swiftbill-phone-poster.jpg",
    link: "/projects/swiftbill",
    appLink: "https://github.com/MairoPedroIsaac/swiftbill-mobile/releases/latest",
    externalLink: "https://swiftbill-swart.vercel.app/",
  },
  {
    id: 4,
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
    summary: "A trading signals platform with accounts, subscriptions and lessons for traders. Still in progress.",
    video: "/videos/influence.mp4",
    poster: "/videos/influence-poster.jpg",
    link: "/projects/influence-trading-house",
    externalLink: "https://influence-trading-house.vercel.app",
  },
  {
    id: 5,
    title: "Hibare Stays",
    description: "A website for Hibare, a Kigali brand for furnished stays and rentals. Browse and filter homes, send enquiries, get an instant moving quote and list a property, with Google or email sign-in, photo uploads and a private back office for the team.",
    techStack: ["Next.js 16", "Prisma 7", "Neon Postgres", "Auth.js", "Cloudinary", "TypeScript", "Nodemailer", "Vercel"],
    status: "Completed",
    category: "Property Platform",
    images: [
      "/images/projects/hibare-web-home.webp",
    ],
    featured: true,
    slug: "hibare-stays",
    summary: "Furnished stays and rentals in Kigali. Browse homes, send an enquiry, get a moving quote or list your place, and the team runs it all from a back office.",
    video: "/videos/hibare.mp4",
    poster: "/videos/hibare-poster.jpg",
    phoneVideo: "/videos/hibare-phone.mp4",
    phonePoster: "/videos/hibare-phone-poster.jpg",
    link: "/projects/hibare-stays",
    externalLink: "https://hibare-stays.vercel.app",
  },
];

// The order projects appear in. Client work first, then the products built to push further.
export const projectOrder = ["powerhand-design", "hibare-stays", "swiftbill", "nephrosasa-rwanda", "influence-trading-house"];

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
// Never DISPLAY the phone number, city or country. The WhatsApp number is only used inside the chat link.
export const contact = {
  whatsapp: "https://wa.me/250798972117?text=Hi%20Mairo%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20work%20with%20you",
  email: "mairopedroisaac@gmail.com",
  linkedin: "https://www.linkedin.com/in/mairo-pedro-isaac-3a0b59291/",
  github: "https://github.com/MairoPedroIsaac",
  facebook: "https://www.facebook.com/profile.php?id=61596953393480",
  facebookName: "Mairo Pedro Dev",
  instagram: "https://www.instagram.com/mairo.codes",
  cv: "/cv/Mairo-Pedro-Isaac-CV.pdf",
};

// TESTIMONIAL
export const testimonial = {
  quote:
    "It was a pleasure working with Mairo. I truly appreciate his dedication, willingness to listen, and attention to detail. His delivery was excellent, on point, and right on time. I highly recommend working with him!",
  name: "Augustine Moses",
  role: "Owner, Powerhand Designs",
  photo: "/images/testimonials/augustine-moses.jpg",
  caseStudy: "/projects/powerhand-design",
};
