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
        <div className="main-content">
          <div className="content">
            <div className="flex-container">
              <div className="left-content">
                <h2>Never misspell a name again.</h2>
                <p>
                  Streamline networking, recruiting, or sourcing with OutLink. <br/>Quickly generate quality emails.
                </p>
                <a href="https://chromewebstore.google.com/detail/outlink/pcipjfafkgapjkjolemmacddjacafnno?authuser=0&hl=en" target="_blank" rel="noopener noreferrer" className="download-button home-button">
                  Download Now
                </a>
              </div>
              <div className="right-content">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jmFDLhWf-BA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ aspectRatio: '16 / 9' }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
