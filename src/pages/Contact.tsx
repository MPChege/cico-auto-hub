
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary-900 to-primary-800 relative">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Contact <span className="text-primary-300">Us</span>
            </h1>
            <p className="text-primary-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Have questions or need to schedule a service? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form, and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Service Question">Service Question</option>
                      <option value="Booking Information">Booking Information</option>
                      <option value="Price Quote">Price Quote</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary py-3 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-64 rounded-xl overflow-hidden mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8127136133613!2d36.8325!3d-1.2405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTQnMjUuNCJTIDM2wrA0OSc1Ny4wIkU!5e0!3m2!1sen!2ske!4v1635273059545!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Cico Auto Location"
                ></iframe>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Kiambu Road, next to Fourways Junction Total Petrol Station, Nairobi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+254 712 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@cicoauto.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Business Hours</p>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
                <div className="bg-primary-50 border border-primary-100 rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-2 mr-4">
                      <Phone className="h-5 w-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-900">24/7 Roadside Assistance</p>
                      <p className="text-primary-800">+254 712 345 678</p>
                      <p className="text-sm text-primary-700 mt-1">
                        Available for emergencies such as breakdowns, jump starts, and towing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2">Do I need an appointment for service?</h3>
              <p className="text-gray-600">
                While we do accept walk-ins for minor services, we recommend scheduling an appointment to ensure prompt service and minimize wait times.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">How long does a typical service take?</h3>
              <p className="text-gray-600">
                Service times vary depending on the type of service. Oil changes typically take 30-60 minutes, while more complex repairs may take several hours or days. We'll provide an estimated completion time when you book.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">Do you offer a warranty on repairs?</h3>
              <p className="text-gray-600">
                Yes, we provide a warranty on all our services. The warranty period depends on the type of repair, but typically ranges from 3-12 months or a specified mileage.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, M-Pesa, credit cards, and debit cards. For corporate clients, we also offer invoicing options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Contact;
