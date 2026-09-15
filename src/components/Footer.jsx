import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <h3>Gayatri kumari</h3>
      <div className="socialBtns">
                              <a href="https://www.linkedin.com/in/gayatri-kumari-4954b140b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                  <FiLinkedin   />
                              </a>
                              <a href="https://github.com/Gayatri-kumari" target="_blank" rel="noreferrer" aria-label="GitHub">
                                  <FiGithub   />
                              </a>
                              <a href="mailto:gayatrirao2209@gmail.com" aria-label="Email">
                                  <FiMail   />
                              </a>
                          </div> 
      <p>Designed in <span>Figma</span>  , coded in <span>Visual Studio Code</span> using <span>React.js</span> and <span>Tailwind CSS</span> ,deployed with <span>netlify</span> </p>
    </footer>
  )
}

export default Footer
