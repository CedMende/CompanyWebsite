import React from "react";
import { Clock, ExternalLink } from "lucide-react";
import { BlogPost } from "./types";
import { BLOG_IMAGES } from "../../src/constants/images";
const posts: BlogPost[] = [{
  id: "1",
  title: "Revolutionizing Tourism: TechPro360 Showcases Cutting-Edge Solutions in San Jose City",
  excerpt: "TechPro360 proudly presented innovative digital solutions at the Office of Tourism in San Jose City, showcasing how technology can transform the tourism industry.",
  content: "",
  image: BLOG_IMAGES.tourism,
  category: "Company News",
  author: {
    name: "TechPro360",
    role: "Official Page",
    avatar: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  date: "June 12, 2024",
  readTime: 3,
  tags: ["Technology", "Tourism", "Innovation"],
  socialSource: "facebook"
}, {
  id: "2",
  title: "TechPro360 Embarks on a New Project with the Municipality of San Jose City",
  excerpt: "We’re excited to collaborate with the Municipality of San Jose City, Nueva Ecija, as we begin planning and brainstorming sessions for our latest project.",
  content: "",
  image: BLOG_IMAGES.bplo,
  category: "Company News",
  author: {
    name: "TechPro360",
    role: "Official Page",
    avatar: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  date: "March 8, 2025",
  readTime: 2,
  tags: ["Partnership", "Government", "Technology"],
  socialSource: "facebook"
}];
interface BlogGridProps {
  className?: string;
}
const BlogGrid: React.FC<BlogGridProps> = ({
  className
}) => {
  return <div className={className}>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => <article key={post.id} className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 transform hover:-translate-y-1">
            <a href="https://www.facebook.com/techpro360solutions" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-10">
                  <ExternalLink size={16} />
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-violet-500/80 text-white shadow-lg -top-8 -right-8 w-16 h-16"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-orange-500/20 dark:from-violet-500/30 dark:to-orange-500/30 blur-sm transform scale-110"></div>
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white dark:border-gray-800 relative z-10" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-medium mb-3 shadow-sm border border-violet-200 dark:border-violet-800/30">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime} min read</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 dark:text-blue-400 flex items-center">
                    <ExternalLink size={14} className="mr-1" />
                    From Facebook
                  </span>
                </div>
              </div>
            </a>
          </article>)}
      </div>
    </div>;
};
export default BlogGrid;