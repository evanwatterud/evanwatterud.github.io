import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'
import particles from '../sketches/particles'
import explodingDrops from '../sketches/explodingDrops'
import SocialBar from '../components/SocialBar'
import NavBar from '../components/NavBar'

class HomePage extends React.Component {

  render () {
    return (
      <div>
        <div style={styles.canvasContainer}>
          <P5Wrapper sketch={purpleRain} />
        </div>
        <div style={styles.mainContainer}>
          <div style={styles.profileImageContainer}>
            <img style={styles.profileImage} src={require('../assets/images/profileImage.JPG')} alt=''/>
          </div>
          <SocialBar />
        </div>
      </div>
    )
  }
}

const styles = {
  mainContainer: {
    width: window.innerWidth,
    height: window.innerHeight,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute'
  },

  profileImage: {
    objectFit: 'cover',
    width: '200px',
    height: '200px',
    transform: 'rotate(90deg)',
    borderRadius: '50%'
  },

  profileImageContainer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  canvasContainer: {
    zIndex: '-1',
    position: 'absolute',
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default HomePage;
