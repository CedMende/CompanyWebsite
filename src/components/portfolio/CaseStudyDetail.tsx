import React, { useCallback, useEffect } from "react";
import { X, CheckCircle, ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "./types";
interface CaseStudyDetailProps {
  project: Project;
  onClose: () => void;
}
const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  project,
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
  return <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center overflow-hidden p-4 md:p-8" onClick={handleOverlayClick}>
      <div className="relative w-full max-w-5xl max-h-[85vh] bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col mx-4 md:mx-8">
        {/* Header Image */}
        <div className="relative h-[30vh] overflow-hidden rounded-t-2xl">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-[201]" aria-label="Close modal">
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-violet-600/90 backdrop-blur-sm rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-1">
                  <Clock size={14} />
                  In Progress
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-200">{project.client}</p>
            </div>
          </div>
        </div>
        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.problem}
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.solution}
                </p>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Key Features Being Implemented:
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-violet-700 dark:text-violet-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>)}
                </ul>
              </section>
            </div>
            <div>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Project Status
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">
                        Overall Progress
                      </span>
                      <span className="font-medium text-violet-700 dark:text-violet-400">
                        {project.results[0].value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-violet-600 dark:bg-violet-500 h-2.5 rounded-full" style={{
                      width: project.results[0].value
                    }}></div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {project.results[0].description}
                    </p>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
                    <Calendar className="w-8 h-8 text-violet-700 dark:text-violet-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Expected Completion
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.results[1].value}
                      </p>
                    </div>
                  </div>
                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Technologies Being Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-md text-sm">
                          {tech}
                        </span>)}
                    </div>
                  </div>
                </div>
              </section>
              {project.testimonial && <section className="mb-8">
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-900/20 dark:to-violet-800/10 rounded-xl p-6">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img src={project.testimonial.image} alt={project.testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {project.testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>}
            </div>
          </div>
        </div>
        {/* CTA - Fixed at bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-6 md:p-8 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Interested in a similar solution?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Let's discuss how we can help transform your business
              </p>
            </div>
            <Link to="/contact" className="bg-violet-700 dark:bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-800 dark:hover:bg-violet-700 transition-colors flex items-center whitespace-nowrap">
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default CaseStudyDetail;