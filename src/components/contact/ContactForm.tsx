import React, { useEffect, useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("-e8OKeCz_C-qB0bsH");
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      console.log("Attempting to send email...");
      const result = await emailjs.send("service_ncwrzxx", "template_05wx4br", {
        from_name: formState.name,
        reply_to: formState.email,
        phone_number: formState.phone,
        message: formState.message
      }, "-e8OKeCz_C-qB0bsH");
      console.log("Email send result:", result);
      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Detailed error submitting form:", error);
      setSubmitError("Failed to send message. Please try again later or contact us directly at contact@techpro360.com");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 md:p-8 relative overflow-hidden border border-gray-100 dark:border-gray-600">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/50 dark:bg-violet-900/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100/50 dark:bg-orange-900/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-700 dark:text-violet-400">
            <MessageSquare size={20} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Send us a message
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        {submitSuccess && <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-lg text-green-800 dark:text-green-300">
            Thank you for your message! We'll get back to you soon.
          </div>}
        {submitError && <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg text-red-800 dark:text-red-300">
            {submitError}
          </div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-400 dark:text-gray-500" />
                </div>
                <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors dark:text-white" placeholder="John Doe" />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400 dark:text-gray-500" />
                </div>
                <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors dark:text-white" placeholder="john@example.com" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={16} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors dark:text-white" placeholder="+63 912 345 6789" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors resize-none dark:text-white" placeholder="Tell us about your project..." />
          </div>
          <button type="submit" disabled={isSubmitting} className="group w-full bg-gradient-to-r from-violet-600 to-violet-700 dark:from-violet-700 dark:to-violet-600 text-white px-6 py-3 rounded-lg hover:from-violet-700 hover:to-violet-800 dark:hover:from-violet-600 dark:hover:to-violet-500 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 shadow-md hover:shadow-lg">
            {isSubmitting ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Inquiry</span>
              </>}
          </button>
        </form>
      </div>
    </div>;
};
export default ContactForm;