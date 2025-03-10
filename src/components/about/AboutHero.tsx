import React from "react";
import { Building, Users, Award } from "lucide-react";
import { ABOUT_TEAM } from "../../src/constants/images";
const AboutHero = () => {
  return <section className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-200/50 dark:bg-violet-900/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200/50 dark:bg-orange-900/30 rounded-full blur-xl"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative">
              Pioneering{" "}
              <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent relative">
                Digital
                <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                  <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-300 dark:text-violet-800" />
                </svg>
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Transformation
              </span>{" "}
              in the Philippines
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded in October 2024, TechPro360 is a fresh force in digital
              innovation, focused on helping SMEs and government organizations
              embrace the future through cutting-edge technology solutions.
              Though we're new, our mission is clear: to make advanced
              technology accessible and impactful for Filipino businesses.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="group flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                    <Building className="w-3 h-3 text-violet-700 dark:text-violet-400" />
                  </div>
                  <span className="text-3xl font-bold text-violet-700 dark:text-violet-500">
                    4+
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 pl-8">
                  Solutions in Development
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-300"></div>
              </div>
              <div className="group flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Award className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-3xl font-bold text-violet-700 dark:text-violet-500">
                    100%
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 pl-8">
                  Client-Centric Approach
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-300"></div>
              </div>
              <div className="group flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                    <Users className="w-3 h-3 text-violet-700 dark:text-violet-400" />
                  </div>
                  <span className="text-3xl font-bold text-violet-700 dark:text-violet-500">
                    5+
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 pl-8">
                  Potential Partners
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-300"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/20 to-orange-500/10 dark:from-violet-600/30 dark:to-orange-500/20 z-10"></div>
              <img src={ABOUT_TEAM} alt="TechPro360 team collaboration" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700">
                Team Collaboration Session
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-violet-700/20 dark:bg-violet-600/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-lg border-4 border-white dark:border-gray-800 bg-gray-50 dark:bg-gray-700 -rotate-6 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutHero;