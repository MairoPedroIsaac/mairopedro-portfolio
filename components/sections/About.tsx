"use client";

import { skills } from "@/lib/data";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setYearsCount(Math.min(Math.round(4 * progress), 4));
      setProjectsCount(Math.min(Math.round(3 * progress), 3));
      setSatisfactionCount(Math.min(Math.round(100 * progress), 100));

      if (step >= steps) {
        clearInterval(timer);
        setYearsCount(4);
        setProjectsCount(3);
        setSatisfactionCount(100);
      }
    }, duration / steps);
  };

  const updatedSkills = [...skills, "Node.js", "Express.js", "MongoDB", "Docker", "AWS", "Git"];

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container-custom space-y-16">

        {/* Top: 2-column grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column - Story */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Full-stack software engineer based in Kigali, Rwanda, building
                web applications at the intersection of fintech, healthcare, and AI.
              </p>
              <p>
                I work with Next.js, Django, Python, and Node.js to deliver
                solutions that are fast, scalable, and built for real-world
                impact. Having developed and tested trading strategies for 5+
                years, I bring a rare combination: technical expertise plus deep
                understanding of financial markets, risk management, and
                quantitative analysis.
              </p>
              <p>
                Recent work includes HealthVault Rwanda (healthcare platform
                streamlining patient records) and Powerhand Designs (website for
                a Pan-African branding agency).
              </p>
              <p>
                If you need a developer who speaks both code and finance, let's
                build.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Technical <span className="text-primary">Skills</span>
            </h3>
            <p className="text-gray-400">
              Technologies and tools I work with to bring ideas to life
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {updatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-navy rounded-lg border border-navy-lighter hover:border-primary hover:scale-105 transition-all duration-300 text-center"
                >
                  <span className="text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Stats - full width, centered */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">{yearsCount}+</div>
            <div className="text-gray-400 text-sm mt-1">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">{projectsCount}+</div>
            <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">{satisfactionCount}%</div>
            <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
          </div>
        </div>

      </div>
    </section>
  );
}