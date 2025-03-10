import React from "react";
import { Users, MapPin, Briefcase } from "lucide-react";
import { CULTURE_IMAGES } from "../../src/constants/images";
const CareersHero = () => {
  const scrollToTalentNetwork = () => {
    const element = document.getElementById("talent-network");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-12 w-40 h-40 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-12 w-60 h-60 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-200/50 dark:bg-violet-900/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200/50 dark:bg-orange-900/30 rounded-full blur-xl"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Team & Build the{" "}
              <span className="bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent relative">
                Future
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent relative">
                of IT Solutions
                <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                  <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-200 dark:text-violet-900" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              As a new startup, we're building our team carefully. While we're
              not currently accepting applications, we're excited about our
              growth plans and will be opening positions soon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="group flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-violet-700 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      5+
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Current Team
                    </p>
                  </div>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-300 mt-2"></div>
              </div>
              <div className="group flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      1
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Office Location
                    </p>
                  </div>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-violet-500 transition-all duration-300 mt-2"></div>
              </div>
              <div className="group flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-violet-700 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      Q3
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Hiring Begins
                    </p>
                  </div>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-300 mt-2"></div>
              </div>
            </div>
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-orange-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
              <button onClick={scrollToTalentNetwork} className="relative bg-violet-700 dark:bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-800 dark:hover:bg-violet-700 transition-colors shadow-lg">
                Join Our Talent Network
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-700/20 dark:bg-violet-600/20 rounded-full blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/20 to-orange-500/10 dark:from-violet-600/30 dark:to-orange-500/20 z-10"></div>
              <img src={CULTURE_IMAGES.workspace} alt="TechPro360 team collaboration" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700">
                Our Team Culture
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 rounded-lg border-4 border-white dark:border-gray-800 bg-gray-50 dark:bg-gray-700 rotate-6 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default CareersHero;