import { Globe, LayoutDashboard, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Fast, polished business websites that make a strong first impression and turn visitors into enquiries and paying customers.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "SEO & speed",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Web Apps",
    description:
      "Custom tools built around how your business works: dashboards, booking, invoicing, client portals and secure logins.",
    deliverables: [
      "Dashboards",
      "Payments",
      "Client portals",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Smooth, reliable apps for iPhone and Android that keep your customers close and coming back.",
    deliverables: [
      "iOS & Android",
      "Booking & ordering",
      "App store launch",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-grey-2 text-xs font-semibold uppercase tracking-[0.25em]">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-grey-2">Services</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Three things, done properly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 md:p-10 bg-panel rounded-2xl border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span className="absolute top-8 right-8 text-sm font-semibold text-neutral-600">0{index + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-neutral-400 leading-relaxed">{service.description}</p>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-white/10 text-xs text-grey-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-10 md:p-14 bg-panel rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              From idea to launch. <span className="text-grey-2">Let&apos;s talk.</span>
            </h3>
            <p className="text-neutral-400 max-w-lg">
              Free first call, a clear plan and regular updates until your project is live.
            </p>
          </div>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-grey-1 transition-colors duration-300 no-underline whitespace-nowrap"
          >
            Work With Me <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
