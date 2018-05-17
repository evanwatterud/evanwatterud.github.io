import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'
import particles from '../sketches/particles'
import explodingDrops from '../sketches/explodingDrops'
import SocialBar from '../components/SocialBar'
import NavBar from '../components/NavBar'
import '../css/homePage.css'
import resume from '../assets/resume.pdf'
import PDF from 'react-pdf-js'

class HomePage extends React.Component {

  render () {
    return (
      <div style={styles.mainContainer}>
        <NavBar />
        <div className="homepageTextContainer" >
          <p className="header" >- Evan Watterud -</p>
          <p className="subHeader" >Software developer | rock climber</p>
        </div>
        <div style={styles.backgroundImageContainer}>
          <img style={styles.backgroundImage} src={require('../assets/images/mountains_1.jpg')} />
        </div>
        <div style={styles.contactPageContainer}>
          <P5Wrapper sketch={purpleRain} />
        </div>
        <div style={styles.resumePageContainer}>
          <PDF file={resume} />
        </div>
      </div>
    )
  }
}

const styles = {
  mainContainer: {
    height: '300%',
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

  contactPageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  resumePageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default HomePage;
