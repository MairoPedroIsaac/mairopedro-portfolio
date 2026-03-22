import { TrendingUp, Heart, Code } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Fintech & Trading Platforms",
    description:
      "Build secure, scalable financial applications — from trading dashboards to payment systems. With 5+ years in financial markets, I understand the domain, not just the code.",
    color: "border-[#3b82f6]",
    iconColor: "text-[#3b82f6]",
    iconBg: "bg-blue-500/10",
    deliverables: [
      "Trading signal platforms",
      "Payment & subscription systems",
      "Financial dashboards",
      "Fintech APIs & integrations",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare & Data Systems",
    description:
      "HIPAA-compliant platforms for patient records, appointment scheduling, and medical data management. Secure, reliable, and built for healthcare workflows.",
    color: "border-green-500",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    deliverables: [
      "Patient record management",
      "QR code-based access systems",
      "Multilingual health platforms",
      "Provider & patient portals",
    ],
  },
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Full-stack applications tailored to your business needs. From MVP to production-ready platforms, I handle frontend, backend, database, and deployment.",
    color: "border-purple-500",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    deliverables: [
      "Business websites & landing pages",
      "Full-stack web applications",
      "REST API development",
      "Cloud deployment & DevOps",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-[#3b82f6]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional development services tailored to your business needs
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-[#0d1117] rounded-xl border-t-4 ${service.color} border-l border-r border-b border-white/10 space-y-6 hover:bg-[#111827] transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${service.iconColor} bg-current flex-shrink-0`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-10 bg-[#0d1117] rounded-2xl border border-white/10 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            From Concept to Production.{" "}
            <span className="text-[#3b82f6]">Let's Talk.</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building a fintech platform, healthcare system, or custom web application? Let's discuss your project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2">
            <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-center">
              <div className="text-[#3b82f6] font-bold mb-1">Free Consultation</div>
              <p className="text-gray-500 text-xs">Discuss your project with no commitment</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-center">
              <div className="text-[#3b82f6] font-bold mb-1">Clear Scope</div>
              <p className="text-gray-500 text-xs">Detailed plan with timeline and deliverables</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-center">
              <div className="text-[#3b82f6] font-bold mb-1">Transparent Process</div>
              <p className="text-gray-500 text-xs">Regular updates and full project visibility</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#3b82f6] text-white font-bold rounded-lg hover:bg-[#2563eb] transition-all duration-300 no-underline text-lg"
          >
            Let's Build
          </a>
        </div>

      </div>
    </section>
  );
}