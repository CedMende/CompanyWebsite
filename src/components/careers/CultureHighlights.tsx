import React from "react";
import { Heart, Users, Target, Zap } from "lucide-react";
const values = [{
  icon: <Heart className="w-6 h-6" />,
  title: "People First",
  description: "We believe in creating an environment where everyone can thrive and grow."
}, {
  icon: <Users className="w-6 h-6" />,
  title: "Collaborative Spirit",
  description: "Success comes from working together and sharing knowledge."
}, {
  icon: <Target className="w-6 h-6" />,
  title: "Innovation Driven",
  description: "We encourage creative thinking and novel approaches to problem-solving."
}, {
  icon: <Zap className="w-6 h-6" />,
  title: "Excellence",
  description: "We strive for excellence in everything we do, from code to customer service."
}];
const CultureHighlights = () => {
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200/50 to-orange-200/50 dark:from-violet-800/30 dark:to-orange-700/30 rounded-full blur-md transform scale-110"></div>
            <div className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Heart className="w-8 h-8 text-violet-700 dark:text-violet-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
              Culture
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent relative">
              Values
              <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-300 dark:text-violet-800" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At TechPro360, we believe in creating an environment where
            innovation thrives and every team member can make an impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-100/50 to-orange-100/50 dark:from-violet-900/20 dark:to-orange-900/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-6 text-violet-700 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
              <div className="h-0.5 w-0 mx-auto bg-gradient-to-r from-violet-500 to-orange-500 mt-6 group-hover:w-1/2 transition-all duration-300"></div>
            </div>)}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-xl overflow-hidden h-64 shadow-lg border border-gray-100 dark:border-gray-700 group">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Collaborative Workspace
              </h3>
              <p className="text-gray-200">
                Modern offices designed for teamwork and innovation
              </p>
              <div className="w-12 h-0.5 bg-violet-400 mt-3 group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-64 shadow-lg border border-gray-100 dark:border-gray-700 group">
            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Team building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Building
              </h3>
              <p className="text-gray-200">
                Regular events to strengthen our bonds
              </p>
              <div className="w-12 h-0.5 bg-orange-400 mt-3 group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CultureHighlights;