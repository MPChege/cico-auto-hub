
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                CICO<span className="text-primary-300">AUTO</span>
              </span>
            </Link>
            <p className="text-primary-100/80 max-w-xs">
              Your trusted auto service provider, delivering excellence and reliability since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100/80 hover:text-primary-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100/80 hover:text-primary-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100/80 hover:text-primary-300 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/booking" className="text-primary-100/80 hover:text-primary-300 transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors">General Repairs</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors">Accident Repairs</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors">Engine Diagnostics</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors">Detailing & Cleaning</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100/80 hover:text-primary-300 transition-colors">Body Painting</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
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
        
        <div className="border-t border-primary-800 mt-12 pt-6">
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
