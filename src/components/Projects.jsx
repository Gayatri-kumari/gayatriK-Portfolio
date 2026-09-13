import { project } from "../utility/data"

const Projects=()=>{
    return(
        <section className="projectSection">
            
         <h2>Projects</h2>
         <div className="projectContainer">
            {project.map((p,id)=>{
                return(
                    <div className="project" key={id} >
                        <div className="projectImg">
                            <img src={p.img} alt={p.title} title={p.title}/>
                        </div>
                        <div className="projectCard">
                            
                             
                                <div className="projectTitle">
                            
                            <h3>{p.title}</h3>  
                            <p>{p.desc}</p>
                            </div>
                            <div className="projectFeatures">
                                <h3>Features:</h3>
                                <ul>
                                    {p.features.map((f,id)=>{
                                        return <li key={id}>{f}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="projectSkills">
                                {p.skills.map((s,id)=>{
                                    return (<>
                                    <div className="skillPill" key={id}>{s}</div>
                                    </>)
                                })}
                            </div>
                            <div className="projectLinks">
                                <a href={p.url} target="_blank">Live URL</a>
                                <a href={p.github} target="_blank">Github</a>
                            </div>
                            
                        
                        


                            

                        </div>
                    </div>
                )
            })}

         </div>
        </section>
    )
}
export default Projects