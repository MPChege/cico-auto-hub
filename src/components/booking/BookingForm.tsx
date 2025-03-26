
import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Car, Phone, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  vehicle: string;
  model: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  vehicle: "",
  model: "",
  service: "General Repairs",
  message: "",
};

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Appointment request submitted successfully! We'll contact you soon to confirm.");
      setFormData(initialFormData);
    }, 1500);
  };
  
  const serviceOptions = [
    "General Repairs",
    "Accident Repairs",
    "Engine Diagnostics",
    "Detailing & Cleaning",
    "Wheel Alignment",
    "Speaker Installations",
    "Body Painting",
    "Other",
  ];
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-display font-bold mb-2">Book Your Appointment</h3>
          <p className="text-gray-600">
            Fill out the form below to schedule service for your vehicle.
          </p>
        </div>
        
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
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                required
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
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
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
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type*
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                required
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date*
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time*
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Make*
              </label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g. Toyota, Honda, BMW"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Model*
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. Corolla, Civic, X5"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide any additional information about your service needs..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
              ></textarea>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary py-3 text-base ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingForm;
