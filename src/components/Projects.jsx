import { useScrollReveal } from "../hooks/useScrollReveal";
import { project } from "../utility/data"

// Project cards with live and source links.
const Projects = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className={`projectSection reveal-scale ${isVisible ? "is-visible" : ""}`} id="projects" ref={ref}>
            <h2>Projects</h2>
            <div className="projectContainer">
                {project.map((item, index) => (
                    <div className="project" key={index}>
                        <div className="projectImg">
                            <img src={item.img} alt={item.title} title={item.title} />
                        </div>
                        <div className="projectCard">
                            <div className="projectTitle">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            </div>
                            <div className="projectFeatures">
                                <h3>Features:</h3>
                                <ul>
                                    {item.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="projectSkills">
                                {item.skills.map((skill, skillIndex) => (
                                    <div className="skillPill" key={skillIndex}>{skill}</div>
                                ))}
                            </div>
                            <div className="projectLinks">
                                <a href={item.url} target="_blank" rel="noreferrer">Live URL</a>
                                <a href={item.github} target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects