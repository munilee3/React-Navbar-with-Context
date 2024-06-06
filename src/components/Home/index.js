import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const textClassname = isDarkTheme ? 'dark-mode-text' : 'light-mode-text'
      return (
        <div className={`home ${bgContainer}`}>
          <Navbar />
          <div className="home-responsive">
            <div className="home-container">
              <img src={homeImg} alt="home" className="home-image" />
              <h1 className={`home-heading ${textClassname}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
