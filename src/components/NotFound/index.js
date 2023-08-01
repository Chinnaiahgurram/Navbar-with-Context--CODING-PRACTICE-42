// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeBg = isDarkTheme ? 'home-dark-bg' : ''
      const changeText = isDarkTheme ? 'light-cls' : ''

      return (
        <>
          <Navbar />
          <div className={`home-container ${changeBg}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`home-text ${changeText}`}>Lost Your Way?</h1>
            <p className={`description ${changeText}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
