import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }
      const textClassname = isDarkTheme ? 'dark-mode-text' : 'light-mode-text'
      const websiteDarkLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const modeChengingLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navBarBgClassName = isDarkTheme ? 'navbar-light-mode' : null
      return (
        <nav className={`navbar-container ${navBarBgClassName}`}>
          <img
            src={websiteDarkLogo}
            alt="website logo"
            className="website-logo"
          />
          <ul className="options-list">
            <Link to="/" className="option-link">
              <li className={`option ${textClassname}`}>Home</li>
            </Link>
            <Link to="/about" className="option-link">
              <li className={`option ${textClassname}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="toggle-btn"
            onClick={onChangeTheme}
            data-testid="theme"
          >
            <img src={modeChengingLogo} alt="theme" className="website-logo" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
