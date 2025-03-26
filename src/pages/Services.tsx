
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServiceCard from "../components/services/ServiceCard";
import { Car, Wrench, Zap, Sparkles, Truck, PaintBucket, Volume2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "General Repairs",
    description: "Comprehensive repair services for all vehicle makes and models. Our expert mechanics can diagnose and fix any issue, from minor repairs to major overhauls.",
    icon: <Wrench className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    fullDescription: "Our general repair services cover all aspects of vehicle maintenance and repair. From oil changes and filter replacements to brake services, suspension work, and electrical system diagnostics, our certified mechanics have the expertise to keep your vehicle running at its best. We use state-of-the-art equipment and quality parts to ensure lasting repairs.",
  },
  {
    id: 2,
    title: "Accident Repairs",
    description: "Expert collision repair services to restore your vehicle to pre-accident condition. We work with all insurance companies to make the process hassle-free.",
    icon: <Car className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    fullDescription: "After an accident, our collision repair experts will restore your vehicle to its original condition. We provide comprehensive services including frame straightening, panel repair or replacement, and precise color matching. We work with all insurance companies and can help manage the claims process to minimize stress during this difficult time.",
  },
  {
    id: 3,
    title: "Engine Diagnostics",
    description: "Advanced diagnostic tools to identify and resolve engine issues quickly and accurately. We troubleshoot check engine lights and performance problems.",
    icon: <Zap className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fullDescription: "Our engine diagnostic service utilizes the latest computer diagnostic equipment to accurately identify issues with your vehicle's engine and electronic systems. When your check engine light comes on or you experience performance problems, our technicians can quickly determine the cause and recommend the most effective solution. We can diagnose issues with fuel systems, ignition systems, emissions, and computerized engine management systems.",
  },
  {
    id: 4,
    title: "Detailing & Cleaning",
    description: "Professional detailing services to keep your vehicle looking its best. From exterior washing and waxing to interior deep cleaning and protection.",
    icon: <Sparkles className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fullDescription: "Our detailing services go beyond a standard car wash to restore and protect your vehicle's appearance. Our comprehensive packages include exterior washing, clay bar treatment, polishing, waxing, and paint sealant application. Interior services include vacuuming, steam cleaning of upholstery, leather conditioning, and dashboard protection. We pay attention to every detail to make your vehicle look showroom-new.",
  },
  {
    id: 5,
    title: "Wheel Alignment",
    description: "Precision wheel alignment for optimal handling and tire longevity. We adjust the angles of your wheels to manufacturer specifications.",
    icon: <Truck className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    fullDescription: "Proper wheel alignment is crucial for vehicle handling, fuel economy, and tire life. Our alignment service uses computer precision to adjust the angles of your wheels according to manufacturer specifications. This service corrects uneven tire wear, pulling to one side, and steering wheel vibration. We recommend alignment checks after hitting potholes, curbs, or after installing new tires or suspension components.",
  },
  {
    id: 6,
    title: "Speaker Installations",
    description: "Custom audio system installation and upgrades. We install speakers, amplifiers, subwoofers, and head units to enhance your driving experience.",
    icon: <Volume2 className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fullDescription: "Upgrade your driving experience with our professional audio system installation services. Our technicians can install or upgrade speakers, amplifiers, subwoofers, and head units to create the sound system you desire. We work with all major brands and can design a custom system that fits your vehicle and preferences. All installations are done with attention to detail, ensuring clean wiring and secure mounting.",
  },
  {
    id: 7,
    title: "Body Painting",
    description: "High-quality painting services to refresh or transform your vehicle's look. We offer color matching, custom paint jobs, and paint correction.",
    icon: <PaintBucket className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1635963583709-fc4a1f3e76ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fullDescription: "Our professional painting services can restore your vehicle's appearance after damage or provide a completely new look. We use high-quality paints and modern techniques to ensure a flawless finish. Services include complete vehicle painting, panel repainting, color matching, custom paint jobs, and paint correction for scratches and minor damage. All paint work includes proper preparation and clear coat application for lasting protection.",
  },
  {
    id: 8,
    title: "Scheduled Maintenance",
    description: "Regular maintenance services to keep your vehicle running smoothly and prevent costly repairs. We follow manufacturer-recommended service schedules.",
    icon: <Calendar className="h-5 w-5 text-white" />,
    image: "https://images.unsplash.com/photo-1507977800131-01fcabc82681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fullDescription: "Regular maintenance is key to vehicle longevity and reliability. Our scheduled maintenance services follow manufacturer recommendations to keep your warranty valid and your vehicle in optimal condition. Services include oil changes, filter replacements, fluid checks and top-offs, tire rotations, battery testing, brake inspections, and comprehensive multi-point inspections to catch potential issues before they become major problems.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary-900 to-primary-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Our Complete <span className="text-primary-300">Services</span>
            </h1>
            <p className="text-primary-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Discover our comprehensive range of auto services designed to keep your vehicle 
              running at its best. From routine maintenance to complex repairs, our expert team 
              delivers quality workmanship and exceptional results.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Detailed Service <span className="text-primary-500">Information</span>
            </h2>
            <p className="text-gray-600">
              Learn more about each of our services and how they can benefit your vehicle.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-gray-50 p-1 rounded-xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-auto rounded-lg object-cover aspect-video"
                      />
                    </div>
                  </div>
                  
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{service.fullDescription}</p>
                    
                    <Link 
                      to="/booking" 
                      className="btn-primary"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="border-b border-gray-200 my-16"></div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book an appointment today or contact us for more information about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary">
                Book Appointment
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Services;
