import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeBg = isDarkTheme ? 'about-dark-bg' : ''
      const changeText = isDarkTheme ? 'light-cls' : ''

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`about-container ${changeBg}`}>
            <img src={aboutImg} alt="about" className="about-logo" />
            <h1 className={`home-text ${changeText}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
