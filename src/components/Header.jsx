import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Peter Chege</h1>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contacts" className="nav-link">Contacts</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
