import React from "react";
import { Search, Tag } from "lucide-react";
const categories = [{
  name: "All Posts",
  count: 24
}, {
  name: "Digital Transformation",
  count: 8
}, {
  name: "Healthcare IT",
  count: 6
}, {
  name: "Cloud Solutions",
  count: 5
}, {
  name: "Cybersecurity",
  count: 3
}, {
  name: "Business Technology",
  count: 2
}];
const popularTags = ["Digital Transformation", "Healthcare", "Cloud", "Security", "AI", "Business", "Technology", "Innovation"];
interface BlogSidebarProps {
  className?: string;
}
const BlogSidebar: React.FC<BlogSidebarProps> = ({
  className
}) => {
  return <div className={className}>
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <input type="text" placeholder="Search articles..." className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-shadow duration-200 hover:shadow-md" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
      {/* Categories */}
      <div className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map(category => <li key={category.name}>
              <button className="w-full flex items-center justify-between py-2 px-3 text-left text-gray-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400 transition-colors rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/10">
                <span>{category.name}</span>
                <span className="text-sm bg-white dark:bg-gray-700 px-2.5 py-1 rounded-full text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm">
                  {category.count}
                </span>
              </button>
            </li>)}
        </ul>
      </div>
      {/* Popular Tags */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(tag => <button key={tag} className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-700 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-700 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400 rounded-full text-sm transition-colors border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md">
              <Tag size={14} className="mr-1.5" />
              {tag}
            </button>)}
        </div>
      </div>
    </div>;
};
export default BlogSidebar;