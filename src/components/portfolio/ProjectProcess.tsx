import React from "react";
import { Lightbulb, FileCode, CheckSquare, Users, Rocket, ArrowRight } from "lucide-react";
const steps = [{
  icon: <Lightbulb className="w-6 h-6" />,
  title: "Discovery",
  description: "We work closely with clients to understand their unique needs and challenges."
}, {
  icon: <Users className="w-6 h-6" />,
  title: "Design",
  description: "Our team creates intuitive user experiences and interfaces tailored to your audience."
}, {
  icon: <FileCode className="w-6 h-6" />,
  title: "Development",
  description: "We build robust, scalable solutions using modern technologies and best practices."
}, {
  icon: <CheckSquare className="w-6 h-6" />,
  title: "Testing",
  description: "Rigorous quality assurance ensures your solution works flawlessly."
}, {
  icon: <Rocket className="w-6 h-6" />,
  title: "Launch",
  description: "We support you through deployment and beyond with ongoing maintenance."
}];
const ProjectProcess = () => {
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Development Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We follow a proven methodology to ensure every project is delivered
            on time, within budget, and exceeds expectations.
          </p>
        </div>
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-200 via-violet-400 to-orange-400 dark:from-violet-900/50 dark:via-violet-700 dark:to-orange-700/50 hidden sm:block"></div>
          <div className="space-y-12 relative">
            {steps.map((step, index) => <div key={index} className={`flex flex-col sm:grid ${index % 2 === 0 ? "sm:grid-cols-[1fr,auto,1fr] md:grid-cols-[1fr,auto,1fr]" : "sm:grid-cols-[1fr,auto,1fr] md:grid-cols-[1fr,auto,1fr]"} gap-4 sm:gap-8 items-start`}>
                {/* Content */}
                <div className={`sm:col-start-${index % 2 === 0 ? "1" : "3"} sm:col-end-${index % 2 === 0 ? "2" : "4"} sm:row-start-1 sm:self-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? "sm:text-right sm:items-end" : ""}`}>
                  <div className="flex items-center gap-4 mb-4 sm:hidden">
                    <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-700 dark:text-violet-400">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="hidden sm:block text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                {/* Icon for medium screens and up */}
                <div className="hidden sm:flex sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:justify-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border-4 border-violet-500 dark:border-violet-600 flex items-center justify-center z-10 relative">
                      <div className="text-violet-700 dark:text-violet-400">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-violet-100/50 dark:bg-violet-900/20 rounded-full blur-md"></div>
                  </div>
                </div>
                {/* Empty div for grid layout */}
                <div className={`hidden sm:block sm:col-start-${index % 2 === 0 ? "3" : "1"} sm:col-end-${index % 2 === 0 ? "4" : "2"} sm:row-start-1`}></div>
              </div>)}
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="bg-white dark:bg-gray-700 rounded-md px-6 py-4 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                Ready to start your project?
              </p>
              <button className="inline-flex items-center bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectProcess;