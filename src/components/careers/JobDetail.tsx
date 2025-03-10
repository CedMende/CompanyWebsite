import React, { useCallback, useEffect, useState } from "react";
import { X, CheckCircle, Upload, ArrowLeft, ArrowRight } from "lucide-react";
import { JobPosition } from "./types";
interface JobDetailProps {
  job: JobPosition;
  onClose: () => void;
}
const JobDetail: React.FC<JobDetailProps> = ({
  job,
  onClose
}) => {
  const [step, setStep] = useState<"details" | "application">("details");
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
  return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] overflow-y-auto p-4 md:p-8" onClick={handleOverlayClick}>
      <div className="min-h-screen px-4 md:px-8 py-8 md:py-12 text-center">
        <div className="inline-block w-full max-w-4xl text-left align-middle transition-all transform bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-4 md:p-6 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {job.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {job.department} • {job.location}
              </p>
            </div>
            <button onClick={e => {
            e.stopPropagation();
            onClose();
          }} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors" aria-label="Close modal">
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <div className="p-6 md:p-8 lg:p-10">
            {step === "details" ? <div className="space-y-8 relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                <section className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Role Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {job.description}
                  </p>
                </section>
                <section className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="relative">
                      Key Responsibilities
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-violet-300 to-violet-200 dark:from-violet-800 dark:to-violet-700 rounded-full"></span>
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => <li key={index} className="flex items-start group">
                        <div className="mt-0.5 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-violet-700 dark:text-violet-500 transform group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {item}
                        </span>
                      </li>)}
                  </ul>
                </section>
                <section className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="relative">
                      Requirements
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-violet-300 to-violet-200 dark:from-violet-800 dark:to-violet-700 rounded-full"></span>
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => <li key={index} className="flex items-start group">
                        <div className="mt-0.5 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-violet-700 dark:text-violet-500 transform group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {item}
                        </span>
                      </li>)}
                  </ul>
                </section>
                <section className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="relative">
                      Benefits
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-orange-200 dark:from-orange-800 dark:to-orange-700 rounded-full"></span>
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => <li key={index} className="flex items-start group">
                        <div className="mt-0.5 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-400 transform group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {item}
                        </span>
                      </li>)}
                  </ul>
                </section>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
                  <div className="relative inline-block group cursor-not-allowed w-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/50 to-orange-600/50 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button disabled className="relative w-full bg-violet-700/50 dark:bg-violet-600/50 text-white py-3 px-6 rounded-lg cursor-not-allowed opacity-80">
                      Applications Not Yet Open
                    </button>
                  </div>
                </div>
              </div> : <div className="max-w-2xl mx-auto relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="relative">
                    Application Form
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-violet-300 to-orange-300 dark:from-violet-800 dark:to-orange-800 rounded-full"></span>
                  </span>
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Resume/CV
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-violet-400 dark:hover:border-violet-500 rounded-lg p-8 text-center transition-colors duration-300 group cursor-pointer">
                      <div className="mx-auto w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Upload className="w-6 h-6 text-violet-700 dark:text-violet-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Drag and drop your resume here, or{" "}
                        <button className="text-violet-700 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 font-medium">
                          browse
                        </button>
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Cover Letter
                    </label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent h-32 dark:bg-gray-700 dark:text-white" placeholder="Tell us why you're interested in this position..." />
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep("details")} className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>
                    <div className="relative inline-block flex-1 group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-orange-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <button type="submit" className="relative w-full bg-violet-700 dark:bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-800 dark:hover:bg-violet-700 transition-colors flex items-center justify-center">
                        Submit Application
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default JobDetail;