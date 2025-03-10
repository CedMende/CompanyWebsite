import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServiceDetail from "../components/services/ServiceDetail";
import ServiceProcess from "../components/services/ServiceProcess";
import SlantDivider from "../components/ui/SlantDivider";
import { Service } from "../components/services/types";
const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] bg-[size:30px_30px]"></div>
          <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
        }}></div>
        </div>
        <div className="relative z-10">
          <ServicesHero />
          <SlantDivider bgColor="fill-gray-50 dark:fill-gray-800" color="fill-white dark:fill-gray-900" angle={3} />
          <div className="relative overflow-hidden">
            <ServicesGrid onServiceSelect={setSelectedService} />
          </div>
          <SlantDivider bgColor="fill-white dark:fill-gray-900" color="fill-gray-50 dark:fill-gray-800" angle={3} />
          <ServiceProcess />
          {selectedService && <ServiceDetail service={selectedService} onClose={() => setSelectedService(null)} />}
        </div>
      </main>
      <Footer />
    </div>;
};
export default Services;