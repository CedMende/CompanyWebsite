import React from "react";
import { Target, Compass } from "lucide-react";
const VisionMission = () => {
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
              Vision
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Guiding principles that drive our work and shape our future
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <div className="group relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-900/20 dark:to-violet-800/10 transition-all duration-300 hover:shadow-lg border border-violet-100/50 dark:border-violet-800/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-600 dark:from-violet-600 dark:to-violet-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-violet-600 to-violet-400 dark:from-violet-400 dark:to-violet-600 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-violet-700/10 dark:bg-violet-700/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-violet-700 dark:text-violet-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              In 2030, Tech Pro 360° vision is to be the best IT Solutions in
              Nueva Ecija, a catalyst of change, guiding businesses through
              transformative innovations that create sustainable systems and
              position them for long-term success in an ever-evolving
              marketplace.
            </p>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-violet-200/30 dark:bg-violet-800/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
          </div>
          {/* Mission */}
          <div className="group relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/10 dark:to-orange-800/5 transition-all duration-300 hover:shadow-lg border border-orange-100/50 dark:border-orange-800/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-400 dark:to-orange-600 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Compass className="text-orange-500 dark:text-orange-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Tech Pro 360° strives to be a catalyst for progress, offering
              innovative IT services that deliver sustainable, customized
              programming solutions, empowering businesses to navigate the
              complexities of digital transformation.
            </p>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-orange-200/30 dark:bg-orange-800/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default VisionMission;