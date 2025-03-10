import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogSidebar from "../components/blog/BlogSidebar";
import RecommendedPosts from "../components/blog/RecommendedPosts";
import { ArrowRight, Facebook } from "lucide-react";
const BlogPost = () => {
  return <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Blog post hero" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-violet-700 dark:bg-violet-600 text-white rounded-full text-sm font-medium mb-4">
                Healthcare IT
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                The Future of Healthcare Technology: AI-Driven Patient Care
              </h1>
              <div className="flex items-center text-gray-300 text-sm">
                <span>October 15, 2023</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span className="flex items-center gap-1 text-blue-300">
                  <Facebook size={14} />
                  From Facebook
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <BlogSidebar className="w-full lg:w-64 flex-shrink-0 order-2 lg:order-1" />
            <article className="flex-grow order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  Discover how artificial intelligence is revolutionizing
                  patient care and hospital management systems in the
                  Philippines, making healthcare more efficient and accessible.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30 my-6">
                  <p className="text-blue-700 dark:text-blue-300 flex items-center gap-2 text-sm font-medium">
                    <Facebook size={16} />
                    This article is from our Facebook page.
                    <a href="https://www.facebook.com/techpro360solutions" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800 dark:hover:text-blue-200">
                      View the original post{" "}
                      <ArrowRight size={14} className="inline" />
                    </a>
                  </p>
                </div>
                {/* Add more content sections */}
              </div>
            </article>
          </div>
        </div>
        {/* Recommended Posts */}
        <RecommendedPosts />
      </main>
      <Footer />
    </div>;
};
export default BlogPost;