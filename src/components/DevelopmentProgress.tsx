import React from "react";
import { Code2, GitBranch, CheckCircle2, Timer } from "lucide-react";
const technologies = ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Express", "Tailwind CSS", "AWS"];
const projectStats = [{
  title: "Active Projects",
  value: "5+",
  description: "Currently in Development",
  icon: <Code2 className="w-6 h-6" />
}, {
  title: "Code Commits",
  value: "1,200+",
  description: "Last 30 Days",
  icon: <GitBranch className="w-6 h-6" />
}, {
  title: "Features Completed",
  value: "85+",
  description: "Across All Projects",
  icon: <CheckCircle2 className="w-6 h-6" />
}, {
  title: "Development Hours",
  value: "2,400+",
  description: "Total Investment",
  icon: <Timer className="w-6 h-6" />
}];
const DevelopmentProgress = () => {
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-violet-200/30 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30">
            <span className="text-violet-800 dark:text-violet-300 font-medium text-sm">
              Development in Progress
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Building the{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track our progress as we develop innovative solutions for our
            clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projectStats.map((stat, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-700 dark:text-violet-400 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {stat.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </p>
            </div>)}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Technologies We're Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => <div key={index} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-violet-500 dark:hover:border-violet-400 transition-colors duration-300">
                {tech}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default DevelopmentProgress;