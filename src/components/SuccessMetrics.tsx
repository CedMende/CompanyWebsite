import React, { useEffect, useState, useRef } from "react";
import { Code, Shield, Users, Lightbulb } from "lucide-react";
const visionPillars = [{
  title: "Innovation First",
  value: "Forward",
  description: "Embracing emerging technologies",
  icon: <Lightbulb className="w-6 h-6" />
}, {
  title: "Client Centered",
  value: "Focus",
  description: "Solutions tailored to your needs",
  icon: <Users className="w-6 h-6" />
}, {
  title: "Quality Driven",
  value: "Excellence",
  description: "Building for reliability and performance",
  icon: <Shield className="w-6 h-6" />
}, {
  title: "Continuous Growth",
  value: "Evolution",
  description: "Always learning and improving",
  icon: <Code className="w-6 h-6" />
}];
const technologies = ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "MySQL", "Laravel", "Express", "Tailwind CSS", "AWS"];
const SuccessMetrics = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-violet-200/30 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30">
            <span className="text-violet-800 dark:text-violet-300 font-medium text-sm">
              Technology Vision
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Building{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
              Tomorrow's
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our approach to technology combines innovation with practicality to
            create solutions that stand the test of time
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visionPillars.map((pillar, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-700 dark:text-violet-400 mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-2">
                {pillar.value}
              </h3>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {pillar.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {pillar.description}
              </p>
            </div>)}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Technology Stack
          </h3>
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl overflow-hidden py-4" ref={scrollerRef}>
              <div className="tech-scroller flex">
                {technologies.map((tech, index) => <div key={index} className={`tech-item tech-item-${index % 10} flex-shrink-0 mx-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200`}>
                    {tech}
                  </div>)}
                {technologies.map((tech, index) => <div key={`duplicate-${index}`} className={`tech-item tech-item-${index % 10} flex-shrink-0 mx-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200`}>
                    {tech}
                  </div>)}
              </div>
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .tech-scroller {
                  animation: scroll 25s linear infinite;
                  display: inline-flex;
                  will-change: transform;
                }
                .tech-item {
                  position: relative;
                  border: 2px solid transparent;
                  background-clip: padding-box;
                }
                .tech-item::before {
                  content: "";
                  position: absolute;
                  top: -2px;
                  right: -2px;
                  bottom: -2px;
                  left: -2px;
                  z-index: -1;
                  border-radius: 9999px;
                }
                .tech-item-0::before {
                  background: #8b5cf6; /* Violet */
                }
                .tech-item-1::before {
                  background: #9d5cf0;
                }
                .tech-item-2::before {
                  background: #af5cea;
                }
                .tech-item-3::before {
                  background: #c15ce4;
                }
                .tech-item-4::before {
                  background: #d35cde;
                }
                .tech-item-5::before {
                  background: #e55cd8;
                }
                .tech-item-6::before {
                  background: #f15cb9;
                }
                .tech-item-7::before {
                  background: #f35c9a;
                }
                .tech-item-8::before {
                  background: #f55c7b;
                }
                .tech-item-9::before {
                  background: #f97316; /* Orange */
                }
                .tech-scroller:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SuccessMetrics;