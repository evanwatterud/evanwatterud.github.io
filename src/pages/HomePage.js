import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'
import particles from '../sketches/particles'
import explodingDrops from '../sketches/explodingDrops'
import SocialBar from '../components/SocialBar'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'
import AboutMe from '../components/AboutMe'

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

        <div style={styles.aboutMePageContainer}>
          <AboutMe/>
        </div>

        <div style={styles.contactPageContainer}>
          <ContactForm />
        </div>

        <div style={styles.resumePageContainer}>
          <PDF fillWidth style={styles.resume} file={resume} />
        </div>
      </div>
    )
  }
}

const styles = {
  mainContainer: {
    height: '350%',
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

  aboutMePageContainer: {
    flex: 0.5,
    display: 'flex'
  },

  contactPageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#058414'
  },

  resumePageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },

  resume: {
    border: '1px solid rgba(0, 0, 0, .3)',
    WebkitBoxShadow: '5px 5px 5px 0px rgba(0,0,0,0.36)',
    MozBoxShadow: '5px 5px 5px 0px rgba(0,0,0,0.36)',
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.36)',
  }
}

export default HomePage;
