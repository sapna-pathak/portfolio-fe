import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPaintBrush } from "react-icons/fa";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="about"
      className="py-20 scroll-mt-24 bg-[#0c0b0b]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-15">
        <h1 className="text-3xl font-bold text-center">
          About <span className="text-orange-500">Me</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quas
          molestiae quia saepe, repudiandae quos debitis quasi quidem fugit ex
          amet cumque asperiores animi illum facilis a fuga iusto itaque?
        </p>
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-8 px-10">
          <div className="w-full md:w-1/2 rounded-xl flex justify-center items-center overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-100 h-100 object-cover rounded-xl"
              src="/sapna.jpg"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl p-4 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                explicabo tempore unde consequatur officia. Veritatis, quae
                veniam. Sunt ab rerum quo iusto molestiae nesciunt, esse debitis
                reiciendis quos praesentium tempora?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 group">
                  <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-4 group-hover:bg-orange-500/20 transition duration-300">
                    <FaLightbulb className="text-orange-500 text-4xl"/>
                  </div>
                  <h1 className="text-xl font-semibold mb-3 text-white">Innovative</h1>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam magnam velit tempora vero, consequatur minus?
                    
                  </p>
                  
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 group">
                  <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-4 group-hover:bg-orange-500/20 transition duration-300">
                    <FaPaintBrush className="text-orange-500 text-4xl"/>
                  </div>
                  <h1 className="text-xl font-semibold mb-3 text-white">Creative</h1>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam magnam velit tempora vero, consequatur minus?
                   
                  </p>
                  
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
