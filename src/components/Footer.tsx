import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
                Tech
              </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Pro
              </span>
              <span className="text-gray-100">360</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative IT solutions and custom
              software development.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/techpro360solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <span className="text-gray-700">
                <Twitter size={20} />
              </span>
              <span className="text-gray-700">
                <Linkedin size={20} />
              </span>
              <span className="text-gray-700">
                <Instagram size={20} />
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-violet-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#hospital" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Hospital Management
                </Link>
              </li>
              <li>
                <Link to="/services#hr" className="text-gray-400 hover:text-violet-500 transition-colors">
                  HR Management
                </Link>
              </li>
              <li>
                <Link to="/services#kiosk" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Kiosk Software
                </Link>
              </li>
              <li>
                <Link to="/services#loan" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Loan Management
                </Link>
              </li>
              <li>
                <Link to="/services#websites" className="text-gray-400 hover:text-violet-500 transition-colors">
                  Business Websites
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <a href="https://maps.google.com/?q=San+Jose+City,+Nueva+Ecija,+Philippines" target="_blank" rel="noopener noreferrer" className="flex items-start text-gray-400 hover:text-violet-500 transition-colors">
                  <MapPin size={20} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>San Jose City, Nueva Ecija, Philippines</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="tel:+6355512345678" className="flex items-center text-gray-400 hover:text-violet-500 transition-colors">
                  <Phone size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="mailto:contact@techpro360.com" className="flex items-center text-gray-400 hover:text-violet-500 transition-colors">
                  <Mail size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                  <span>contact@techpro360.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TechPro360 Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-gray-500 hover:text-violet-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-violet-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;