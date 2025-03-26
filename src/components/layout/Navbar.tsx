
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = "auto";
  }, [location.pathname]);
  
  // Toggle body scroll when mobile menu opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary-900">
            CICO<span className="text-secondary">AUTO</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === item.path
                  ? "text-primary after:w-full font-semibold"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-secondary-foreground border-r pr-6 border-gray-200">
            <Phone size={18} className="text-primary" />
            <span className="text-sm font-medium">+254 712 345 678</span>
          </div>
          <Link
            to="/booking"
            className="relative group overflow-hidden rounded-full bg-primary text-white px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10 flex items-center">
              Book Appointment
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
        
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-[5] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-20 px-6`}
      >
        <nav className="flex flex-col space-y-5 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium transition-all duration-200 hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="mt-4 w-full flex justify-center items-center space-x-2 bg-primary text-white rounded-full py-3 font-medium shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <span>Book Appointment</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </nav>
        
        <div className="mt-auto mb-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 bg-primary-50 p-3 rounded-lg">
              <Phone size={18} className="text-primary" />
              <span className="text-foreground font-medium">+254 712 345 678</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
