
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Clock, Shield, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[100svh] relative flex items-center bg-neutral-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/70"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-16 pt-24 md:py-20 lg:py-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6 text-sm text-white">
                <Star size={14} className="text-yellow-400 mr-1.5" />
                <span>Nairobi's Most Trusted Auto Service</span>
              </div>
              <h1 className="heading-xl text-white leading-tight">
                Expert Auto Care<br />For Your <span className="text-primary-400 relative">
                  Vehicle
                  <svg className="absolute -bottom-2 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5C36 1.5 120 1.5 199 4.5" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                From routine maintenance to complex repairs, our certified technicians deliver excellence with state-of-the-art equipment and genuine parts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking" 
                className="btn-primary group py-3.5 px-8"
              >
                Book Appointment
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/services" 
                className="btn-outline py-3.5 border-white/20 text-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="bg-primary/20 rounded-lg p-2">
                  <CheckCircle className="h-5 w-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Certified Experts</p>
                  <p className="text-gray-400 text-xs">Factory-trained technicians</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="bg-primary/20 rounded-lg p-2">
                  <Clock className="h-5 w-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Quick Service</p>
                  <p className="text-gray-400 text-xs">Efficient turnaround</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="bg-primary/20 rounded-lg p-2">
                  <Shield className="h-5 w-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Guaranteed Work</p>
                  <p className="text-gray-400 text-xs">6-month warranty</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Professional mechanic working on a car" 
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star key={item} size={18} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">354 reviews</span>
                </div>
                <p className="text-sm font-medium">
                  "Best auto service in Nairobi! Quick, reliable and affordable."
                </p>
                <div className="mt-3 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium text-sm">JM</span>
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium">James Mwangi</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-6 bg-primary rounded-lg shadow-lg py-3 px-4 text-white font-medium animate-float">
                <span className="block text-2xl font-bold">10+</span>
                <span className="text-sm opacity-90">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
