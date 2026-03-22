import { contact } from "@/lib/data";
import { Mail, MessageCircle, Linkedin, Github, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  const mailtoLink = `mailto:${contact.email}`;

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Me",
      description: contact.email,
      link: mailtoLink,
      color: "bg-blue-500/10 text-[#3b82f6] border-blue-500/20",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "Connect on LinkedIn",
      description: "Let's grow our network",
      link: contact.linkedin,
      color: "bg-blue-600/10 text-blue-600 border-blue-600/20",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "View on GitHub",
      description: "Explore my projects and code",
      link: "https://github.com/MairoPedroIsaac",
      color: "bg-gray-500/10 text-gray-600 border-gray-500/20",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chat on WhatsApp",
      description: "Quick response guaranteed",
      link: whatsappLink,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let's <span className="text-[#3b82f6]">Work Together</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have a fintech, healthcare, or web project in mind? Let's talk about it.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          {/* Left — Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Open to new projects</h3>
              <p className="text-gray-500 leading-relaxed">
                I am currently available for freelance work and open to full-time opportunities. Whether you need a full-stack web application, a fintech platform, or a healthcare system — let's build something great together.
              </p>
            </div>

            {/* Meta info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Location</div>
                  <div className="text-sm text-gray-500">Kigali, Rwanda · EAT (UTC+3)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Response Time</div>
                  <div className="text-sm text-gray-500">Responds within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Status</div>
                  <div className="text-sm text-green-600 font-medium">Available for work</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Cards */}
          <div className="grid grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#3b82f6] hover:shadow-md transition-all duration-300 no-underline space-y-3"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${method.color}`}>
                  {method.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{method.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{method.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Or use the live chat widget in the bottom right corner for instant messaging
          </p>
        </div>

      </div>
    </section>
  );
}