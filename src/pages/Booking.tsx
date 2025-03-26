
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BookingForm from "../components/booking/BookingForm";
import { Check } from "lucide-react";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Convenient online appointment scheduling",
    "Choice of preferred date and time",
    "Email confirmation and reminders",
    "No waiting in line - your slot is reserved",
    "Pre-service consultation available",
    "Transparent service pricing",
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary-900 to-primary-800 relative">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Book Your <span className="text-primary-300">Appointment</span>
            </h1>
            <p className="text-primary-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your service quickly and easily. Choose your preferred date and time, 
              and our expert technicians will take care of the rest.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Why Book Online?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-3 w-3 text-primary-700" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-700 mb-4">
                  If you require urgent assistance or have questions before booking, feel free to contact us directly.
                </p>
                <div className="bg-white rounded-lg p-4 border border-primary-200">
                  <p className="font-medium text-primary-900">Call Us</p>
                  <p className="text-xl font-bold text-primary-700">+254 712 345 678</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ol className="space-y-3 list-decimal pl-5">
                  <li className="text-gray-700">
                    <span className="font-medium">Confirmation:</span> You'll receive a booking confirmation via email or SMS.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Pre-Service:</span> One of our technicians may contact you to discuss your service needs.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Arrival:</span> Arrive at your scheduled time and our team will be ready for you.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Service:</span> Our experts will complete the requested service with quality and care.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Follow-up:</span> We'll explain all work performed and answer any questions.
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Booking;
