import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const textClassname = isDarkTheme ? 'dark-mode-text' : 'light-mode-text'
      return (
        <div className={`home ${bgContainer}`}>
          <Navbar />
          <div className="home-responsive">
            <div className="home-container">
              <img src={aboutImg} alt="about" className="home-image" />
              <h1 className={`about-heading ${textClassname}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
