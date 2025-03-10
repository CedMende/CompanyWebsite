import React from "react";
import { Heart, GraduationCap, Clock, Globe, Zap, Coffee } from "lucide-react";
const benefits = [{
  icon: <Heart className="w-6 h-6" />,
  title: "Health & Wellness",
  description: "Comprehensive medical coverage for you and your family"
}, {
  icon: <GraduationCap className="w-6 h-6" />,
  title: "Learning & Development",
  description: "Annual training budget and continuous learning opportunities"
}, {
  icon: <Clock className="w-6 h-6" />,
  title: "Flexible Hours",
  description: "Work-life balance with flexible scheduling options"
}, {
  icon: <Globe className="w-6 h-6" />,
  title: "Remote Work",
  description: "Hybrid work arrangements available for most positions"
}, {
  icon: <Zap className="w-6 h-6" />,
  title: "Performance Rewards",
  description: "Competitive bonuses and recognition programs"
}, {
  icon: <Coffee className="w-6 h-6" />,
  title: "Great Culture",
  description: "Fun team events and a collaborative environment"
}];
const BenefitsSection = () => {
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive benefits package designed to support your
            growth, health, and work-life balance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4 text-violet-700 dark:text-violet-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BenefitsSection;