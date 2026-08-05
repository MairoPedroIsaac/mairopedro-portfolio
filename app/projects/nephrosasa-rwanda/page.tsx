"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight, Activity, ShieldCheck, QrCode, Stethoscope, Sparkles } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const desktopImages = [
  { src: "/images/projects/nephrosasa-laptop-homepage.png", label: "Homepage — Hero & Value Proposition" },
  { src: "/images/projects/nephrosasa-laptop-login.png", label: "Authentication & Role-Based Access" },
  { src: "/images/projects/nephrosasa-patient-dashboard.png", label: "Patient Dashboard — Longitudinal Risk Score" },
  { src: "/images/projects/nephrosasa-patient-vital-log.png", label: "Vital Signs Logging (BP, Blood Sugar, HbA1c)" },
  { src: "/images/projects/nephrosasa-patient-qrcode-sharing.png", label: "Patient Encrypted QR Code Record Sharing" },
  { src: "/images/projects/nephrosasa-doctor-dashboard.png", label: "Doctor Dashboard & Consultation Schedule" },
  { src: "/images/projects/nephrosasa-doctor-qrcode-scanner.png", label: "Doctor QR Scanner & Patient Record Access" },
];

const mobileImages = [
  { src: "/images/projects/nephrosasa-mobile-homepage.jpeg", label: "Mobile Homepage Hero" },
  { src: "/images/projects/nephrosasa-mobile-login.jpeg", label: "Mobile Authentication" },
  { src: "/images/projects/nephrosasa-mobile-dashboard.jpeg", label: "Mobile Patient Risk Dashboard" },
  { src: "/images/projects/nephrosasa-mobile-patient-vital-logs.jpeg", label: "Mobile Vitals Logging" },
  { src: "/images/projects/nephrosasa-mobile-patient-qrcode-share.jpeg", label: "Mobile QR Code Sharing" },
  { src: "/images/projects/nephrosasa-mobile-doctor-dashboard.jpeg", label: "Mobile Doctor Portal" },
  { src: "/images/projects/nephrosasa-mobile-doctor-qrcode-scanner.jpeg", label: "Mobile Doctor QR Scanner" },
];

function DesktopCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
  }, [images.length]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const prev = () => { setCurrent((p) => (p - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setCurrent((p) => (p + 1) % images.length); resetTimer(); };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button onClick={prev} aria-label="Previous image" className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex-1 rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
          <div className="relative w-full aspect-video overflow-hidden">
            {images.map((img, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <Image src={img.src} alt={img.label} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 80vw" priority={i === 0} />
              </div>
            ))}
            <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-white text-xs font-mono">{current + 1} / {images.length}</div>
          </div>
          <div className="px-4 py-3 bg-gray-900/90 border-t border-gray-800 flex items-center justify-between">
            <span className="text-gray-300 text-sm font-medium">{images[current].label}</span>
            <span className="text-xs text-blue-400 font-mono">Desktop View</span>
          </div>
        </div>
        <button onClick={next} aria-label="Next image" className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); resetTimer(); }} aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-7 h-2 bg-[#3b82f6]" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}

function MobileCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
  }, [images.length]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const prev = () => { setCurrent((p) => (p - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setCurrent((p) => (p + 1) % images.length); resetTimer(); };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} aria-label="Previous mobile screenshot" className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="w-[290px] rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
          <div className="relative h-[540px] w-full overflow-hidden bg-black">
            {images.map((img, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <Image src={img.src} alt={img.label} fill className="object-cover object-top" sizes="290px" priority={i === 0} />
              </div>
            ))}
            <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-white text-xs font-mono">{current + 1} / {images.length}</div>
          </div>
          <div className="px-3 py-3 bg-gray-900 border-t border-gray-800 text-center">
            <span className="text-gray-300 text-sm font-medium">{images[current].label}</span>
          </div>
        </div>
        <button onClick={next} aria-label="Next mobile screenshot" className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-800 hover:bg-[#3b82f6] border border-gray-700 flex items-center justify-center transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); resetTimer(); }} aria-label={`Go to mobile slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-7 h-2 bg-[#3b82f6]" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}

export default function NephroSasaRwandaPage() {
  const techStack = [
    "Next.js 16 (Turbopack)",
    "Django 4.2 REST Framework",
    "Python 3.12",
    "Scikit-Learn (Random Forest)",
    "SMOTE (Imbalanced-Learn)",
    "PostgreSQL / Supabase",
    "QR Code Encryption",
    "SendGrid API",
    "Tailwind CSS",
    "JWT Authentication",
  ];

  const [accuracyCount, setAccuracyCount] = useState(0);
  const [datasetCount, setDatasetCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setAccuracyCount(Math.min(Math.round(85 * progress), 85));
            setDatasetCount(Math.min(Math.round(1659 * progress), 1659));
            if (step >= steps) {
              clearInterval(timer);
              setAccuracyCount(85);
              setDatasetCount(1659);
            }
          }, duration / steps);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const challenges = [
    {
      problem: "Severe Clinical Dataset Imbalance & Risk of False Negatives",
      solution: "Implemented SMOTE (Synthetic Minority Over-sampling Technique) combined with StandardScaler and 5-Fold Stratified Cross-Validation on 1,659 clinical records to ensure 84.94% accuracy without missing pre-dialysis CKD cases.",
    },
    {
      problem: "Cross-Facility Patient Record Portability without Hardware Dependencies",
      solution: "Engineered an encrypted QR-code sharing system that allows patients to instantly grant doctors temporary, audited access to longitudinal vital logs using standard mobile device cameras.",
    },
    {
      problem: "Real-Time Clinical Escalation & Patient Alerts",
      solution: "Integrated automated SendGrid email alert triggers on every vital log submission, calculating risk tier shifts (Low, Medium, High) and prompting immediate nephrologist teleconsultations for at-risk patients.",
    },
    {
      problem: "Supabase PostgreSQL Connection Resilience on IPv4 Networks",
      solution: "Configured resilient transaction connection poolers with automated retry strategies and environment-based fallbacks to prevent DNS timeouts on cloud microservices.",
    },
    {
      problem: "Multi-Role Medical Workflow Security & Data Integrity",
      solution: "Implemented strict Django REST Framework JWT authentication, patient-doctor relationship mapping, and 100% automated integration test coverage across scheduling and risk estimation endpoints.",
    },
    {
      problem: "Clinical Alignment with International Nephrology Standards",
      solution: "Benchmarked AI risk probability thresholds (<0.30 Low, 0.30–0.60 Medium, >0.60 High) directly against KDIGO clinical stages of chronic kidney disease (eGFR and Serum Creatinine progression).",
    },
  ];

  const keyFeatures = [
    {
      icon: Activity,
      title: "Longitudinal AI Risk Scoring",
      desc: "Random Forest machine learning model evaluates 10 clinical vitals over time to classify pre-dialysis kidney disease risk into Low, Medium, or High.",
    },
    {
      icon: QrCode,
      title: "Encrypted QR Health Record Sharing",
      desc: "Patients generate unique QR code tokens to grant certified nephrologists instant, secure access to longitudinal blood pressure, blood glucose, and lab metrics.",
    },
    {
      icon: Stethoscope,
      title: "Teleconsultation & Doctor Portal",
      desc: "Verified nephrologists manage patient schedules, review longitudinal vitals charts, update consultation notes, and conduct virtual clinic follow-ups.",
    },
    {
      icon: ShieldCheck,
      title: "Automated Clinical Alert Pipeline",
      desc: "Instant automated SendGrid email notifications alert patients and care teams upon vital sign anomalies or elevated kidney risk predictions.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Back navigation */}
      <div className="container-custom pt-24 px-6 md:px-12 lg:px-24">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="section-padding">
        <div className="container-custom space-y-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="px-3 py-1 bg-green-900/50 text-green-400 border border-green-700/50 rounded-full text-xs font-semibold uppercase tracking-wider">
              Completed & Defended
            </span>
            <span className="px-3 py-1 bg-blue-900/50 text-blue-400 border border-blue-700/50 rounded-full text-xs font-semibold uppercase tracking-wider">
              Capstone Project
            </span>
            <span className="px-3 py-1 bg-purple-900/50 text-purple-400 border border-purple-700/50 rounded-full text-xs font-semibold uppercase tracking-wider">
              AI & HealthTech
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            NephroSasa <span className="text-[#3b82f6]">Rwanda</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            A Web-Based Longitudinal Kidney Risk-Classification, Health-Record Tracking, and Teleconsultation Platform for Hypertensive and Type 2 Diabetic Patients in Rwanda.
          </p>

          <p className="text-gray-400 text-base max-w-2xl">
            Powered by a Random Forest machine learning pipeline (84.94% accuracy), encrypted QR-code medical history exchange, automated clinical email alerts, and seamless nephrologist teleconsultations.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://nephrosasa-rwanda.vercel.app/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:bg-[#2563eb] transition-all duration-300 no-underline shadow-lg shadow-blue-500/20"
            >
              <ExternalLink className="w-4 h-4" /> Live Platform
            </a>
            <a
              href="https://github.com/MairoPedroIsaac/healthvault-rwanda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-[#3b82f6] text-white rounded-lg transition-colors no-underline bg-gray-900/50"
            >
              <Github className="w-4 h-4" /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* STATS & METRICS */}
      <section className="py-10 border-y border-gray-800 bg-gray-950/50">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 font-mono">{accuracyCount}%</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Model Accuracy (Random Forest)</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 font-mono">{datasetCount}</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Clinical Training Records</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 font-mono">10</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Clinical Biomarkers Tracked</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-green-400 font-mono">100%</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">Integration Tests Passed</div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section-padding">
        <div className="container-custom space-y-12">
          <div className="space-y-3">
            <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">System Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Core Architectural Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/40 transition-all duration-300 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-700/50 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESKTOP SCREENSHOTS */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">User Experience</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Desktop Interface</h2>
            </div>
          </div>
          <DesktopCarousel images={desktopImages} />
        </div>
      </section>

      {/* MOBILE SCREENSHOTS */}
      <section className="section-padding border-t border-gray-800 bg-gray-950/40">
        <div className="container-custom space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">Responsive & Portable</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mobile Views</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">Designed for on-the-go patient vital logging and quick QR scanning in Rwandan clinical environments.</p>
          </div>
          <MobileCarousel images={mobileImages} />
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-sm uppercase tracking-wider">
                <span>The Healthcare Problem</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Silent Progression & Specialist Shortage</h2>
              <p className="text-gray-400 leading-relaxed">
                Chronic Kidney Disease (CKD) often develops without early symptoms among hypertensive and diabetic adults. In Rwanda, with fewer than 15 nephrologists nationwide, primary care centers face immense barriers to early detection.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Patients visiting different district clinics carry paper notes or no records at all, preventing doctors from detecting longitudinal renal decline until patients reach catastrophic End-Stage Renal Disease (ESRD).
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <span>The Technical Solution</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">AI-Powered Longitudinal Closed-Loop Care</h2>
              <p className="text-gray-400 leading-relaxed">
                NephroSasa Rwanda connects patients and nephrologists into a unified, digital ecosystem. Patients log vitals (Blood Pressure, Fasting Blood Sugar, HbA1c, Creatinine, GFR, BUN) over time, and an integrated Random Forest model continuously generates risk classifications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When risk escalates, automated email notifications alert the care team, and the patient generates an encrypted QR code for instant, zero-friction medical record sharing during doctor consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CHALLENGES & ENGINEERING SOLUTIONS */}
      <section className="py-12 border-t border-gray-800 bg-gray-950/60">
        <div className="container-custom space-y-8">
          <div className="space-y-2">
            <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">Engineering Rigor</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Problems Solved</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((item, index) => (
              <div key={index} className="p-6 bg-gray-900/70 rounded-xl border border-gray-800 hover:border-gray-700 transition-all space-y-3">
                <div>
                  <div className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-1">Challenge</div>
                  <p className="text-gray-200 font-medium text-sm">{item.problem}</p>
                </div>
                <div className="pt-2 border-t border-gray-800/80">
                  <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-1">Engineered Solution</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom space-y-6">
          <div className="space-y-2">
            <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">Architecture</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Production Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2.5 bg-gray-900 text-[#3b82f6] rounded-lg border border-[#3b82f6]/30 text-sm font-medium hover:border-[#3b82f6] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="section-padding border-t border-gray-800 bg-gray-950/40">
        <div className="container-custom space-y-4">
          <p className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">Academic & Clinical Impact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Project Outcome & Defense</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl text-base md:text-lg">
            NephroSasa Rwanda was developed and successfully defended as a BSc (Hons) Software Engineering Capstone Project at the African Leadership University (ALU). The project demonstrated how combining lightweight machine learning models with accessible mobile-first web technologies can provide proactive, life-saving pre-dialysis kidney monitoring in resource-constrained healthcare environments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in healthtech, AI, or full-stack engineering?{" "}
            <span className="text-[#3b82f6]">Let's connect.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building something in healthcare, fintech, or scalable web platforms? Let's build together.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-lg transition-all duration-300 no-underline text-lg shadow-lg shadow-blue-500/20">
            Get In Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
