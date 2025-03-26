
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                Ready to Experience Premium Auto Service?
              </h2>
              <p className="text-primary-100/90 text-lg mb-8 max-w-xl">
                Whether you need routine maintenance or complex repairs, our expert team is ready to provide 
                you with exceptional service tailored to your vehicle's needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/booking" 
                  className="btn-primary bg-white text-primary-900 hover:bg-gray-100"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="bg-primary-400/30 rounded-full p-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Certified Mechanics</h3>
                    <p className="text-primary-100/70">Our team consists of certified professionals with years of experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="bg-primary-400/30 rounded-full p-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Timely Service</h3>
                    <p className="text-primary-100/70">We respect your time and deliver prompt, efficient service.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="bg-primary-400/30 rounded-full p-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Transparent Pricing</h3>
                    <p className="text-primary-100/70">No hidden costs - clear, upfront pricing for all services.</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center text-white hover:text-primary-300 font-medium transition-colors"
                  >
                    Learn more about our values <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
