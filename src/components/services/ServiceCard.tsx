
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  delay?: number;
}

const ServiceCard = ({ id, title, description, icon, image, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 group card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="bg-primary rounded-lg w-10 h-10 flex items-center justify-center mr-3">
            {icon}
          </div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/services#service-${id}`}
          className="inline-flex items-center text-primary font-medium hover:text-primary-700 transition-colors"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
