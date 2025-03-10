import React from "react";
import { Quote } from "lucide-react";
const testimonials = [{
  id: "1",
  name: "Marco Santos",
  role: "Senior Developer",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  quote: "TechPro360 has given me incredible opportunities to grow both technically and professionally. The collaborative environment here is unmatched.",
  yearsAtCompany: 3
}, {
  id: "2",
  name: "Lisa Chen",
  role: "Product Manager",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  quote: "What I love most about working here is how we're encouraged to innovate and think outside the box. Every day brings new challenges and opportunities.",
  yearsAtCompany: 2
}, {
  id: "3",
  name: "David Kumar",
  role: "UI/UX Designer",
  image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  quote: "The emphasis on work-life balance and professional development makes TechPro360 an amazing place to build a career.",
  yearsAtCompany: 1
}];
const EmployeeTestimonials = () => {
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Life at TechPro360
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our team members about their experiences and growth
            journey with us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 relative">
              <Quote className="absolute top-6 right-6 text-violet-200 dark:text-violet-800" size={40} />
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-violet-700 dark:text-violet-400">
                    {testimonial.yearsAtCompany} years at TechPro360
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>)}
        </div>
      </div>
    </section>;
};
export default EmployeeTestimonials;