import { useScrollReveal } from "../hooks/useScrollReveal";

// Reusable category section for the skills grid.
const SkillSections = ({ skill }) => {
  const { category, categoryIcon, skills } = skill;
  const [ref, isVisible] = useScrollReveal();

  return(
    <section className={`skillSection reveal-fadeUp ${isVisible ? "is-visible" : ""}`} ref={ref}>
        <h3 className='skillCategory'><span>{categoryIcon}</span>{category}</h3>
        <div className='skills'>
            {skills.map((item, index) => (
              <div className="skillPills" style={{ transitionDelay: `${index * 0.08}s` }} key={item.name}>
              <div className='skillItem'>{item.icon}</div>
              <div className='skillName'>{item.name}</div>
                </div>
            ))}
     
        </div>
       
    </section>
  )
}

export default SkillSections;
