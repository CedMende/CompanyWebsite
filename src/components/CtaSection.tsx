import React from "react";
import { Link } from "react-router-dom";
import { FileText, PhoneCall, ArrowRight } from "lucide-react";
const CtaSection = () => {
  return <section id="contact" className="w-full py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-orange-500 dark:from-violet-700 dark:to-orange-600"></div>
          {/* Decorative patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-24 h-24 rounded-full bg-white/20 absolute top-10 left-10 blur-xl"></div>
              <div className="w-32 h-32 rounded-full bg-orange-300/20 absolute bottom-10 right-10 blur-xl"></div>
              <div className="w-20 h-20 rounded-full bg-violet-300/20 absolute top-1/2 left-1/2 blur-lg"></div>
            </div>
            <svg className="absolute left-0 top-0 h-full w-full" width="100%" height="100%" preserveAspectRatio="none">
              <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="20" cy="20" r="1" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
          {/* Content */}
          <div className="relative z-10 px-6 py-12 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Take the first step toward optimizing your operations with our
              customized IT solutions. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link to="/services" className="group bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-violet-700 dark:text-violet-400 font-medium px-6 py-3 rounded-md shadow-lg transition-all duration-300 inline-flex items-center justify-center hover:shadow-white/20 dark:hover:shadow-white/10">
                <FileText size={20} className="mr-2" />
                <span>Explore Solutions</span>
                <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link to="/contact" className="group bg-violet-800/30 hover:bg-violet-800/40 dark:bg-violet-900/40 dark:hover:bg-violet-900/50 border border-white/40 text-white font-medium px-6 py-3 rounded-md shadow-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:shadow-white/10">
                <PhoneCall size={20} className="mr-2 group-hover:animate-pulse" />
                <span>Contact Us</span>
              </Link>
            </div>
            {/* Decorative floating elements */}
            <div className="absolute top-6 right-8 bg-white/10 backdrop-blur-sm p-2 rounded-lg hidden md:flex items-center gap-2 animate-float">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs font-medium text-white">
                Available Now
              </span>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>;
};
export default CtaSection;