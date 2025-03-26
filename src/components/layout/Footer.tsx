
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowRight, MessageCircle } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-900/95 text-white relative overflow-hidden">
      {/* Contact Quick Links */}
      <div className="container mx-auto py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-500 mb-4">Get immediate assistance</p>
            <a href="tel:+254712345678" className="text-primary font-medium hover:text-primary-600 transition-colors">
              +254 712 345 678
            </a>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-500 mb-4">Chat with our support team</p>
            <button className="text-primary font-medium hover:text-primary-600 transition-colors">
              Start Chat
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 mb-4">Get response within 24 hours</p>
            <a href="mailto:info@cicoauto.com" className="text-primary font-medium hover:text-primary-600 transition-colors">
              info@cicoauto.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                CICO<span className="text-primary-300">AUTO</span>
              </span>
            </Link>
            <p className="text-primary-100/80 max-w-xs">
              Your trusted auto service provider, delivering excellence and reliability since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors w-10 h-10 rounded-full flex items-center justify-center border border-white/10" aria-label="Facebook">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors w-10 h-10 rounded-full flex items-center justify-center border border-white/10" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors w-10 h-10 rounded-full flex items-center justify-center border border-white/10" aria-label="Twitter">
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  General Repairs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Accident Repairs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Engine Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Detailing & Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Body Painting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-300 mt-1 flex-shrink-0" />
                <span className="text-primary-100/80">Kiambu Road, next to Fourways Junction Total Petrol Station, Nairobi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-300 flex-shrink-0" />
                <span className="text-primary-100/80">+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-300 flex-shrink-0" />
                <span className="text-primary-100/80">info@cicoauto.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary-300 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-primary-100/80">Mon-Fri: 8:00 AM - 6:00 PM</div>
                  <div className="text-primary-100/80">Sat: 9:00 AM - 4:00 PM</div>
                  <div className="text-primary-100/80">Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100/70 text-sm">
              © {year} Cico Auto. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-primary-100/70 text-sm hover:text-primary-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-100/70 text-sm hover:text-primary-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
