import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App=()=>{
    return(
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
export default App;