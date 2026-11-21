import { Globe, LayoutDashboard, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Fast, polished business websites that make a strong first impression and turn visitors into enquiries and paying customers.",
    deliverables: [
      "Business websites & landing pages",
      "Mobile-first, responsive design",
      "SEO basics & fast loading",
      "Custom domain & professional email",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Web Apps",
    description:
      "Custom tools built around how your business works: dashboards, booking, invoicing, client portals and secure logins.",
    deliverables: [
      "Dashboards & admin panels",
      "Payments & subscriptions",
      "Client & customer portals",
      "APIs, databases & deployment",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Smooth, reliable apps for iPhone and Android that keep your customers close and coming back.",
    deliverables: [
      "iOS & Android apps",
      "Booking & ordering apps",
      "Push notifications",
      "App store launch support",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#9A9A9A] text-xs font-semibold uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-[#9A9A9A]">Services</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
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
                className="group p-8 bg-[#0d0d0d] rounded-xl border-t-2 border-t-white/60 border-l border-r border-b border-white/10 space-y-6 hover:bg-[#141414] hover:-translate-y-1 hover:border-t-white transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9A9A9A] flex-shrink-0"></span>
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
        <div className="mt-16 p-10 bg-[#0d0d0d] rounded-2xl border border-white/10 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            From Concept to Production.{" "}
            <span className="text-[#9A9A9A]">Let's Talk.</span>
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Need a website, web app or mobile app for your business? Let's discuss your project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2">
            <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-center">
              <div className="text-white font-bold mb-1">Free Consultation</div>
              <p className="text-neutral-500 text-xs">Discuss your project with no commitment</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-center">
              <div className="text-white font-bold mb-1">Clear Scope</div>
              <p className="text-neutral-500 text-xs">Detailed plan with timeline and deliverables</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-center">
              <div className="text-white font-bold mb-1">Transparent Process</div>
              <p className="text-neutral-500 text-xs">Regular updates and full project visibility</p>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-[#CFCFCF] transition-all duration-300 no-underline text-lg"
          >
            Let's Build
          </a>
        </div>

      </div>
    </section>
  );
}