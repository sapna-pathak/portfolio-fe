import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      title: "Ailisher",
      description:
        "A full-stack AI-powered learning and assessment platform developed using the MERN stack. The application allows admins and educators to create AI Books, AI Workbooks, and question banks. Users can attempt tests, and their answers are evaluated either by AI or a human evaluator based on the selected option.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Gemini API",
        "REST APIs"
      ],
      github: "https://github.com/sapna-pathak/ailisher-frontend",
      demo: "https://ailisher.vercel.app",
      image: "/ailisher.png"
    }
    ,
    {
      title: "Tryoai",
      description:
        "A full-stack AI-based virtual try-on application developed using the MERN stack. The platform allows users to select clothing items and apply them to a chosen model or upload their own image to visualize how the outfit would look. It integrates AI image processing APIs to generate realistic previews, providing an interactive and personalized fashion experience.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AI Image Processing APIs",
        "REST APIs"
      ],
      github: "https://github.com/sapna-pathak/tryoai-frontend",
      demo: "https://tryoai-frontend-three.vercel.app",
      image: "tryoai.png"
    },
    {
      title: "Jansevak AI",
      description:
        "A full-stack AI-enabled governance and task management platform developed using the MERN stack. The application provides separate dashboards for each state, allowing administrators to manage state-wise data and add multiple government departments. It integrates AI features to assist in analysis, decision-making, and efficient handling of departmental workflows, along with secure authentication and role-based access.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "AI Integration",
        "REST APIs"
      ],
      github: "https://github.com/sapna-pathak/jansevak-fe",
      demo: "https://jansevak-fe.vercel.app",
      image: "jansevak.png"
    }
    ,
    {
      title: "Assetland",
      description:
        "A full-stack real estate web application developed using the MERN stack. The platform enables sellers to list and manage properties for sale, while buyers can browse properties, view detailed listings, and purchase properties through the system. It includes secure user authentication, role-based access for buyers and sellers, property management features, and a responsive user interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "JWT",
        "REST APIs"
      ],
      github: "https://github.com/sapna-pathak/assetland-fe",
      demo: "https://assetland-fe.vercel.app",
      image: "assetland.png"
    }
    ,
    {
      title: "EduVista",
      description:
        "A full-stack online learning platform developed using the MERN stack. The platform allows teachers to create and manage courses by uploading content and integrating YouTube video lectures. Users can browse courses, enroll or purchase them, and access structured learning materials through an intuitive interface. The system includes secure authentication, course management, and scalable backend support.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "YouTube API",
        "JWT",
        "REST APIs"
      ],
      github: "https://github.com/sapna-pathak/EduVistam",
      demo: "https://demo.com",
      image: "eduvista.png"
    },    
    {
      title: "AItronix",
      description:
        "A frontend-only e-commerce web application built using React.js, focused on electronic products. The platform provides a clean and responsive user interface where users can browse electronic items, view product details, add products to the cart, and experience a smooth shopping flow. The project emphasizes UI/UX design, component reusability, and responsive layouts.",
      technologies: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github: "https://github.com/sapna-pathak/aitronix-fe",
      demo: "https://aitronix-fe-plum.vercel.app",
      image: "aitronix.png"
    }
    ,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 scroll-mt-24 bg-[#0c0b0b]"
      id="projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          My <span className="text-orange-500">Projects</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of my recent MERN stack projects. Each project demonstrates my ability to build 
          scalable, full-stack applications with modern technologies and best practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center gap-4 p-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500/80 backdrop-blur-sm p-3 rounded-full hover:bg-orange-500 transition duration-300 hover:scale-110"
                  >
                    <FaGithub className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500/80 backdrop-blur-sm p-3 rounded-full hover:bg-orange-500 transition duration-300 hover:scale-110"
                  >
                    <FaExternalLinkAlt className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 font-medium rounded-full text-xs border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
