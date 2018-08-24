import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'
import particles from '../sketches/particles'
import explodingDrops from '../sketches/explodingDrops'
import SocialBar from '../components/SocialBar'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'
import AboutMe from '../components/AboutMe'
import GitHubProjects from '../components/GitHubProjects'

import '../css/homePage.css'

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

        <div style={styles.projectsPageContainer}>
          <GitHubProjects />
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
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: -1000
  },

  backgroundImageContainer: {
    flex: 1,
    display: 'flex'
  },

  aboutMePageContainer: {
    flex: 0.5,
    display: 'flex',
    background: 'white',
    zIndex: 0
  },

  contactPageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#058414'
  },

  projectsPageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
}

export default HomePage;
