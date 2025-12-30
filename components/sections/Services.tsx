import { services } from "@/lib/data";
import { Code, Brain, Settings } from "lucide-react";

export default function Services() {
  const iconMap = {
    code: <Code className="w-12 h-12" />,
    brain: <Brain className="w-12 h-12" />,
    settings: <Settings className="w-12 h-12" />,
  };

  return (
    <section id="services" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-navy-light rounded-xl border border-navy-lighter hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="p-8 bg-navy-light rounded-xl border border-primary/30">
            <h3 className="text-3xl font-bold text-white mb-4">Project-Based Pricing</h3>
            <p className="text-gray-400 mb-6">
              Every project is unique. I offer transparent, competitive pricing based on your specific requirements.
            </p>
            <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary mb-6">
              <span>Starting from</span>
              <span>$300</span>
            </div>
            <p className="text-gray-400 mb-8">
              Final pricing depends on project scope, complexity, and timeline. Get a free consultation to discuss your needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}