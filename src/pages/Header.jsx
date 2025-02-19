import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/logowithtext.svg' // Adjust the path as necessary
import './Header.css'

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth < 750)
    if (window.innerWidth >= 750) {
      setDropdownOpen(false) // Close dropdown on larger screens
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="header">
        <nav className='header-nav'>
          <div className="header-wrapper">
            <div className="header-left">
              <Link to="/">
                <img src={isMobile ? '/Icon128.png' : logo} alt="Logo" className="logo icon128" />
              </Link>
              <div className="nav-links">
                {isMobile ? (
                  <div className="dropdown" onClick={toggleDropdown}>
                    <button className="dropdown-button">Menu</button>
                    {isDropdownOpen && (
                      <div className="dropdown-content">
                        <Link to="/product">Product</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/resources">Resources</Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="nav-items">
                    <Link to="/product">Product</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/resources">Resources</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="header-right">
              <a href="https://chromewebstore.google.com/detail/outlink/pcipjfafkgapjkjolemmacddjacafnno?authuser=0&hl=en" className='download-button' target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Header
