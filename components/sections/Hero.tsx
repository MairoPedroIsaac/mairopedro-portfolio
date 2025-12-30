import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Full-Stack Developer Building{" "}
              <span className="text-primary">Modern Web Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              I build scalable web applications using Next.js, React, Django, and AI integration
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-navy font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-full blur-xl opacity-30"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50">
                {/* REPLACE this placeholder with your actual profile image */}
                {/* Put your image in: public/images/profile.jpg */}
                <Image
                  src="/images/profile.jpg"
                  alt="Mairo Pedro Isaac"
                  fill
                  className="object-cover object-centre"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-primary">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}