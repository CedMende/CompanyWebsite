import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
const ContactMap = () => {
  return <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 md:p-8 relative overflow-hidden border border-gray-100 dark:border-gray-600">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
          <MapPin size={20} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Visit our office
        </h2>
      </div>
      <div className="h-[350px] rounded-xl overflow-hidden relative z-[10] shadow-md mb-6 border border-gray-100 dark:border-gray-600 bg-gray-100 dark:bg-gray-600">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-orange-50/50 dark:from-violet-900/20 dark:to-orange-900/20"></div>
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
          {[...Array(36)].map((_, i) => <div key={i} className="border border-gray-200/30 dark:border-gray-500/20"></div>)}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/20 dark:bg-orange-500/30 rounded-full animate-pulse"></div>
            <div className="absolute -inset-8 bg-orange-500/10 dark:bg-orange-500/20 rounded-full animate-pulse animation-delay-700"></div>
            <div className="w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <MapPin size={24} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-center">
          <p className="font-medium text-gray-900 dark:text-white">
            TechPro360 Solutions
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Sitio Tanibong, San Jose City, Nueva Ecija
          </p>
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=San+Jose+City,+Nueva+Ecija,+Philippines" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md text-sm flex items-center gap-2 hover:bg-white dark:hover:bg-gray-800 transition-colors">
          <Navigation size={16} className="text-violet-600 dark:text-violet-400" />
          <span className="text-gray-700 dark:text-gray-300">
            Get Directions
          </span>
        </a>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-600">
          <Clock size={18} className="text-violet-600 dark:text-violet-400" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              Office Hours
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Monday to Friday, 9am to 6pm PHT
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-600">
          <Phone size={18} className="text-violet-600 dark:text-violet-400" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              Call Directly
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              (+63) 912 345 6789
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactMap;