
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Kamau",
    role: "Business Owner",
    content: "Cico Auto has been servicing my company's fleet for over 3 years. Their attention to detail and quick turnaround has saved us countless hours of downtime. I highly recommend their services to any business owner.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "Wanjiru Mwangi",
    role: "Regular Customer",
    content: "I've been taking my car to Cico Auto for maintenance and repairs for years. Their team is professional, honest, and always delivers quality work. The pricing is fair and transparent, which I greatly appreciate.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
  {
    id: 3,
    name: "John Odhiambo",
    role: "Car Enthusiast",
    content: "As a car enthusiast, I'm very particular about who works on my vehicles. Cico Auto's mechanics have the expertise and attention to detail that I expect. They've helped me maintain and upgrade my cars with excellent results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section bg-white relative">
      <div 
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"
        aria-hidden="true"
      ></div>
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Clients <span className="text-primary-500">Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our customers' satisfaction is our greatest achievement. Here's what some of them have to say about their experience with Cico Auto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-5 -left-5 text-5xl text-primary-200 font-serif">"</div>
              
              <div className="mb-4 pt-4">
                <RatingStars rating={testimonial.rating} />
              </div>
              
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 text-5xl text-primary-200 font-serif rotate-180">"</div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="btn-outline inline-flex items-center"
          >
            Leave Your Feedback
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
