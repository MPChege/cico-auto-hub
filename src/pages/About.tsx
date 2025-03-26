import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { Check, Users, Award, Clock, Wrench } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "David Mwangi",
      role: "Founder & Master Technician",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "With over 15 years of experience, David founded Cico Auto with a vision to provide honest, high-quality auto services in Nairobi.",
    },
    {
      name: "Sarah Kimani",
      role: "Service Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Sarah ensures that every service meets our high standards. Her attention to detail and customer service skills keep our clients coming back.",
    },
    {
      name: "James Omondi",
      role: "Lead Mechanic",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      bio: "James has specialized training in European and Japanese vehicles. His diagnostic skills and technical knowledge are unmatched.",
    },
    {
      name: "Daniel Njoroge",
      role: "Body Work Specialist",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Daniel is an artist when it comes to body repairs and painting. His work restores vehicles to their original beauty after accidents.",
    },
  ];

  const ourValues = [
    {
      title: "Quality Workmanship",
      description: "We never compromise on the quality of our work, using only the best parts and materials for every repair.",
      icon: <Wrench className="h-6 w-6 text-primary-500" />,
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work hard to exceed expectations and build lasting relationships with our clients.",
      icon: <Users className="h-6 w-6 text-primary-500" />,
    },
    {
      title: "Integrity & Honesty",
      description: "We believe in transparent pricing and honest recommendations, never suggesting unnecessary services.",
      icon: <Award className="h-6 w-6 text-primary-500" />,
    },
    {
      title: "Timely Service",
      description: "We respect your time and strive to complete all services efficiently without sacrificing quality.",
      icon: <Clock className="h-6 w-6 text-primary-500" />,
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary-900 to-primary-800 relative">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              About <span className="text-primary-300">Cico Auto</span>
            </h1>
            <p className="text-primary-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Get to know the team behind Nairobi's premier auto service center and discover our 
              commitment to quality, integrity, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Cico Auto began as a small garage with a big vision - to provide honest, 
                high-quality auto services that customers could trust. Our founder, David Mwangi, had worked 
                for years at various garages and dealerships, where he saw firsthand how customers were often 
                overcharged or given unnecessary services.
              </p>
              <p className="text-gray-700 mb-4">
                With a commitment to doing things differently, David established Cico Auto on the principles 
                of integrity, quality workmanship, and exceptional customer service. Starting with just two 
                mechanics and a small workspace, we quickly gained a reputation for honest dealings and expert repairs.
              </p>
              <p className="text-gray-700 mb-4">
                Today, Cico Auto has grown into a full-service auto center with state-of-the-art equipment 
                and a team of certified technicians. Despite our growth, we've never lost sight of our 
                founding principles. Every vehicle that enters our shop receives the same attention to 
                detail and commitment to quality that has defined our business from day one.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="David Mwangi, Founder" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">David Mwangi</p>
                  <p className="text-gray-600 text-sm">Founder & Master Technician</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1613743988405-8b865ee10f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Cico Auto garage" 
                className="rounded-xl shadow-md w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Our <span className="text-primary-500">Values</span>
            </h2>
            <p className="text-gray-600">
              These core principles guide everything we do at Cico Auto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Meet Our <span className="text-primary-500">Team</span>
            </h2>
            <p className="text-gray-600">
              Our skilled professionals are the heart of Cico Auto. Get to know the experts who will care for your vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Why Choose Cico Auto?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-700 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Certified Technicians</h3>
                    <p className="text-primary-100/80">Our mechanics are certified and continuously trained on the latest automotive technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">State-of-the-Art Equipment</h3>
                    <p className="text-primary-100/80">We invest in modern diagnostic and repair equipment to provide accurate service.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Transparent Pricing</h3>
                    <p className="text-primary-100/80">No hidden fees or unexpected charges - we provide clear estimates before any work begins.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Quality Parts</h3>
                    <p className="text-primary-100/80">We use only quality OEM or equivalent parts for all repairs and replacements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Warranty on Services</h3>
                    <p className="text-primary-100/80">We stand behind our work with service warranties for your peace of mind.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/booking"
                  className="btn-primary bg-white text-primary-900 hover:bg-gray-100"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560276111-9260922684d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                alt="Our garage facility" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
