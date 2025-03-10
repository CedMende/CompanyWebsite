import React from "react";
import { Calendar, Flag, Users, FileText, Clock } from "lucide-react";
const timelineEvents = [{
  year: "October 2024",
  title: "Foundation",
  description: "TechPro360 was officially registered with a vision to revolutionize IT solutions in the Philippines.",
  icon: <Flag className="w-5 h-5" />
}, {
  year: "November 2024",
  title: "Team Formation",
  description: "CEO Vernon Pranilla began assembling a talented team of IT professionals to drive the company's vision forward.",
  icon: <Users className="w-5 h-5" />
}, {
  year: "December 2024",
  title: "First Business Plan",
  description: "Development of comprehensive business strategies and solution frameworks to address local market needs.",
  icon: <FileText className="w-5 h-5" />
}, {
  year: "January 2025",
  title: "Initial Client Meetings",
  description: "Started discussions with local government units and healthcare facilities about potential partnerships.",
  icon: <Calendar className="w-5 h-5" />
}, {
  year: "Q2 2025",
  title: "Projected First Project",
  description: "Anticipated launch of our first major implementation based on current discussions with potential clients.",
  icon: <Clock className="w-5 h-5" />
}];
const Timeline = () => {
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")'
      }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200/50 to-orange-200/50 dark:from-violet-800/30 dark:to-orange-700/30 rounded-full blur-md transform scale-110"></div>
            <div className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Calendar className="w-8 h-8 text-violet-700 dark:text-violet-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Our Journey of
            <span className="text-violet-700 dark:text-violet-400 relative ml-2">
              Innovation
              <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-300 dark:text-violet-800" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Though we're just beginning, we're building a foundation for growth
            and innovation. Here's our story so far and our vision for the near
            future.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full">
            <div className="h-full w-0.5 bg-gradient-to-b from-violet-300/50 via-violet-500/50 to-orange-500/50 dark:from-violet-700/30 dark:via-violet-600/30 dark:to-orange-700/30 rounded-full"></div>
          </div>
          <div className="relative">
            {timelineEvents.map((event, index) => <div key={event.year} className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 md:mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-600 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-medium mr-2 md:mr-0 md:ml-2 order-1 md:order-2">
                        {event.year}
                      </span>
                      <div className={`hidden md:block w-10 h-0.5 bg-gradient-to-r from-violet-300 to-violet-500 dark:from-violet-700 dark:to-violet-500 ${index % 2 === 0 ? "order-2" : "order-1"}`}></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-orange-300 dark:from-violet-600 dark:to-orange-600 rounded-full blur-sm transform scale-150"></div>
                    <div className="relative w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-violet-500 dark:border-violet-400 flex items-center justify-center shadow-md">
                      <div className="text-violet-700 dark:text-violet-400">
                        {event.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`hidden md:block md:w-1/2 md:px-8`}></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Timeline;