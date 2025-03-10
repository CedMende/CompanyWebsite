import React from "react";
import { Building2, Stethoscope, GraduationCap, ShoppingBag } from "lucide-react";
const industries = [{
  icon: <Building2 className="w-6 h-6" />,
  title: "Government",
  description: "Digital solutions for local government agencies, improving service delivery and operational efficiency.",
  projects: ["Tourism Website", "Loan Management", "Accounting Systems"]
}, {
  icon: <Stethoscope className="w-6 h-6" />,
  title: "Healthcare",
  description: "Specialized systems for hospitals and clinics to streamline patient care and administration.",
  projects: ["HR Management System", "Hospital Management System"]
}, {
  icon: <GraduationCap className="w-6 h-6" />,
  title: "Education",
  description: "Technology solutions for educational institutions to enhance learning and administrative processes.",
  projects: ["Coming Soon"]
}, {
  icon: <ShoppingBag className="w-6 h-6" />,
  title: "Retail",
  description: "E-commerce and inventory management systems to help businesses sell online and manage stock.",
  projects: ["Coming Soon"]
}, {
  icon: <Building2 className="w-6 h-6" />,
  title: "Real Estate",
  description: "Property management and listing platforms to streamline real estate operations.",
  projects: ["Coming Soon"]
}];
const IndustryExpertise = () => {
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're expanding our expertise across various sectors, bringing
            innovative technology solutions to diverse industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => <div key={index} className={`p-6 rounded-xl ${index < 2 ? "bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-900/20 dark:to-violet-800/10 border border-violet-100 dark:border-violet-800/20" : "bg-white dark:bg-gray-700"} transition-all duration-300 hover:shadow-md`}>
              <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4 text-violet-700 dark:text-violet-400">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {industry.description}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {index < 2 ? "Current Projects:" : "Future Focus:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.projects.map((project, idx) => <span key={idx} className={`text-xs px-3 py-1 rounded-full ${project === "Coming Soon" ? "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300" : "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400"}`}>
                      {project}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default IndustryExpertise;