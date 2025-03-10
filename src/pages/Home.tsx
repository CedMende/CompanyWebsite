import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import DevelopmentProgress from "../components/DevelopmentProgress";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import SectionDivider from "../components/ui/SectionDivider";
import SuccessMetrics from "../components/SuccessMetrics";
const Home = () => {
  return <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <div className="bg-gray-50 dark:bg-gray-800 -mb-1">
          <SectionDivider variant="curve" className="h-16 md:h-24" bgColor="fill-white dark:fill-gray-900" />
        </div>
        <SuccessMetrics />
        <div className="bg-white dark:bg-gray-900">
          <SectionDivider variant="dots" className="py-6" />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>;
};
export default Home;