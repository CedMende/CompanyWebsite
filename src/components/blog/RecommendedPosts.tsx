import React from "react";
import { ArrowRight } from "lucide-react";
const recommendedPosts = [{
  id: "1",
  title: "Implementing AI in Healthcare: A Step-by-Step Guide",
  excerpt: "Learn how to effectively integrate AI solutions in your healthcare facility.",
  image: "https://images.unsplash.com/photo-1576670159805-381a0b220b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Healthcare IT"
}, {
  id: "2",
  title: "Data Security in Modern Healthcare Systems",
  excerpt: "Best practices for maintaining patient data security in digital healthcare.",
  image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Cybersecurity"
}, {
  id: "3",
  title: "The Rise of Telemedicine Platforms",
  excerpt: "How telemedicine is changing the healthcare landscape in Southeast Asia.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Digital Health"
}];
const RecommendedPosts = () => {
  return <section className="w-full bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Recommended Reading
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recommendedPosts.map(post => <article key={post.id} className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <a href="https://www.facebook.com/techpro360solutions" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center text-violet-700 dark:text-violet-400 font-medium group-hover:text-violet-800 dark:group-hover:text-violet-300 transition-colors">
                    Read on Facebook
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </a>
            </article>)}
        </div>
      </div>
    </section>;
};
export default RecommendedPosts;