import React from 'react'
import NavBar from './normalPortfolioComp/NavBar'
import Hero from './normalPortfolioComp/Hero'
import Skills from './normalPortfolioComp/Skills'
import Experience from './normalPortfolioComp/Experience'
import Projects from './normalPortfolioComp/Projects'
import Education from './normalPortfolioComp/Education'
import Contact from './normalPortfolioComp/Contact'
import Footer from './normalPortfolioComp/Footer'

const NormalMode = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default NormalMode
