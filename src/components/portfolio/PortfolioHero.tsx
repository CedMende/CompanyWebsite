import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const PortfolioHero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("current-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="w-full bg-white dark:bg-gray-900">
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="grid grid-cols-2 md:grid-cols-4 h-full">
            {["https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"].map((image, index) => <div key={index} className="relative h-full overflow-hidden">
                <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
              </div>)}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/10 backdrop-blur-sm mb-6 group transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              <span className="text-sm font-medium text-violet-300">
                Featured Projects
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Showcasing Our
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent relative">
                Digital
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent relative">
                Excellence
                <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                  <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="url(#gradient-underline)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="gradient-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our growing portfolio of innovative solutions that are
              transforming businesses across healthcare and government sectors.
              Each project represents our commitment to excellence and
              innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button onClick={scrollToProjects} className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition-colors">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm">
                Start a Project
              </Link>
            </div>
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="text-center">
                <span className="block text-2xl font-bold text-white mb-1">
                  5+ Active Projects
                </span>
                <span className="text-gray-400">Currently in Development</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </div>
    </section>;
};
export default PortfolioHero;