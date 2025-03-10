import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGE } from "../src/constants/images";
const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-10");
      }
    }, {
      threshold: 0.1
    });
    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 dark:opacity-20 z-0">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-violet-200 dark:bg-violet-900 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/4 w-64 h-64 rounded-full bg-orange-200 dark:bg-orange-900 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-5 z-0"></div>
      <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-0 transform rotate-180 z-0">
        <svg className="relative block w-full h-12 md:h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
        opacity: 0.05
      }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-900 dark:fill-white"></path>
        </svg>
      </div>
      <div ref={heroRef} className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center transition-all duration-700 opacity-0 translate-y-10 relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <div className="inline-block mb-4 bg-violet-100 dark:bg-violet-900/30 px-4 py-1 rounded-full">
            <span className="text-violet-800 dark:text-violet-300 font-medium text-sm">
              Innovative IT Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Transforming Your{" "}
            <span className="text-violet-700 dark:text-violet-500 relative inline-block">
              Vision
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-violet-200 dark:text-violet-900" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="5" fill="none" />
              </svg>
            </span>{" "}
            into{" "}
            <span className="text-orange-500 dark:text-orange-400 relative inline-block">
              Reality
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200 dark:text-orange-900" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="5" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            We specialize in creating customized, web-based IT solutions that
            empower businesses to thrive in the digital landscape. Our expertise
            turns complex challenges into streamlined solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="group inline-flex items-center bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all duration-300 hover:shadow-violet-200 dark:hover:shadow-violet-900/30 hover:shadow-xl">
              Get a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
              View Our Portfolio
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-violet-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Client-Centric
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Innovation-Driven
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-violet-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Quality-Focused
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-gray-100 dark:border-gray-800">
            <img src={HERO_IMAGE} alt="Digital technology visualization" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/30 to-orange-500/20 dark:from-violet-600/40 dark:to-orange-500/30"></div>
            <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-2 animate-float">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                Live Projects
              </span>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-2 animate-float-delayed">
              <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900/50 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-violet-700 dark:text-violet-400">
                  A+
                </span>
              </div>
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                Quality Rating
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-orange-500/80 dark:bg-orange-600/80 rounded-full opacity-80 blur-2xl animate-pulse"></div>
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-violet-700/80 dark:bg-violet-600/80 rounded-full opacity-80 blur-2xl animate-pulse-slow"></div>
          <div className="absolute -right-8 bottom-12 w-16 h-16 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-violet-500/50 dark:bg-violet-400/50"></div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;