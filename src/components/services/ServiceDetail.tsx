import React, { useCallback, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Service } from "./types";
interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
}
const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  onClose
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);
  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleEscape]);
  return <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4 md:p-8 lg:p-10" onClick={handleOverlayClick}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-4 md:p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <button onClick={e => {
          e.stopPropagation();
          onClose();
        }} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors" aria-label="Close modal">
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div className="p-6 md:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-violet-700 dark:text-violet-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {benefit}
                      </span>
                    </li>)}
                </ul>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={service.image} alt={`${service.title} interface`} className="w-full h-auto" />
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                <Link to="/contact" className="w-full bg-violet-700 dark:bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-800 dark:hover:bg-violet-700 transition-colors text-center">
                  Contact Us About This Solution
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ServiceDetail;