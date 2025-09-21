import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <p className="hero-subtitle">Python backend developer</p>
              <div className="hero-main">
                <h1 className="hero-title">Hello, my name is Peter Chege</h1>
                <div className="hero-description">
                  <p>I turn caffeine and problem-solving into reliable software… usually on the first try.</p>
                </div>
                <div className="hero-buttons">
                  <button className="btn-primary">Projects</button>
                  <button className="btn-secondary">LinkedIn</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-bg">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/N58VLzL2Rm.svg" alt="Background" className="bg-yellow" />
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/78GPtYoJPZ.svg" alt="Background Vector" className="bg-vector" />
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/mLggn3yvph.png" alt="Peter Chege" className="hero-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
