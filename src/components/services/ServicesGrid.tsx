import React from "react";
import { Link } from "react-router-dom";
import { Users, Monitor, Banknote, Globe, Clock, ArrowRight, Stethoscope } from "lucide-react";
import { Service } from "./types";
const services: Service[] = [{
  id: "hospital-management",
  title: "Hospital Management System",
  shortDescription: "Streamline healthcare operations with our comprehensive hospital management solution.",
  fullDescription: "A complete hospital management system that integrates patient care, administrative tasks, and financial management into one seamless platform.",
  icon: <Stethoscope className="w-6 h-6" />,
  features: ["Electronic Health Records", "Appointment Scheduling", "Inventory Management", "Billing & Insurance", "Laboratory Management", "Pharmacy Integration"],
  benefits: ["Improved Patient Care", "Reduced Administrative Overhead", "Better Resource Management", "Enhanced Data Security", "Streamlined Operations"],
  image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
}, {
  id: "hr-management",
  title: "HR Management System",
  shortDescription: "Optimize your HR operations with our comprehensive personnel management tools.",
  fullDescription: "A modern HR management system that handles everything from recruitment to retirement, designed to streamline your human resource operations.",
  icon: <Users className="w-6 h-6" />,
  features: ["Recruitment & Onboarding", "Performance Management", "Leave Management", "Payroll Integration", "Training & Development", "Employee Self-Service"],
  benefits: ["Improved HR Efficiency", "Better Employee Experience", "Reduced Paperwork", "Data-Driven Decisions", "Compliance Management"],
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
}, {
  id: "kiosk-software",
  title: "Kiosk Software",
  shortDescription: "Create engaging interactive experiences with our customizable kiosk solutions.",
  fullDescription: "Modern, user-friendly kiosk software that transforms the way your customers interact with your services. Perfect for retail, healthcare, and public services.",
  icon: <Monitor className="w-6 h-6" />,
  features: ["Intuitive Touch Interface", "Custom Branding Options", "Queue Management", "Payment Integration", "Analytics Dashboard", "Remote Management"],
  benefits: ["Enhanced Customer Experience", "Reduced Wait Times", "Lower Operational Costs", "Valuable Customer Insights", "24/7 Service Availability"],
  image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
}, {
  id: "loan-management",
  title: "Loan Management System",
  shortDescription: "Simplify loan processing and management with our secure financial software.",
  fullDescription: "A comprehensive loan management solution that streamlines the entire lending process from application to closure, ensuring compliance and efficiency.",
  icon: <Banknote className="w-6 h-6" />,
  features: ["Automated Loan Processing", "Risk Assessment Tools", "Payment Tracking", "Document Management", "Compliance Monitoring", "Reporting & Analytics"],
  benefits: ["Faster Loan Processing", "Reduced Risk Exposure", "Better Portfolio Management", "Improved Customer Service", "Enhanced Compliance"],
  image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
}, {
  id: "business-websites",
  title: "Business Websites",
  shortDescription: "Establish a powerful online presence with our custom business website development.",
  fullDescription: "Custom-designed, responsive websites that showcase your business and drive growth. We create engaging, SEO-optimized sites that convert visitors into customers.",
  icon: <Globe className="w-6 h-6" />,
  features: ["Responsive Design", "SEO Optimization", "Content Management System", "E-commerce Integration", "Analytics Integration", "Security Features"],
  benefits: ["Increased Online Visibility", "Better User Experience", "Higher Conversion Rates", "Easy Content Updates", "Mobile-First Approach"],
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
}, {
  id: "attendance-payroll",
  title: "Attendance & Payroll",
  shortDescription: "Automate attendance tracking and payroll processing with biometric integration.",
  fullDescription: "An integrated attendance and payroll system that simplifies time tracking, leave management, and salary processing while ensuring accuracy and compliance.",
  icon: <Clock className="w-6 h-6" />,
  features: ["Biometric Integration", "Automated Payroll Processing", "Leave Management", "Tax Calculations", "Custom Report Generation", "Mobile Access"],
  benefits: ["Reduced Processing Time", "Improved Accuracy", "Better Compliance", "Real-time Monitoring", "Simplified Reporting"],
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
}];
interface ServicesGridProps {
  onServiceSelect: (service: Service) => void;
}
const ServicesGrid: React.FC<ServicesGridProps> = ({
  onServiceSelect
}) => {
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-24">
          {services.map((service, index) => <div key={service.id} className={`group relative ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col md:items-center gap-8 md:gap-12`}>
              {/* Image Side */}
              <div className="md:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/9]">
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              {/* Content Side */}
              <div className="md:w-1/2">
                <div className="p-1 mb-4 inline-block">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                    <div className="w-10 h-10 flex items-center justify-center text-violet-700 dark:text-violet-400">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {service.shortDescription}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </div>)}
                </div>
                <button onClick={() => onServiceSelect(service)} className="inline-flex items-center space-x-2 text-violet-700 dark:text-violet-400 font-medium hover:underline">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesGrid;