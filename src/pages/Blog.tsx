import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
const Blog = () => {
  return <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute top-[60%] right-[5%] w-[400px] h-[400px] bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
        }}></div>
          <div className="absolute top-20 right-20 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-violet-500/30 dark:bg-violet-400/30"></div>)}
          </div>
        </div>
        <BlogHero />
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <BlogSidebar className="w-full lg:w-64 flex-shrink-0" />
            <BlogGrid className="flex-grow" />
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Blog;