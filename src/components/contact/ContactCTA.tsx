import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, MessageSquare } from "lucide-react";
const ContactCTA = () => {
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-violet-50 to-transparent dark:from-violet-900/10 dark:to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-50 to-orange-50 dark:from-violet-900/30 dark:to-orange-900/20 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-200/30 to-orange-200/30 dark:from-violet-700/20 dark:to-orange-700/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-violet-200/30 dark:from-orange-700/20 dark:to-violet-700/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white dark:bg-gray-800 shadow-md">
              <MessageSquare size={28} className="text-violet-700 dark:text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're looking to start a new project or want to explore
              how we can help transform your business, we're here to help. Let's
              start a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="https://www.facebook.com/techpro360solutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-400 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                <Facebook size={24} />
              </a>
            </div>
            <div className="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Our team typically responds within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactCTA;