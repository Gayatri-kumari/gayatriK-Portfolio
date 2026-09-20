import skillSet from "../utility/data";
import SkillSections from "./SkillSections";

// Skills grouped by technology area.
const Skills = () => {
    return (
        <section className="skillTech" id="skills">
            <h2 className="skillTechHeading">Skills & Technologies</h2>
            <div className="skillContainer">
                {skillSet.map((skill) => (
                    <SkillSections key={skill.category} skill={skill} />
                ))}
            </div>
            
             
        </section>
    );

}
export default Skills;

 