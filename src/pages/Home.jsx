import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Projects'
import Service from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
