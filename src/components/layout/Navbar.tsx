
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

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
    document.body.style.overflow = "auto";
  }, [location.pathname]);
  
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
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { title: "Engine Repair", description: "Professional diagnosis and repair services", path: "/services#engine" },
    { title: "Brake Service", description: "Complete brake system inspection and repair", path: "/services#brakes" },
    { title: "Oil Change", description: "Regular maintenance for optimal performance", path: "/services#oil" },
    { title: "Tire Services", description: "Rotation, balancing, and replacement", path: "/services#tires" },
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
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary">CICO</span>
            <span className="text-secondary">AUTO</span>
          </span>
        </Link>
        
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => 
                item.hasDropdown ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-primary/5">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="w-[400px] p-4 grid gap-3"
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.title}
                              to={service.path}
                              className="group block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                {service.title}
                              </div>
                              <div className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link to={item.path}>
                      <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-primary/5 ${
                          location.pathname === item.path 
                            ? "text-primary after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-1 after:h-[2px] after:bg-primary" 
                            : ""
                        }`}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Phone size={18} className="text-primary" />
            <span className="text-sm font-medium">+254 712 345 678</span>
          </div>
          <Link
            to="/booking"
            className="group relative overflow-hidden rounded-full bg-primary text-white px-6 py-2.5 text-sm font-medium transition-all duration-300"
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
      
      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-[5] md:hidden flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col space-y-5 mt-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-lg font-medium transition-all duration-200 hover:text-primary flex justify-between items-center ${
                      location.pathname === item.path
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    }`}
                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronRight className="h-4 w-4" />}
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/20 pl-4">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.title}
                          to={service.path}
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
