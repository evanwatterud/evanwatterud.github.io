import React from 'react'
import PropTypes from 'prop-types'

class NavBar extends React.Component {
  render () {
    return (
      <div style={styles.navContainer}>

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
    webkitBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)',
    mozBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)',
    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.36)'
  }
}

export default NavBar;
