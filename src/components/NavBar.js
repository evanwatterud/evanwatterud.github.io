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
    scroll.scrollTo(window.innerHeight)
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const pastSplash = window.scrollY > window.innerHeight - 1;
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
      <div className="navContainer" style={{...styles.navContainer, opacity: (this.state.pastSplash ? 0 : 1)}}>
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
    backgroundColor: '#f7f7f4',
    overflow: 'hidden',
    WebkitBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)',
    MozBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)',
    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)',
    zIndex: 100,
    transition: 'opacity 0.7s'
  }
}

export default NavBar;
