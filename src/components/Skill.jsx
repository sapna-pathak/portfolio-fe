import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaTools, FaServer } from "react-icons/fa";

export default function Skill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 scroll-mt-24 bg-[#0c0b0b]"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          My <span className="text-orange-500">Skills</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          As a MERN stack developer, I specialize in building full-stack web applications with modern technologies. 
          From creating beautiful user interfaces to designing robust backend systems, I bring ideas to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center mb-4 gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <FaReact className="w-12 h-12 text-orange-500"/>
              </div>
              <h1 className="text-xl font-semibold text-white">Frontend Development</h1>
            </div>
            <p className="text-gray-300 text-lg mb-4">Building responsive and interactive user interfaces using modern React ecosystem and styling frameworks.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">HTML5</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">CSS3</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">JavaScript</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">React.js</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Redux</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Tailwind CSS</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center mb-4 gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <FaServer className="w-12 h-12 text-orange-500"/>
              </div>
              <h1 className="text-xl font-semibold text-white">Backend Development</h1>
            </div>
            <p className="text-gray-300 text-lg mb-4">Creating scalable server-side applications with RESTful APIs and efficient data handling.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Node.js</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Express.js</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">REST APIs</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">JWT</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Authentication</div>
            </div>
          </div>          
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center mb-4 gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <FaDatabase className="w-12 h-12 text-orange-500"/>
              </div>
              <h1 className="text-xl font-semibold text-white">Database Management</h1>
            </div>
            <p className="text-gray-300 text-lg mb-4">Designing and managing databases with MongoDB, ensuring data integrity and optimal performance.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">MongoDB</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Mongoose</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Database Design</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Data Modeling</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center mb-4 gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <FaTools className="w-12 h-12 text-orange-500"/>
              </div>
              <h1 className="text-xl font-semibold text-white">Tools & Technologies</h1>
            </div>
            <p className="text-gray-300 text-lg mb-4">Proficient in development tools and version control systems for efficient workflow.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Git</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">GitHub</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Postman</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">VS Code</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">NPM</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center mb-4 gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <FaCode className="w-12 h-12 text-orange-500"/>
              </div>
              <h1 className="text-xl font-semibold text-white">Additional Skills</h1>
            </div>
            <p className="text-gray-300 text-lg mb-4">Additional technologies and practices to enhance development capabilities.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Responsive Design</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">API Integration</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">State Management</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Error Handling</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center mb-4 gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <FaNodeJs className="w-12 h-12 text-orange-500"/>
              </div>
              <h1 className="text-xl font-semibold text-white">Full Stack Integration</h1>
            </div>
            <p className="text-gray-300 text-lg mb-4">Seamlessly connecting frontend and backend to create complete, functional web applications.</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">MERN Stack</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Full Stack</div>
                <div className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-sm border border-orange-500/30">Web Development</div>
            </div>
          </div>        
        </div>
      </div>
    </motion.div>
  );
}
