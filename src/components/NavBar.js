import React from 'react'
import PropTypes from 'prop-types'
import SocialBar from './SocialBar'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../css/navLinks.css'

class NavBar extends React.Component {
  onContactClicked = () => {
    scroll.scrollTo(window.innerHeight)
  }

  onResumeClicked = () => {
    scroll.scrollToBottom()
  }

  render () {
    return (
      <div style={styles.navContainer}>
        <div className="navLinks" style={styles.linksContainer} >
          <a onClick={this.onContactClicked}>
            Contact Me
          </a>
          <a onClick={this.onResumeClicked}>
            Resume
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
    zIndex: 100
  },

  linksContainer: {
    float: 'left',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '20%',
    height: '100%',
    marginLeft: '3%'
  }
}

export default NavBar;
