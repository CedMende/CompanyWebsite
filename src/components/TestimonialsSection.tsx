import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}
const testimonials: Testimonial[] = [{
  id: 1,
  name: "Sarah Johnson",
  role: "CTO",
  company: "HealthFirst",
  content: "TechPro360's hospital management system transformed our operations. Patient care improved dramatically with their intuitive software.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
}, {
  id: 2,
  name: "Michael Chen",
  role: "HR Director",
  company: "Innovate Inc.",
  content: "The HR management system from TechPro360 has streamlined our entire hiring and onboarding process. Highly recommended!",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
}, {
  id: 3,
  name: "Emily Rodriguez",
  role: "Operations Manager",
  company: "FinanceWorks",
  content: "Their loan management system is exceptional. We've seen a 40% increase in processing efficiency since implementation.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
}];
const companyLogos = ["https://i.imgur.com/SgLXqGD.png", "https://i.imgur.com/A88gGfB.png", "https://i.imgur.com/O5JDtP3.png", "https://i.imgur.com/Uf2QyJp.png", "https://i.imgur.com/RXCYaT3.png"];
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);
  return <section id="testimonials" className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-violet-200/30 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/0 via-violet-400/50 to-violet-400/0"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400/0 via-orange-400/50 to-orange-400/0"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/0 via-violet-400/50 to-violet-400/0"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/20">
            <span className="text-orange-800 dark:text-orange-300 font-medium text-sm">
              Client Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've
            helped transform
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div ref={testimonialRef} className="bg-gradient-to-br from-violet-50 to-orange-50 dark:from-violet-900/20 dark:to-orange-900/10 dark:bg-gray-800 rounded-xl p-6 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className={`transition-all duration-500 ${isAnimating ? `opacity-0 transform ${direction === "next" ? "translate-x-10" : "-translate-x-10"}` : "opacity-100 transform translate-x-0"}`}>
              <div className="relative">
                <Quote className="text-violet-300 dark:text-violet-700 mb-6" size={48} />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-200/30 to-orange-200/30 dark:from-violet-700/10 dark:to-orange-700/10 rounded-full blur-xl"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl italic mb-8 relative z-10">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-orange-500/20 dark:from-violet-500/30 dark:to-orange-500/30 rounded-full blur-sm transform scale-110"></div>
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white dark:border-gray-700 relative z-10" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role},{" "}
                    <span className="text-violet-700 dark:text-violet-400">
                      {testimonials[currentIndex].company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6">
            <button onClick={goToPrev} className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 border border-gray-100 dark:border-gray-600" aria-label="Previous testimonial">
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6">
            <button onClick={goToNext} className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 border border-gray-100 dark:border-gray-600" aria-label="Next testimonial">
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => {
            if (isAnimating) return;
            setIsAnimating(true);
            setDirection(index > currentIndex ? "next" : "prev");
            setCurrentIndex(index);
            setTimeout(() => setIsAnimating(false), 500);
          }} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-violet-700 dark:bg-violet-500 scale-125" : "bg-gray-300 dark:bg-gray-600"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h3 className="text-center text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mb-8">
            Trusted by leading companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((logo, index) => <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-200/0 via-violet-200/30 to-violet-200/0 dark:from-violet-700/0 dark:via-violet-700/20 dark:to-violet-700/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full"></div>
                <img src={logo} alt={`Client logo ${index + 1}`} className="h-8 md:h-10 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:brightness-90 dark:group-hover:brightness-110 relative" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;