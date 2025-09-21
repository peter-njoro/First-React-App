import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content card">
          <div className="contact-icons">
            <div className="contact-item">
              <div className="contact-icon">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/qfQPhmsGDj.svg" alt="Email" />
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/9gTGzuHzLV.svg" alt="GitHub" />
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/JVNavGZ71V.svg" alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
