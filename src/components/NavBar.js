import React from 'react'
import PropTypes from 'prop-types'
import SocialBar from './SocialBar'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class NavBar extends React.Component {
  onContactClicked = () => {
    scroll.scrollToBottom()
  }

  render () {
    return (
      <div style={styles.navContainer}>
        <div style={styles.linksContainer} >
          <a style={styles.link} onClick={this.onContactClicked}>
            Text
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
    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)'
  },

  linksContainer: {
    float: 'left',
    display: 'flex',
    justifyContent: 'center',
    width: '10%',
    height: '100%'
  },

  link: {
    backgroundColor: 'red',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textShadow: '0 0 1px rgba(255,255,255,0.3)',
    fontFamily: "'Raleway', sans-serif",
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default NavBar;
