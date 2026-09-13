import React from 'react'

const SkillSections = ({skill}) => {
    const  {category,categoryIcon,skills}=skill  
  return(
    <div className='skillSection'>
        <h3 className='skillCategory'><span>{categoryIcon}</span>{category}</h3>
        <div className='skills'>
            {skills.map(item=>{
            return(
                <div className="skillPills" key={item.name}>
                <div className='skillItem'>{item.icon}</div>
                <div className='skillName'>{item.name}</div>
                </div>
            )
            })}
     
        </div>
       
    </div>
  )
}

export default SkillSections
