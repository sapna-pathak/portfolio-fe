import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobile, FaRocket, FaCog } from "react-icons/fa";

export default function Service() {
  const services = [
    {
      icon: <FaCode className="w-12 h-12 text-orange-500" />,
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces using React.js, Tailwind CSS, and modern web technologies. I focus on user experience and performance optimization.",
    },
    {
      icon: <FaServer className="w-12 h-12 text-orange-500" />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications with Node.js and Express.js. Developing RESTful APIs, handling authentication, and ensuring secure data processing.",
    },
    {
      icon: <FaDatabase className="w-12 h-12 text-orange-500" />,
      title: "Database Design",
      description: "Designing efficient database schemas with MongoDB and Mongoose. Optimizing queries, ensuring data integrity, and implementing proper data relationships.",
    },
    {
      icon: <FaRocket className="w-12 h-12 text-orange-500" />,
      title: "Full Stack Development",
      description: "End-to-end web application development using the MERN stack. From concept to deployment, I deliver complete solutions that are scalable, maintainable, and performant.",
    },
    {
      icon: <FaMobile className="w-12 h-12 text-orange-500" />,
      title: "Responsive Web Design",
      description: "Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes. Ensuring optimal user experience on desktop, tablet, and mobile.",
    },
    {
      icon: <FaCog className="w-12 h-12 text-orange-500" />,
      title: "API Integration",
      description: "Integrating third-party APIs and services. Building custom APIs, handling authentication, and ensuring smooth data flow between frontend and backend systems.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true}}
      className="py-20 scroll-mt-24 bg-[#0c0b0b]"
      id="services"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          My <span className="text-orange-500">Services</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I offer comprehensive MERN stack development services to help bring your ideas to life. 
          From frontend design to backend architecture, I provide end-to-end solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 group"
            >
              <div className="mb-4 p-3 bg-orange-500/10 rounded-xl w-fit group-hover:bg-orange-500/20 transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
