import React from "react";
import { Link } from "react-router-dom";
import { Users, Monitor, Banknote, Globe, Clock, ChevronRight, Stethoscope } from "lucide-react";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  id
}) => {
  return <Link to={`/services#${id}`} className="group block bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-violet-50 dark:bg-violet-900/10 opacity-30 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-violet-200 dark:bg-violet-800/50 group-hover:bg-violet-500 dark:group-hover:bg-violet-600 transition-colors duration-300"></div>
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex items-center text-sm font-medium text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:translate-x-1">
          Learn More{" "}
          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>;
};
const ServicesSection = () => {
  const services = [{
    id: "hospital",
    title: "Hospital Management System",
    description: "Streamline patient care with our integrated hospital management solution.",
    icon: <Stethoscope size={24} />
  }, {
    id: "hr",
    title: "HR Management System",
    description: "Optimize your HR operations with our comprehensive personnel management tools.",
    icon: <Users size={24} />
  }, {
    id: "kiosk",
    title: "Kiosk Software",
    description: "Create engaging interactive experiences with our customizable kiosk solutions.",
    icon: <Monitor size={24} />
  }, {
    id: "loan",
    title: "Loan Management System",
    description: "Simplify loan processing and management with our secure financial software.",
    icon: <Banknote size={24} />
  }, {
    id: "websites",
    title: "Business Websites",
    description: "Establish a powerful online presence with our custom business website development.",
    icon: <Globe size={24} />
  }, {
    id: "attendance",
    title: "Attendance & Payroll",
    description: "Automate attendance tracking and payroll processing with biometric integration.",
    icon: <Clock size={24} />
  }];
  return <section id="services" className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-200/30 dark:bg-orange-900/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-200/30 dark:bg-violet-900/10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="20" cy="20" r="1" fill="none" stroke="currentColor" strokeWidth="1"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30">
            <span className="text-violet-800 dark:text-violet-300 font-medium text-sm">
              Tailored Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our IT Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We deliver customized technology solutions that address your unique
            business challenges and drive growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(service => <ServiceCard key={service.id} id={service.id} title={service.title} description={service.description} icon={service.icon} />)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;