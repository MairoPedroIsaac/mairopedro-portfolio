// SITE CONTENT
// Edit this file to update copy across the site.

export const site = {
  name: "Mairo Pedro Isaac",
  role: "Full-Stack Developer",
  tagline: "Websites, web apps & mobile apps that bring your business more customers.",
  url: "https://mairopedro.com",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status?: string;
  summary: string;
  stack: string[];
  image: string;
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "swiftbill",
    number: "01",
    title: "SwiftBill",
    category: "Invoicing web app",
    summary:
      "Freelancers create and download a professional invoice in seconds, with no sign-up needed. Optional accounts save clients, items and full invoice history.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "/images/projects/swiftbill-landing_page.png",
    live: "https://swiftbill-swart.vercel.app/",
    github: "https://github.com/MairoPedroIsaac/swiftbill",
  },
  {
    slug: "powerhand-design",
    number: "02",
    title: "Powerhand Designs",
    category: "Business website",
    summary:
      "A complete website for a Pan-African branding agency, with live chat, a custom domain and professional email, so new clients can find them and get in touch right away.",
    stack: ["Django", "Python", "HTML", "CSS"],
    image: "/images/projects/powerhand-desktop-hero.png",
    live: "https://www.powerhanddesigns.com/",
    github: "https://github.com/MairoPedroIsaac/powerhanddesigns",
  },
  {
    slug: "nephrosasa-rwanda",
    number: "03",
    title: "NephroSasa",
    category: "AI health platform · Capstone",
    summary:
      "Spots kidney disease risk early for high-risk patients using a machine learning model with 84.94% accuracy, and lets doctors open records securely with a QR code.",
    stack: ["Next.js", "Django REST", "Scikit-Learn", "PostgreSQL"],
    image: "/images/projects/nephrosasa-laptop-homepage.png",
    live: "https://nephrosasa-rwanda.vercel.app/en",
    github: "https://github.com/MairoPedroIsaac/healthvault-rwanda",
  },
  {
    slug: "influence-trading-house",
    number: "04",
    title: "Influence Trading House",
    category: "Trading analytics platform",
    status: "In progress",
    summary:
      "Live trading signals, subscriptions and trader education in one focused dashboard, built to feel fast and trustworthy for serious traders.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/projects/influence-trading-desktop-hero.png",
    live: "https://influence-trading-house.vercel.app",
    github: "https://github.com/MairoPedroIsaac/influence-trading-house",
  },
];

export const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Fast, polished business websites that make a strong first impression and turn visitors into enquiries.",
  },
  {
    number: "02",
    title: "Web apps",
    description:
      "Custom tools like dashboards, booking systems and client portals, built around how your business actually works.",
  },
  {
    number: "03",
    title: "Mobile apps",
    description:
      "Smooth, reliable apps for iPhone and Android that keep your customers coming back.",
  },
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Django",
  "Python",
  "PostgreSQL",
  "Flutter",
  "Tailwind CSS",
];

// TESTIMONIAL
// Fill in the client's real words. The section stays hidden while quote is empty.
export const testimonial = {
  quote: "",
  name: "",
  role: "Powerhand Designs",
};

// CONTACT
// Never add a phone number, city or country here.
export const contact = {
  email: "mairopedroisaac@gmail.com",
  facebook: { label: "Mairo Pedro Dev", url: "" }, // add the Facebook Page URL
  linkedin: "https://www.linkedin.com/in/mairo-pedro-isaac-3a0b59291/",
  github: "https://github.com/MairoPedroIsaac",
  // Put the PDF at public/cv/Mairo-Pedro-Isaac-CV.pdf, then set this to "/cv/Mairo-Pedro-Isaac-CV.pdf".
  cv: "",
};
