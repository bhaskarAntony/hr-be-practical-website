import { faFaceAngry } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/quote.css'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function H() {
  return (
   <div>
     <header>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="icons">
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faLinkedin}/>
        </div>
      
    </header>
    <div className="hero">
        
    </div>
   </div>
  )
}

export default H
