import React from 'react'
import '../../src/index.css'

const SocialMedia = () => {
  return (
    <footer>
    <div className="social_links">
    <ul>
        <li>
            <a href="https://twitter.com"><i className="icon_social fa fa-brands fa-twitter"></i></a>
        </li>
        <li>
            <a href="https://github.com/spriyanshucoder"><i className="icon_social fa fa-brands fa-github whatsapp"></i></a>
        </li>
        <li>
            <a href="https://www.instagram.com"><i className="icon_social fa fa-brands fa-instagram instagram"></i></a>
        </li>
        <li>
            <a href="https://www.linkedin.com"><i className="icon_social fa fa-brands fa-linkedin linkedin"></i></a>
        </li>
        </ul>
    </div>
    </footer>
  )
}

export default SocialMedia