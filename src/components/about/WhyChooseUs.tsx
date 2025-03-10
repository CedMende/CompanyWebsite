import React from "react";
import { Code2, Shield, Scale, UserCheck, Building } from "lucide-react";
const features = [{
  icon: <Code2 size={24} />,
  title: "Custom Solutions",
  description: "Tailored software solutions designed specifically for your unique business needs."
}, {
  icon: <Shield size={24} />,
  title: "Security First",
  description: "Enterprise-grade security measures to protect your valuable data and operations."
}, {
  icon: <Scale size={24} />,
  title: "Scalability",
  description: "Solutions that grow with your business, from startup to enterprise scale."
}, {
  icon: <UserCheck size={24} />,
  title: "User-Friendly Design",
  description: "Intuitive interfaces that prioritize user experience and efficiency."
}, {
  icon: <Building size={24} />,
  title: "Government Compliance",
  description: "Full compliance with Philippine government regulations and standards."
}];
const WhyChooseUs = () => {
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800/30 shadow-sm">
            <span className="text-violet-800 dark:text-violet-300 font-medium text-sm">
              Our Strengths
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose TechPro360?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine technical expertise with deep understanding of local
            business needs to deliver solutions that make a real difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <div key={index} className="group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/50 dark:bg-violet-900/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/30 dark:to-violet-800/30 flex items-center justify-center mb-5 text-violet-700 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;