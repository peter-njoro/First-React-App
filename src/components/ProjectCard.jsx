import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const { title, description, image, imagePosition } = project

  return (
    <div className={`project-card card ${imagePosition === 'left' ? 'reverse' : ''}`}>
      <div className="project-info">
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <button className="project-btn btn-secondary">View Project</button>
        </div>
      </div>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default ProjectCard
