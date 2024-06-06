import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'
      const textClassname = isDarkTheme ? 'dark-mode-text' : 'light-mode-text'
      return (
        <div className={`home ${bgContainer}`}>
          <Navbar />
          <div className="home-responsive">
            <div className="home-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="home-image"
              />
              <h1 className={`notfound-heading ${textClassname}`}>
                Lost Your Way
              </h1>
              <p className={`description ${textClassname}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
