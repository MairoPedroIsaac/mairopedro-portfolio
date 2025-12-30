import { contact } from "@/lib/data";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

export default function Contact() {
  const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  const mailtoLink = `mailto:${contact.email}`;

  const contactMethods = [
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Me",
      description: contact.email,
      link: mailtoLink,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Chat on WhatsApp",
      description: "Quick response guaranteed",
      link: whatsappLink,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Linkedin className="w-12 h-12" />,
      title: "Connect on LinkedIn",
      description: "Let's grow our network",
      link: contact.linkedin,
      color: "from-blue-600 to-blue-400",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-navy-light">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? Reach out through any of these channels and let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-navy rounded-xl border border-navy-lighter hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {method.title}
              </h3>
              <p className="text-gray-400 text-center text-sm">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-lg">
            Or use the live chat widget in the bottom right corner for instant messaging
          </p>
        </div>
      </div>
    </section>
  );
}