// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeBg = isDarkTheme ? 'home-dark-bg' : ''
      const changeText = isDarkTheme ? 'light-cls' : ''
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`home-container ${changeBg}`}>
            <img src={homeImg} className="home-logo" alt="home" />
            <h1 className={`home-heading ${changeText}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
