"use client";

import { services } from "@/lib/data";
import { Globe, Brain, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const iconMap = {
    code: <Globe className="w-10 h-10" />,
    brain: <Brain className="w-10 h-10" />,
    settings: <Settings className="w-10 h-10" />,
  };

  const nextSlide = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < services.length - 1) nextSlide();
    if (isRightSwipe && currentIndex > 0) prevSlide();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-rotate for better UX
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < services.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Loop back to start
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

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

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Carousel Track */}
          <div 
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-2"
                >
                  <div className="p-8 bg-navy-light rounded-xl border border-navy-lighter hover:border-primary/50 transition-all duration-300 group h-full min-h-[320px] md:min-h-[360px] flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center space-y-6">
                      {/* Icon */}
                      <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        {iconMap[service.icon as keyof typeof iconMap]}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation - Arrows & Dots */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center w-12 h-12 ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed bg-gray-700"
                  : "bg-primary/20 hover:bg-primary/40 text-white hover:scale-110"
              }`}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === services.length - 1}
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center w-12 h-12 ${
                currentIndex === services.length - 1
                  ? "opacity-30 cursor-not-allowed bg-gray-700"
                  : "bg-primary/20 hover:bg-primary/40 text-white hover:scale-110"
              }`}
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Professional Call-to-Action Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mt-16">
          <div className="p-8 md:p-12 bg-gradient-to-br from-navy-light to-navy-dark rounded-2xl border border-primary/20">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Build Something Amazing?
              </h3>
              
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Let's discuss how I can help bring your project to life with clean code, modern design, and reliable solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="p-6 bg-navy/50 rounded-lg border border-navy-lighter text-center">
                  <div className="text-primary text-xl font-bold mb-2">Free Consultation</div>
                  <p className="text-gray-400 text-sm">Discuss your project needs with no commitment</p>
                </div>
                
                <div className="p-6 bg-navy/50 rounded-lg border border-navy-lighter text-center">
                  <div className="text-primary text-xl font-bold mb-2">Clear Scope</div>
                  <p className="text-gray-400 text-sm">Detailed project plan with timeline & deliverables</p>
                </div>
                
                <div className="p-6 bg-navy/50 rounded-lg border border-navy-lighter text-center">
                  <div className="text-primary text-xl font-bold mb-2">Transparent Process</div>
                  <p className="text-gray-400 text-sm">Regular updates and collaborative development</p>
                </div>
              </div>
              
              <div className="pt-8">
                <a
                  href="#contact"
                  className="inline-block px-10 py-4 bg-primary text-navy font-bold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 text-lg"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}