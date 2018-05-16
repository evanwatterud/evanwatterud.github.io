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
      <div style={styles.mainContainer}>
        <div style={styles.backgroundImageContainer}>
          <img style={styles.backgroundImage} src={require('../assets/images/mountains_1.jpg')} />
        </div>
        <div style={styles.canvasContainer}>
          <P5Wrapper sketch={purpleRain} />
        </div>
      </div>
    )
  }
}

const styles = {
  mainContainer: {
    height: '200%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute'
  },

  backgroundImage: {
    flex: 1,
    width: '100%'
  },

  backgroundImageContainer: {
    flex: 1,
    display: 'flex'
  },

  canvasContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default HomePage;
