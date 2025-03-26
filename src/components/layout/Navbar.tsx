
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

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
  }, [location.pathname]);
  
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
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
        >
          <span className="font-display text-2xl font-bold tracking-tight text-primary-900">
            CICO<span className="text-secondary">AUTO</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === item.path
                  ? "text-primary after:w-full"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-secondary">
            <Phone size={16} />
            <span className="text-sm font-medium">+254 712 345 678</span>
          </div>
          <Link
            to="/booking"
            className="btn-primary"
          >
            Book Appointment
          </Link>
        </div>
        
        <button
          className="md:hidden relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-[5] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6`}
      >
        <nav className="flex flex-col space-y-6 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium transition-all duration-200 hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="btn-primary mt-4 w-full flex justify-center"
          >
            Book Appointment
          </Link>
        </nav>
        
        <div className="mt-auto mb-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-primary" />
              <span className="text-foreground">+254 712 345 678</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
