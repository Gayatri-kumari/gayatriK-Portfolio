import skillSet from "../utility/data"
import SkillSections from "./SkillSections"
const Skills=()=>{
    return(
        <section className="skillTech" id="skills">
            <h2 className="skillTechHeading">Skills & Technologies</h2>
            <div className="skillContainer" >
                {skillSet.map((skill)=>{
                return(
                  
                   <SkillSections 
                   key={skill.category}
                   skill={skill}/>

                  )
            })}
            </div>
            
             
        </section>
    )

}
export default Skills

 