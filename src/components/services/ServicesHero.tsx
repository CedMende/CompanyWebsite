import React from "react";
import { Settings2 } from "lucide-react";
const ServicesHero = () => {
  return <section className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-violet-200/50 dark:bg-violet-900/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-orange-200/50 dark:bg-orange-900/30 rounded-full blur-xl"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 rounded-2xl flex items-center justify-center mb-8 transform hover:rotate-12 transition-transform duration-300 relative group">
            <div className="absolute inset-0 bg-white/50 dark:bg-white/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <Settings2 className="w-8 h-8 text-violet-700 dark:text-violet-400 relative z-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Custom{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent relative">
              IT Solutions
              <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="url(#gradient-line)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            for Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent relative">
              Business Needs
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed relative z-10">
            Discover our comprehensive range of IT solutions designed to
            streamline your operations, enhance efficiency, and drive business
            growth. Each solution is fully customizable to meet your specific
            requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm">
              <div className="w-2 h-2 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Fully Customizable
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm">
              <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300">
                24/7 Support
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm">
              <div className="w-2 h-2 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Regular Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesHero;