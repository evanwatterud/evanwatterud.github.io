import React from 'react'
import PropTypes from 'prop-types'
import SocialBar from './SocialBar'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../css/navLinks.css'

class NavBar extends React.Component {
  state = {
    pastSplash: false
  }

  onContactClicked = () => {
    scroll.scrollTo(window.innerHeight + window.innerHeight/2)
  }

  onResumeClicked = () => {
    scroll.scrollToBottom()
  }

  onAboutClicked = () => {
    scroll.scrollTo(window.innerHeight - 0.08*window.innerHeight)
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const pastSplash = window.scrollY > 5;
      if (pastSplash !== this.state.pastSplash) {
        this.setState(prevState => {
          prevState.pastSplash = pastSplash
          return prevState
        })
      }
    });
  }

  render () {
    return (
      <div className="navContainer" style={
          {...styles.navContainer, backgroundColor: (this.state.pastSplash ? 'white' : 'transparent')}
        }>
        <div className="navLinks" >
          <a onClick={this.onContactClicked}>
            Contact Me
          </a>
          <a onClick={this.onResumeClicked}>
            Projects
          </a>
          <a onClick={this.onAboutClicked}>
            About Me
          </a>
        </div>
        <SocialBar />
      </div>
    )
  }
}

const styles = {
  navContainer: {
    width: '100%',
    height: '8%',
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    zIndex: 100,
    transition: 'background-color 0.5s'
  }
}

export default NavBar;
