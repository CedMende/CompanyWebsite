import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_IMAGES } from "../../src/constants/images";
const featuredPost = {
  title: "Driving MHMS to New Heights: A Successful Collaboration with the Dev Team",
  excerpt: "Our recent meeting with the development team for MHMS led to innovative solutions, streamlined processes, and enhanced features to elevate the project.",
  image: BLOG_IMAGES.featured,
  category: "Company News",
  date: "March 8, 2025",
  readTime: 3
};
const BlogHero: React.FC = () => {
  return <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")'
    }}></div>
      <div className="absolute top-1/3 left-0 w-24 h-24 bg-violet-200/50 dark:bg-violet-900/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-orange-200/50 dark:bg-orange-900/30 rounded-full blur-xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Latest{" "}
            <span className="text-violet-700 dark:text-violet-500 relative">
              Insights
              <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-300 dark:text-violet-800" />
              </svg>
            </span>{" "}
            &{" "}
            <span className="text-orange-500 dark:text-orange-400 relative">
              Updates
              <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-300 dark:text-orange-800" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with company news, product launches, and insights from
            our team
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600">
          <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent md:bg-gradient-to-r" />
            <div className="absolute inset-0 flex items-end md:items-center p-6 md:p-12 text-white md:pointer-events-none">
              <div className="md:hidden">
                <span className="inline-block px-3 py-1 bg-violet-700 rounded-full text-sm font-medium mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl font-bold mb-2">
                  {featuredPost.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-12">
            <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-medium mb-4 border border-violet-200 dark:border-violet-800/30 shadow-sm">
              {featuredPost.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>{featuredPost.date}</span>
              <span className="mx-2">•</span>
              <Clock size={16} className="mr-1" />
              <span>{featuredPost.readTime} min read</span>
            </div>
            <a href="https://www.facebook.com/techpro360solutions" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-violet-700 dark:text-violet-400 font-medium hover:text-violet-800 dark:hover:text-violet-300 transition-colors">
              Read on Facebook
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default BlogHero;