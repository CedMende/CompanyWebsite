import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import CaseStudyDetail from "../components/portfolio/CaseStudyDetail";
import IndustryExpertise from "../components/portfolio/IndustryExpertise";
import { Project } from "../components/portfolio/types";
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-[100px] opacity-60 animate-pulse-slow"></div>
            <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-[100px] opacity-50 animate-pulse-slow delay-300"></div>
            <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow delay-700"></div>
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] bg-[size:20px_20px]"></div>
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
          }}></div>
            <div className="absolute top-20 right-20 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-violet-500/30 dark:bg-violet-400/30"></div>)}
            </div>
          </div>
          <div className="relative z-10">
            <PortfolioHero />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/20 dark:via-violet-900/10 to-transparent"></div>
              <ProjectGrid onProjectSelect={setSelectedProject} />
            </div>
            <IndustryExpertise />
            {selectedProject && <CaseStudyDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Portfolio;