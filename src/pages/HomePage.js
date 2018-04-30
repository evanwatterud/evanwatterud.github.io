import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <P5Wrapper sketch={purpleRain} />
      </div>
    )
  }
}

export default HomePage;
