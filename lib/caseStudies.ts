// Content for each case study page. One shared layout renders all of them.

export type Shot = { src: string; label: string };
export type Stat = { value: number; suffix?: string; prefix?: string; label: string } | { text: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  status: string;
  intro: string;
  live?: string;
  github?: string;
  video: string;
  poster: string;
  stats: Stat[];
  problem: string[];
  approach: string[];
  desktop: Shot[];
  mobile: Shot[];
  solved: { problem: string; solution: string }[];
  stack: string[];
  result: string[];
  next?: { label: string; text: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "powerhand-design",
    title: "Powerhand Designs",
    kind: "Client website",
    year: "2025",
    role: "Design, build, domain and email setup",
    status: "Live",
    intro:
      "A business website for a branding agency. I built it from scratch in Django, set up their domain and business email, and handed it over on time.",
    live: "https://www.powerhanddesigns.com",
    github: "https://github.com/MairoPedroIsaac/powerhanddesigns",
    video: "/videos/powerhand.mp4",
    poster: "/videos/powerhand-poster.jpg",
    stats: [
      { value: 5, label: "Pages built" },
      { text: "Django", label: "Main stack" },
      { value: 100, suffix: "%", label: "Responsive" },
      { text: "On time", label: "Delivered" },
    ],
    problem: [
      "Powerhand Designs needed a professional website that matched their brand as an agency. It had to work on every device, come with a proper business email, and not depend on a website builder.",
    ],
    approach: [
      "I built five pages in Django: Home, About, Solutions, Portfolio and Contact. I set up the DNS records on Namecheap with Zoho Mail so the team got a real info@powerhanddesigns.com address.",
      "Along the way I fixed layout issues on specific phones and built a client logo slider that scrolls on its own.",
    ],
    desktop: [
      { src: "/images/projects/powerhand-desktop-hero.png", label: "Home" },
      { src: "/images/projects/powerhand-desktop-about.png", label: "About" },
      { src: "/images/projects/powerhand-desktop-solutions.png", label: "Solutions" },
      { src: "/images/projects/powerhand-desktop-collective-1.png", label: "Portfolio" },
      { src: "/images/projects/powerhand-desktop-collective-2.png", label: "Contact" },
    ],
    mobile: [
      { src: "/images/projects/powerhand-mobile-hero.jpeg", label: "Home" },
      { src: "/images/projects/powerhand-mobile-about.jpeg", label: "About" },
      { src: "/images/projects/powerhand-mobile-solutions.jpeg", label: "Solutions" },
      { src: "/images/projects/powerhand-mobile-collective-1.jpeg", label: "Portfolio" },
      { src: "/images/projects/powerhand-mobile-collective-2.jpeg", label: "Contact" },
    ],
    solved: [
      { problem: "The advert banner was cropped on phones and had hover effects nobody wanted.", solution: "Separate desktop and mobile images, shown plainly with no effects." },
      { problem: "On iPhone 13 the contact page was cut off and the navbar covered the content.", solution: "Added CSS for 390px screens with adjusted spacing." },
      { problem: "The client logo section was a static grid and felt flat.", solution: "Built a logo slider that loops on its own and pauses on hover." },
      { problem: "CSS and images were not loading properly in Django.", solution: "Set up Django static files and a clean folder structure." },
      { problem: "Business email needed MX, SPF and DKIM records on Namecheap for Zoho Mail.", solution: "Configured every record so info@powerhanddesigns.com sends and receives." },
    ],
    stack: ["Django", "Python", "HTML", "CSS", "JavaScript", "Namecheap DNS", "Zoho Mail"],
    result: [
      "Powerhand Designs launched with a responsive five page website, a working business email and a Django codebase they can grow. Augustine, the owner, said the delivery was on point and right on time.",
    ],
  },
  {
    slug: "swiftbill",
    title: "SwiftBill",
    kind: "Web app I built",
    year: "2026",
    role: "Product, design and full-stack build",
    status: "Live",
    intro:
      "Invoices for freelancers. Try it as a guest and download a PDF straight away, or sign up to keep your clients, items and invoice history.",
    live: "https://swiftbill-swart.vercel.app/",
    github: "https://github.com/MairoPedroIsaac/swiftbill",
    video: "/videos/swiftbill.mp4",
    poster: "/videos/swiftbill-poster.jpg",
    stats: [
      { value: 8, suffix: "+", label: "Pages built" },
      { value: 3, label: "PDF templates" },
      { text: "Next.js 15", label: "Main stack" },
      { text: "Live", label: "Status" },
    ],
    problem: [
      "Most accounting tools are too heavy for a freelancer who just needs a clean invoice. Many also make you create an account before you can even try them.",
    ],
    approach: [
      "SwiftBill gives two paths. A guest invoice builder right on the landing page, with drafts saved in the browser so nothing gets lost.",
      "And a full dashboard behind sign in, using NextAuth, PostgreSQL and Prisma, for people who want to keep clients, items and past invoices.",
    ],
    desktop: [
      { src: "/images/projects/swiftbill-landing_page.png", label: "Landing page" },
      { src: "/images/projects/swiftbill-dashboard.png", label: "Dashboard" },
      { src: "/images/projects/swiftbill-invoice_builder1.png", label: "Invoice builder" },
      { src: "/images/projects/swiftbill-invoice_builder2.png", label: "Invoice settings" },
    ],
    mobile: [
      { src: "/images/projects/swiftbill-mobile-homepage.jpeg", label: "Landing page" },
      { src: "/images/projects/swiftbill-mobile-dashboard.jpeg", label: "Dashboard" },
      { src: "/images/projects/swiftbill-mobile_invoice_builder.jpeg", label: "Invoice builder" },
    ],
    solved: [
      { problem: "Let visitors try it with zero friction, but still give signed up users saved data.", solution: "A guest builder that only downloads PDFs and autosaves drafts in the browser, next to a full dashboard backed by the database." },
      { problem: "Two invoices could get the same number if they were created at the same moment.", solution: "Invoice numbers are assigned inside a database transaction with Prisma, so the sequence never repeats." },
      { problem: "Making good looking PDFs without a heavy server.", solution: "PDFs are generated in the browser, with Minimal, Modern and Classic templates." },
      { problem: "Keeping the dashboard fast once someone has hundreds of invoices.", solution: "Server side pagination with the Next.js App Router and Prisma, loading only what is on screen." },
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Supabase", "NextAuth", "jsPDF"],
    result: [
      "SwiftBill is live on Vercel. Guests can make and download an invoice in a minute, and signed in users keep everything in one place. PDFs are made on the device, so downloads are instant.",
    ],
  },
  {
    slug: "nephrosasa-rwanda",
    title: "NephroSasa",
    kind: "Capstone project",
    year: "2026",
    role: "Research, machine learning and full-stack build",
    status: "Defended",
    intro:
      "Kidney risk checks and health records for people living with high blood pressure or type 2 diabetes, with secure record sharing and online visits with kidney doctors.",
    live: "https://nephrosasa-rwanda.vercel.app/en",
    github: "https://github.com/MairoPedroIsaac/healthvault-rwanda",
    video: "/videos/nephrosasa.mp4",
    poster: "/videos/nephrosasa-poster.jpg",
    stats: [
      { value: 85, suffix: "%", label: "Model accuracy" },
      { value: 1659, label: "Clinical records trained on" },
      { value: 10, label: "Health markers tracked" },
      { value: 100, suffix: "%", label: "Integration tests passing" },
    ],
    problem: [
      "Kidney disease often grows without symptoms in people with high blood pressure or diabetes, and there are very few kidney specialists.",
      "Patients moving between clinics often carry paper notes or nothing at all, so doctors can't see the decline until it is very late.",
    ],
    approach: [
      "Patients log their vitals over time: blood pressure, blood sugar, HbA1c, creatinine, GFR and more. A Random Forest model turns that history into a Low, Medium or High risk level.",
      "When risk goes up, the care team gets an email, and the patient can share their records with a doctor through an encrypted QR code.",
    ],
    desktop: [
      { src: "/images/projects/nephrosasa-laptop-homepage.png", label: "Home" },
      { src: "/images/projects/nephrosasa-laptop-login.png", label: "Sign in by role" },
      { src: "/images/projects/nephrosasa-patient-dashboard.png", label: "Patient risk over time" },
      { src: "/images/projects/nephrosasa-patient-vital-log.png", label: "Logging vitals" },
      { src: "/images/projects/nephrosasa-patient-qrcode-sharing.png", label: "QR record sharing" },
      { src: "/images/projects/nephrosasa-doctor-dashboard.png", label: "Doctor dashboard" },
      { src: "/images/projects/nephrosasa-doctor-qrcode-scanner.png", label: "Doctor QR scanner" },
    ],
    mobile: [
      { src: "/images/projects/nephrosasa-mobile-homepage.jpeg", label: "Home" },
      { src: "/images/projects/nephrosasa-mobile-login.jpeg", label: "Sign in" },
      { src: "/images/projects/nephrosasa-mobile-dashboard.jpeg", label: "Risk dashboard" },
      { src: "/images/projects/nephrosasa-mobile-patient-vital-logs.jpeg", label: "Logging vitals" },
      { src: "/images/projects/nephrosasa-mobile-patient-qrcode-share.jpeg", label: "QR sharing" },
      { src: "/images/projects/nephrosasa-mobile-doctor-dashboard.jpeg", label: "Doctor portal" },
      { src: "/images/projects/nephrosasa-mobile-doctor-qrcode-scanner.jpeg", label: "Doctor QR scanner" },
    ],
    solved: [
      { problem: "The clinical data was very unbalanced, which risks missing people who are actually sick.", solution: "SMOTE, scaling and 5-fold stratified cross validation on 1,659 records, reaching 84.94% accuracy without missing early cases." },
      { problem: "Moving a patient's records between clinics without special hardware.", solution: "Encrypted QR codes that give a doctor temporary, logged access using any phone camera." },
      { problem: "Getting the right people to act when risk rises.", solution: "Automatic SendGrid emails on every new vitals entry when the risk level changes." },
      { problem: "Database connections timing out on some networks.", solution: "Connection pooling with retries and fallbacks set by environment." },
      { problem: "Keeping patient and doctor data separate and safe.", solution: "JWT authentication in Django REST Framework, patient to doctor mapping, and integration tests across the key endpoints." },
      { problem: "Making the risk levels mean something to doctors.", solution: "Risk thresholds lined up with KDIGO kidney disease stages." },
    ],
    stack: ["Next.js 16", "Django REST Framework", "Python", "Scikit-Learn", "PostgreSQL", "Supabase", "SendGrid", "JWT", "Tailwind CSS"],
    result: [
      "NephroSasa was built and successfully defended as my BSc (Hons) Software Engineering capstone. It shows how a light machine learning model and a simple web app can help catch kidney problems earlier.",
    ],
  },
  {
    slug: "influence-trading-house",
    title: "Influence Trading House",
    kind: "Web app I'm building",
    year: "2025",
    role: "Product, design and frontend build",
    status: "In progress",
    intro:
      "A trading signals platform with dashboards, backtesting and lessons. It brings my years of trading together with my code. The frontend is done, the backend is next.",
    live: "https://influence-trading-house.vercel.app",
    github: "https://github.com/MairoPedroIsaac/influence-trading-house",
    video: "/videos/influence.mp4",
    poster: "/videos/influence-poster.jpg",
    stats: [
      { value: 8, suffix: "+", label: "Pages built" },
      { text: "Next.js 15", label: "Main stack" },
      { text: "Phase 1", label: "Frontend done" },
      { text: "2025", label: "Started" },
    ],
    problem: [
      "Most retail trading platforms are cluttered and loud, with no clear method behind their signals. I wanted something that feels calm and serious, closer to a trading desk than a casino.",
    ],
    approach: [
      "I built the frontend in Next.js 15, TypeScript and Tailwind v4: signal dashboards with confidence scores, a backtest panel and a full lessons section.",
      "Sign in runs on a mock auth layer with the same shape as the real one, so plugging in the backend later is a small change.",
    ],
    desktop: [
      { src: "/images/projects/influence-trading-desktop-hero.png", label: "Landing page" },
      { src: "/images/projects/influence-trading-desktop-dashboard.png", label: "Dashboard" },
      { src: "/images/projects/influence-trading-desktop-signals.png", label: "Signals" },
      { src: "/images/projects/influence-trading-desktop-education.png", label: "Lessons" },
      { src: "/images/projects/influence-trading-desktop-login.png", label: "Sign in" },
    ],
    mobile: [
      { src: "/images/projects/influence-trading-mobile-hero.jpeg", label: "Landing page" },
      { src: "/images/projects/influence-trading-mobile-dashboard.jpeg", label: "Dashboard" },
      { src: "/images/projects/influence-trading-mobile-signals.jpeg", label: "Signals" },
      { src: "/images/projects/influence-trading-mobile-education.jpeg", label: "Lessons" },
      { src: "/images/projects/influence-trading-mobile-login.jpeg", label: "Sign in" },
    ],
    solved: [
      { problem: "Tailwind v4 removed the old setup commands and @tailwind directives.", solution: "Moved to the single @import \"tailwindcss\" and configured everything in CSS." },
      { problem: "@apply inside @layer base broke the build after the upgrade.", solution: "Replaced it with plain CSS properties, which is also easier to debug." },
      { problem: "A Google Fonts import broke the build, because fonts were loaded twice.", solution: "Removed the CSS import and kept fonts in next/font only." },
      { problem: "Hydration errors from components using state without 'use client'.", solution: "A clear rule: anything interactive is a client component, everything else stays on the server." },
      { problem: "Every part of the UI depended on sign in, but there was no backend yet.", solution: "A mock auth context with the same interface as the real one, ready to swap for Supabase." },
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Vercel"],
    result: [
      "Phase 1 is live on Vercel: a complete, responsive frontend with signals, backtesting and lessons, ready for real data.",
    ],
    next: [
      { label: "Phase 2", text: "Django and PostgreSQL backend with real signal data" },
      { label: "Phase 3", text: "Machine learning: scikit-learn, XGBoost and FinBERT sentiment" },
      { label: "Phase 4", text: "Payments with Stripe and MTN MoMo" },
      { label: "Phase 5", text: "QuantConnect strategies and live trading" },
    ],
  },
];

export const caseStudyOrder = ["powerhand-design", "swiftbill", "nephrosasa-rwanda", "influence-trading-house"];
