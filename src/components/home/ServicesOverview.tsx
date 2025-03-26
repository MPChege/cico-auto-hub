
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Wrench, Zap, Sparkles, ArrowRight, Truck, PaintBucket } from "lucide-react";

const services = [
  {
    id: 1,
    title: "General Repairs",
    description: "Comprehensive repair services to keep your vehicle running smoothly.",
    icon: <Wrench className="h-6 w-6 text-primary-500" />,
    link: "/services",
  },
  {
    id: 2,
    title: "Accident Repairs",
    description: "Expert collision repair to restore your vehicle to pre-accident condition.",
    icon: <Car className="h-6 w-6 text-primary-500" />,
    link: "/services",
  },
  {
    id: 3,
    title: "Engine Diagnostics",
    description: "Advanced diagnostic tools to identify and resolve engine issues.",
    icon: <Zap className="h-6 w-6 text-primary-500" />,
    link: "/services",
  },
  {
    id: 4,
    title: "Detailing & Cleaning",
    description: "Professional detailing services to keep your vehicle looking its best.",
    icon: <Sparkles className="h-6 w-6 text-primary-500" />,
    link: "/services",
  },
  {
    id: 5,
    title: "Wheel Alignment",
    description: "Precision wheel alignment for optimal handling and tire longevity.",
    icon: <Truck className="h-6 w-6 text-primary-500" />,
    link: "/services",
  },
  {
    id: 6,
    title: "Body Painting",
    description: "High-quality painting services to refresh or transform your vehicle's look.",
    icon: <PaintBucket className="h-6 w-6 text-primary-500" />,
    link: "/services",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section bg-gray-50 py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-primary-500">Premium</span> Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of automotive services to keep your vehicle in optimal condition,
            all delivered with expertise and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-soft card-hover border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
