import { useState } from 'react'
import viteLogo from '/vite.svg'
import outlinkImage from '../assets/OutLinkImages.png' // Adjust the path as necessary
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className="content">
          <h2>Never misspell a name again.</h2>
          <p>
            Streamline networking, recruiting, or sourcing with OutLink. Quickly generate quality emails.        
          </p>
          <a href="https://chromewebstore.google.com/detail/outlink/pcipjfafkgapjkjolemmacddjacafnno?authuser=0&hl=en" target="_blank" rel="noopener noreferrer" className="download-button home-button">
            Download Now
          </a>
        </div>
        <img src={outlinkImage} alt="OutLink" className="outlink-image" />
      </div>
    </>
  )
}

export default Home
