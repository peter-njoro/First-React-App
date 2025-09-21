import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "ALX Africa – Data Science Fellow 2025–Present",
      description: "Collaborated on real-world projects, practiced data cleaning (aka, dealing with digital garbage), and mastered version control — in both GitHub and team morale."
    },
    {
      id: 2,
      title: "SafetyPlus Consulting – Intern 2025",
      description: "Assisted with software dev and IT support. Helped fix workflows, troubleshoot issues, and occasionally pretended to look very busy while code compiled."
    },
    {
      id: 3,
      title: "Other Personal Projects as showcased on my github profile",
      description: ""
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="experience-content card">
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-icon">
                  <div className="gradient-circle">
                    <div className="experience-badge">
                      <img src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/${index === 0 ? 'egvwb1PDds' : index === 1 ? 'QzKEWwmkSY' : '7H11sbD2Lv'}.svg`} alt="Experience" />
                    </div>
                  </div>
                </div>
                <div className="experience-details">
                  <h3 className="experience-title">{exp.title}</h3>
                  {exp.description && (
                    <p className="experience-description">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
