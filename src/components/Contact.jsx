import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here to send email
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      detail: "sapipathak123@gmail.com",
      link: "mailto:sapipathak123@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      detail: "+91 8860409538",
      link: "tel: 8860409538",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      detail: "A-143 Gharoli Mayur Vihar Phase III Delhi",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/sapna-pathak-8853ab341", name: "LinkedIn" },
    { icon: <FaGithub className="w-6 h-6" />, link: "https://github.com/sapna-pathak", name: "GitHub" },
    { icon: <FaInstagram className="w-6 h-6" />, link: "https://www.instagram.com/sapna_pathak_ji", name: "Instagram" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 scroll-mt-24 bg-[#0c0b0b]"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out! 
          I'm always open to discussing new opportunities and interesting projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              I'm available for freelance work and full-time opportunities. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl hover:bg-gradient-to-br hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 transition-all duration-300 group border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition duration-300">
                    <div className="text-orange-500 group-hover:scale-110 transition duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{info.title}</h3>
                    <p className="text-gray-300">{info.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
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
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-orange-500 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 border border-orange-500/20 focus:border-orange-500/50 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 border border-orange-500/20 focus:border-orange-500/50 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 border border-orange-500/20 focus:border-orange-500/50 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 resize-none border border-orange-500/20 focus:border-orange-500/50 transition-all duration-300"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
