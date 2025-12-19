import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/sapna-pathak-8853ab341", name: "LinkedIn" },
    { icon: <FaGithub className="w-5 h-5" />, link: "https://github.com/sapna-pathak", name: "GitHub" },
    { icon: <FaInstagram className="w-5 h-5" />, link: "https://www.instagram.com/sapna_pathak_ji", name: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-orange-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-extrabold text-white">
              Sapna<span className="text-orange-500">Pathak</span>
            </h2>
            <p className="text-gray-400 text-sm">
              MERN Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-orange-500 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:sapipathak123@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition duration-300 group"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition duration-300">
                  <FaEnvelope className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm">sapipathak123@gmail.com</span>
              </a>
              <a
                href="tel:+918860409538"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition duration-300 group"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition duration-300">
                  <FaPhone className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm">+91 8860409538</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <FaMapMarkerAlt className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm">A-143 Gharoli Mayur Vihar Phase III Delhi</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sapna Pathak. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full transition duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FaArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
