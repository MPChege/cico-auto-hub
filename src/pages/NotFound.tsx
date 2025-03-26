
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mx-auto w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-primary-200 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-primary-900">404</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn-outline inline-flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-primary inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
