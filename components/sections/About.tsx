"use client";

import { skills } from "@/lib/data";
import { Code2, Database, Palette, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    // Animate counters when component mounts
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = 4 / steps;
    const projectsIncrement = 10 / steps;
    const satisfactionIncrement = 100 / steps;

    let years = 0;
    let projects = 0;
    let satisfaction = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      years += increment;
      projects += projectsIncrement;
      satisfaction += satisfactionIncrement;

      setYearsCount(Math.min(years, 4));
      setProjectsCount(Math.min(projects, 10));
      setSatisfactionCount(Math.min(satisfaction, 100));

      if (step >= steps) {
        clearInterval(timer);
        setYearsCount(4);
        setProjectsCount(10);
        setSatisfactionCount(100);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building complete web solutions from frontend to backend",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Architecting efficient and scalable database systems",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern UI/UX",
      description: "Creating beautiful, responsive user interfaces",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  // Updated skills array with Node.js and another skill
  const updatedSkills = [...skills, "Node.js", "FastAPI"];

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a software engineer passionate about building solutions that solve real problems. Based in Kigali, Rwanda, I specialize in creating modern, scalable web applications that help businesses grow and succeed.
              </p>
              <p>
                My expertise spans the full development stack, from crafting intuitive user interfaces with React and Next.js to building robust backends with Django/Python and Node.js. I focus on delivering high-quality solutions that are both functional and elegant.
              </p>
              <p>
                I specialize in building modern, scalable web applications for businesses. From concept to deployment, I handle the full development process, ensuring your project is delivered on time and exceeds expectations.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-navy rounded-lg border border-navy-lighter hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
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

            {/* Stats with Animation */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {yearsCount.toFixed(0)}+
                </div>
                <div className="text-gray-400 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {projectsCount.toFixed(0)}+
                </div>
                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {satisfactionCount.toFixed(0)}%
                </div>
                <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}