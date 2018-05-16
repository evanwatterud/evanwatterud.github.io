import React from 'react'
import PropTypes from 'prop-types'
import SocialBar from './SocialBar'

class NavBar extends React.Component {
  onContactClicked = () => {
    window.scrollTo(0, window.innerHeight);
  }

  render () {
    return (
      <div style={styles.navContainer}>
        <div style={styles.linksContainer} >
          <a style={styles.contactLink} onClick={this.onContactClicked}>
            <p>Text</p>
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

  contactLink: {
    float: 'left',
    backgroundColor: 'red',
    width: '100px',
    height: '100%'
  }
}

export default NavBar;
