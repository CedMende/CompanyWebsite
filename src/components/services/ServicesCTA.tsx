import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
const ServicesCTA = () => {
  return <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-violet-600 to-orange-500 dark:from-violet-800 dark:via-violet-700 dark:to-orange-600"></div>
          <div className="relative z-10 px-6 py-12 md:py-16 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Get in touch with our team to discuss your specific requirements
                and discover how our solutions can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-violet-700 dark:text-violet-400 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-violet-800/30 dark:bg-violet-900/40 text-white font-medium rounded-lg border border-white/20 hover:bg-violet-800/40 dark:hover:bg-violet-900/50 transition-colors duration-300">
                  <PhoneCall className="mr-2 w-5 h-5" />
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>;
};
export default ServicesCTA;