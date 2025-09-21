import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Facetrack-Lite",
      description: "An app that recognizes students, logs unidentified faces, and manages attendance sessions. Dockerized for easy deployment.",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/G89C9bB9J9.png",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Task & Project Management Tool",
      description: "Role-based access, notifications, and real-time search. Optimized queries for faster task management.",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/3N3PBiyL30.png",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Django REST APIs, Role-Based Access, and AJAX Search Projects.",
      description: "REST APIs, AJAX search, and role-based access experiments. More on my GitHub.",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/1JasugMgCY.png",
      imagePosition: "right"
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
