import React from "react";
import { MapPin, Clock, ExternalLink, Search, Filter, Briefcase, AlertCircle, Bell } from "lucide-react";
import { JobPosition } from "./types";
const jobs: JobPosition[] = [{
  id: "senior-react-developer",
  title: "Senior React Developer",
  department: "Engineering",
  location: "Manila, Philippines",
  type: "Full-time",
  description: "Join our engineering team to build innovative solutions using React and modern web technologies.",
  responsibilities: ["Lead development of complex React applications", "Mentor junior developers and review code", "Architect scalable frontend solutions", "Collaborate with design and backend teams"],
  requirements: ["5+ years of React experience", "Strong TypeScript knowledge", "Experience with state management", "Understanding of CI/CD practices"],
  benefits: ["Competitive salary", "Health insurance", "Professional development budget", "Remote work options"]
}
// Add more job positions...
];
interface JobListingsProps {
  onJobSelect: (job: JobPosition) => void;
}
const JobListings: React.FC<JobListingsProps> = ({
  onJobSelect
}) => {
  const scrollToTalentNetwork = () => {
    const element = document.getElementById("talent-network");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")'
      }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200/50 to-orange-200/50 dark:from-violet-800/30 dark:to-orange-700/30 rounded-full blur-md transform scale-110"></div>
            <div className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Briefcase className="w-8 h-8 text-violet-700 dark:text-violet-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Future Positions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're preparing to grow our team. While we're not currently
            accepting applications, here's a preview of positions we'll be
            recruiting for in the future.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 rounded-xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-1">
                Applications Not Yet Open
              </h3>
              <p className="text-orange-700 dark:text-orange-200">
                As a new startup founded in October 2024, we're still setting up
                our operations. We're sharing these future positions to give you
                a glimpse of our growth plans. Join our talent network to be
                notified when we start hiring.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map(job => <div key={job.id} className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-violet-200 dark:hover:border-violet-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-50/0 via-violet-50/0 to-violet-50/0 dark:from-violet-900/0 dark:via-violet-900/0 dark:to-violet-900/0 group-hover:from-violet-50/50 group-hover:via-violet-50/30 group-hover:to-violet-50/0 dark:group-hover:from-violet-900/20 dark:group-hover:via-violet-900/10 dark:group-hover:to-violet-900/0 transition-all duration-500"></div>
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-violet-500 dark:text-violet-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-orange-500 dark:text-orange-400" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => onJobSelect(job)} className="inline-flex items-center text-violet-700 dark:text-violet-400 font-medium hover:text-violet-800 dark:hover:text-violet-300 transition-colors group-hover:translate-x-1 transition-transform duration-300">
                    View Details
                    <ExternalLink size={16} className="ml-1" />
                  </button>
                  <div className="relative inline-block group/btn">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg blur-sm opacity-75 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <button className="relative bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                      <Bell size={16} />
                      Get Notified
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default JobListings;