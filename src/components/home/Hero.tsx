
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center bg-neutral-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1624204731525-995bd559bd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/80"></div>
      </div>
      
      <div className="container relative z-10 px-4 pt-24 lg:pt-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary-300 rounded-full mb-4">
                Premier Auto Service Provider
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
                Expert Auto Care <br /> For Your <span className="text-primary-400">Vehicle</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                Elevate your vehicle's performance with our comprehensive auto services. 
                From routine maintenance to complex repairs, our expert technicians deliver excellence.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/booking" 
                className="btn-primary text-base py-3.5 px-8"
              >
                Book Appointment
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="btn-outline text-base py-3.5 border-white/20 text-white hover:bg-white/10"
              >
                Our Services
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Certified Mechanics</p>
                  <p className="text-gray-400 text-sm">Experts in all vehicle types</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Fast Service</p>
                  <p className="text-gray-400 text-sm">Quick turnaround times</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel bg-white/5 backdrop-blur-sm p-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Professional mechanic working on a car" 
                className="rounded-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-primary-500 rounded-tl-xl rounded-br-xl p-6">
                <p className="text-white font-bold text-2xl">10+</p>
                <p className="text-white/90 text-sm">Years of Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
