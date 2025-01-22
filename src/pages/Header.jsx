import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/logowithtext.svg' // Adjust the path as necessary
import './Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <nav className='header-nav'>
          <div className="header-wrapper">
            <div className="header-left">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
              </Link>
              <Link to="/product">Product</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/resources">Resources</Link>
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
