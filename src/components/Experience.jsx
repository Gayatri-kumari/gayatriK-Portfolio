import { FiBriefcase,FiCalendar,FiMapPin,FiAward } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";




export default function Experience(){
    return(
        <section className="experienceSection" id="experience">
            <h2 className="expHeading">Experience</h2>
            <div className="experienceCard">
                <div className="experienceHeader">
                        <div className="roleData">
                            <div className="roleName">
                                <FiBriefcase /> Application Development Analyst <span className="badge">Full-time</span>
                                {/* <p className="promotionNote">↳ Promoted from Associate</p> */}
                            </div>
                            <div className="companyName">
                                <FaBuilding /> Accenture Pvt. Ltd.
                            </div>
                        </div>
                         
                        <div className="roleMetaData">
                                <div className="roleDate"><FiCalendar /> June 2021 - September 2024</div>
                                <div className="roleLoc"><FiMapPin /> Kolkata, India</div>
                        </div>  
                </div>

                <div className="experienceBody">
                    <h3 className="experienceHeading">Key Responsibilities</h3>
                    <ul >
                        <li>Built and maintained 15-20 reusable React components in TypeScript and JavaScript for enterprise dashboards, improving UI consistency and reducing duplicate code across multiple modules</li>
                        <li>Integrated REST APIs using Axios for dynamic data rendering across 5+ dashboard features, handling loading states, error boundaries, and response mapping</li>
                        <li>Refactored legacy UI components and optimized rendering logic, achieving a 15-20% improvement in page load performance</li>
                        <li>Implemented responsive layouts using Bootstrap, SCSS, and custom CSS, ensuring cross-browser compatibility across 3+ application modules</li>
                        <li>Implemented form validation and error handling across user-facing modules, reducing input errors by 25-30%</li>
                        <li>Debugged UI issues using Chrome DevTools, reducing QA-reported defects by 15% across sprint cycles</li>
                    </ul>
                </div>

                <div className="experienceFooter">
                    <h3>Technologies Used</h3>
                    <div className="techTags">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>JavaScript</span>
                        <span>Axios</span>
                        <span>Bootstrap</span>
                        <span>SCSS</span>
                        <span>REST APIs</span>
                        <span>Chrome DevTools</span>
                        <span>Figma</span>
                    </div>
                    
                </div>
                <div className="experienceAward">
                    <FiAward /> Star Performer - February 2023
                </div>

                
            </div>
        </section>
    )
}