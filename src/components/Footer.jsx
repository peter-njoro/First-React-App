import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/TvoOrWu1hk.svg" alt="Footer Background" />
      </div>
      <div className="footer-content">
        <div className="footer-icon">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/4u3ti1bLLW.svg" alt="Python Blue" className="python-icon-blue" />
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/FNo0mcYFzR.svg" alt="Python Yellow" className="python-icon-yellow" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
