import { IoLocationOutline } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../utility/resume.pdf"
import StickyNotes from "./StickyNotes";

// Introductory hero content and primary portfolio actions.
const Hero = function () {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero-imageIcon">
                        <div className="polariod">
                            <div className="polariod-image"><img src="totoro.jpg" alt="Totoro" /></div>
                            <div className="polariod-caption">
                                <IoLocationOutline className="font-extrabold text-red-800 text-xl" />
                                <span className="text-[.9rem]">Visakhapatnam, India</span>
                                <div className="dash"></div>
                            </div>
                            <div className="hero-badge">Open to new opportunities</div>
                        </div>
                    </div>

                    <div className="hero-content">
                        <span className="text-sm font-mono tracking-wide text-stone-500">Hi, I'm</span>
                        <h1 className="heading">Gayatri Kumari</h1>
                        <h3 className="title">
                            Java Full Stack Developer <span className="text-stone-400 dot">·</span> Frontend-leaning
                        </h3>
                        <p className="introduction">
                            I turn ideas into interfaces people actually enjoy using. <span className="highlight">React</span> and <span className="highlight">frontend engineering</span> are my foundation, and I'm deepening my <span className="highlight">Java & Spring Boot</span> skills toward <span className="highlight">full-stack development</span>.
                            <span className="italic">
                                Curious what I'm like outside of code? There's a toggle for that.
                            </span>
                        </p>

                        <div className="heroContentBtns">
                            <a href={resume} target="_blank"  className="btn-primary flex gap-1.5 items-center">
                                <MdOutlineFileDownload className="text-lg" />
                                View CV
                            </a>
                            <a href="#contact" className="btn-secondary">Get in Touch</a>
                            <div className="socialBtns">
                                <a href="https://www.linkedin.com/in/gayatri-kumari-4954b140b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <FiLinkedin />
                                </a>
                                <a href="https://github.com/Gayatri-kumari" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <FiGithub />
                                </a>
                                <a href="mailto:gayatrirao2209@gmail.com" aria-label="Email">
                                    <FiMail />
                                </a>
                            </div>
                        </div>
                    </div>
                    <StickyNotes />
                </div>
            </div>
        </>
    );
}
export default Hero;
