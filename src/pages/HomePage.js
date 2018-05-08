import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'
import particles from '../sketches/particles'

class HomePage extends React.Component {

  render () {
    return (
      <div style={styles.mainContainer}>
        <div>
          {/*<P5Wrapper sketch={particles} />*/}
        </div>
        <div style={styles.profileImageContainer}>
          <img style={styles.profileImage} src={require('../assets/images/profileImage.JPG')} alt=''/>
        </div>
      </div>
    )
  }
}

const styles = {
  mainContainer: {
  },

  profileImage: {
    objectFit: 'cover',
    width: '200px',
    height: '200px',
    transform: 'rotate(90deg)',
    borderRadius: '50%'
  },

  profileImageContainer: {
    marginTop: '10%',
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    width: '200px',
    height: '200px'
  }
}

export default HomePage;
