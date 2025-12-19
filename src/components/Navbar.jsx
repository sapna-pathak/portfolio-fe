import React, { useState } from "react";
import {FaBars} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'

export default function Navbar() {
    const [showMenu, setshowMenu] = useState(false);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setshowMenu(false);
    };

  return (
    <div className="fixed w-full z-50 backdrop-blur-lg py-4 px-20 shadow-xl bg-opacity-10">
      <div className="container flex justify-between items-center mx-auto">
        <a href="/" className="text-3xl font-extrabold text-white">
          Sapna
          <span className="text-orange-500">Pathak</span>
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        </a>
        <ul className="hidden md:flex space-x-10">
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="/" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Home</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <div className="md:hidden">
            {
                showMenu?
                <FaXmark className="text-2xl cursor-pointer"onClick={()=>setshowMenu(!showMenu)}/>:
                <FaBars className="text-2xl cursor-pointer" onClick={()=>setshowMenu(!showMenu)}/>

            }
        </div>
      </div>
      {
        showMenu && (
            <ul className="md:hidden fixed top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-lg rounded-lg p-4 flex flex-col space-y-4 text-center z-40 border-t border-orange-500/20">
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="/" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setshowMenu(false);
            }}>Home</a>
            {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
            {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
            {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
          </li>
          <li className="relative transition duration-300 hover:text-orange-500 cursor-pointer group">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
          </li>
            </ul>
        )
      }
    </div>
  );
}
