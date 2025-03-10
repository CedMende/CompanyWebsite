import React, { useState } from "react";
import { Mail, Rocket, Briefcase, Users, Star, Lightbulb } from "lucide-react";
import emailjs from "@emailjs/browser";
import Form from "../shared/Form";
const JoinOurTeam = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    interest: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      console.log("Attempting to send talent network email...");
      const result = await emailjs.send(
        "service_ncwrzxx",
        "template_tipa98c",
        // Use a different template for talent network
        {
          from_email: formState.email,
          interest_area: formState.interest,
        },
        "-e8OKeCz_C-qB0bsH",
      );
      console.log("Email send result:", result);
      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormState({
          email: "",
          interest: "",
        });
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting to talent network:", error);
      setSubmitError(
        "Failed to join talent network. Please try again later or email us directly at careers@techpro360.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="talent-network"
      className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200/50 to-orange-200/50 dark:from-violet-800/30 dark:to-orange-700/30 rounded-full blur-md transform scale-110"></div>
            <div className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Rocket className="w-8 h-8 text-violet-700 dark:text-violet-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Be Part of Our{" "}
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent relative">
              Journey
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="3"
                viewBox="0 0 100 3"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,1.5 Q25,0 50,1.5 T100,1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-violet-300 dark:text-violet-800"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            As a new startup with ambitious plans, we're looking for talented
            individuals who want to help shape our future and grow with us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-900/20 dark:to-violet-800/10 rounded-2xl p-8 border border-violet-100 dark:border-violet-800/30 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-200/30 dark:bg-violet-700/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
              Why Join Us Now?
            </h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-violet-700 dark:text-violet-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Ground Floor Opportunity
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Join at the beginning and help shape our company culture,
                    processes, and future direction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-5 h-5 text-violet-700 dark:text-violet-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Rapid Growth
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experience accelerated career advancement as we scale our
                    operations and expand our team.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-violet-700 dark:text-violet-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Build Meaningful Connections
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Work directly with founders and senior leadership in a
                    close-knit team environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 rounded-2xl p-8 border border-orange-100 dark:border-orange-800/30 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/30 dark:bg-orange-700/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
              Stay Connected
            </h3>
            <div className="space-y-6 relative z-10">
              <p className="text-gray-600 dark:text-gray-300">
                Even if we don't have the right position for you today, join our
                talent network to be the first to know when new opportunities
                become available.
              </p>
              <Form
                onSubmit={handleSubmit}
                error={submitError}
                success={
                  submitSuccess
                    ? "Thank you for joining our talent network! We'll keep you updated on new opportunities."
                    : ""
                }
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                    placeholder="youremail@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="engineering">Engineering</option>
                    <option value="design">Design</option>
                    <option value="product">Product Management</option>
                    <option value="sales">Sales & Marketing</option>
                    <option value="operations">Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Briefcase size={18} />
                      Join Talent Network
                    </>
                  )}
                </button>
              </Form>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="mailto:careers@techpro360.com"
            className="inline-flex items-center text-violet-700 dark:text-violet-400 font-medium hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
          >
            <Mail className="mr-2 w-5 h-5" />
            careers@techpro360.com
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Have questions about working with us? Feel free to reach out
            directly.
          </p>
        </div>
      </div>
    </section>
  );
};
export default JoinOurTeam;
