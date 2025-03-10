import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const contactInfo = [{
  icon: <Phone className="w-6 h-6" />,
  title: "Phone",
  details: "(+63) 912 345 6789",
  subtext: "Monday to Friday, 9am to 6pm PHT"
}, {
  icon: <Mail className="w-6 h-6" />,
  title: "Email",
  details: "contact@techpro360.com",
  subtext: "We'll respond within 24 hours"
}, {
  icon: <MapPin className="w-6 h-6" />,
  title: "Office",
  details: "San Jose City, Nueva Ecija",
  subtext: "Philippines 3121"
}];
const ContactHero = () => {
  return <section className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-violet-200/50 dark:bg-violet-900/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-orange-200/50 dark:bg-orange-900/30 rounded-full blur-xl"></div>
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200/50 to-orange-200/50 dark:from-violet-800/30 dark:to-orange-700/30 rounded-full blur-md transform scale-110"></div>
            <div className="relative w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Mail className="w-8 h-8 text-violet-700 dark:text-violet-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Get in{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent relative">
              Touch
              <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                <path d="M0,1.5 Q25,0 50,1.5 T100,1.5" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-300 dark:text-violet-800" />
              </svg>
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 relative z-10">
            Have a question or want to discuss a project? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            <span>Our team is available to help you</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => <div key={index} className="group relative p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-orange-50/50 dark:from-violet-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-violet-100 to-orange-100 dark:from-violet-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center text-violet-700 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {info.title}
                </h3>
                <p className="text-violet-700 dark:text-violet-400 font-medium mb-2 text-center">
                  {info.details}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {info.subtext}
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 w-1/2 h-1 bg-gradient-to-r from-violet-400 to-orange-400 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ContactHero;