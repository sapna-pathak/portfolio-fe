import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <motion.div
    initial = {{opacity:0, y:50}} //come from downward
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6,ease:"easeOut"}}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#0c0b0b] via-[#2c2b2b] to-[#0c0b0b]'
    > 
    <div className='container md:m-auto mt-10 px-15 flex flex-col md:flex-row items-center md:justify-between justify-center'>
    {/* left side */}
    <div className='md:w-1/2 mb-10 md:mb-0'>
    <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-orange-500'>Sapna Pathak</span></h1>
    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
    <p className='text-lg text-gray-300 mb-8'>I create stunning web experiences with modern technologies and innovative design.</p>
    <div className='flex space-x-4'>
      <a href='#projects' className='px-6 rounded-lg font-medium py-3 bg-amber-500 hover:bg-amber-600 transition duration-300'>View Work</a>
      <a href='#contact' className='px-6 py-3 hover:text-orange-400 border-amber-500 border-2 rounded-lg font-medium transition decoration-orange-300'>Contact Me</a>
    </div>
    </div>

    {/* right side */}
    <div className='md:w-1/2 flex justify-center'>
      <div className='relative w-64 h-64 md:w-80 md:h-80'>
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-300 opacity-70'>
        <motion.img 
        animate={{y:[0,-20,0]}}
        transition={{
          duration:4,
          repeat:Infinity,
          repeatType:"loop",
          ease:"easeInOut"
        }}
        src='/sapna2.jpeg'
        className='relative rounded-full w-64 h-64 md:w-80 md:h-80 z-10 object-fit'></motion.img>
        </div>
      </div>
    </div>
    </div>
    </motion.div>
  )
}
