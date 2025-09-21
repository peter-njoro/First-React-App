import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/g6mF0j0uoy.svg",
      icon2: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/r7FoE2X2HR.svg"
    },
    {
      name: "django",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/raiJ0wpeLx.svg",
      icon2: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/BGESaHcoey.svg"
    },
    {
      name: "Postgres",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/AKFQv5PQQX.svg",
      icon2: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/XcEKdx3C9M.svg",
      icon3: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/4MaqNLPwgE.svg",
      icon4: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/dRNA8rdnLu.svg"
    },
    {
      name: "Git",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/cxRpURLNxR.svg"
    },
    {
      name: "Data Analysis",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/AqenaRGcnP.svg",
      icon2: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/ZRqebXguZd.svg"
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-content card">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  {skill.name === "Python" && (
                    <>
                      <img src={skill.icon} alt="" className="python-blue" />
                      <img src={skill.icon2} alt="" className="python-yellow" />
                    </>
                  )}
                  {skill.name === "django" && (
                    <>
                      <img src={skill.icon} alt="" className="django-1" />
                      <img src={skill.icon2} alt="" className="django-2" />
                    </>
                  )}
                  {skill.name === "Postgres" && (
                    <>
                      <img src={skill.icon} alt="" className="postgres-1" />
                      <img src={skill.icon2} alt="" className="postgres-2" />
                      <img src={skill.icon3} alt="" className="postgres-3" />
                      <img src={skill.icon4} alt="" className="postgres-4" />
                    </>
                  )}
                  {skill.name === "Git" && (
                    <img src={skill.icon} alt="" className="git-icon" />
                  )}
                  {skill.name === "Data Analysis" && (
                    <>
                      <img src={skill.icon} alt="" className="data-1" />
                      <img src={skill.icon2} alt="" className="data-2" />
                    </>
                  )}
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
