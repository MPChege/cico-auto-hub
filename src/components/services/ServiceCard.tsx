
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
      className="group overflow-hidden rounded-2xl shadow-lg relative h-[400px] border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full p-6">
        <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
        <h3 className="text-white font-semibold text-xl md:text-2xl mb-2">{title}</h3>
        <p className="text-white/80 mb-6 text-sm md:text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
        <Link 
          to={`/services#service-${id}`}
          className="inline-flex items-center text-white font-medium py-2 px-4 rounded-lg bg-primary/80 backdrop-blur-sm hover:bg-primary transition-colors"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
