import React from 'react'
import P5Wrapper from '../components/P5Wrapper'
import purpleRain from '../sketches/purpleRain'
import particles from '../sketches/particles'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <P5Wrapper sketch={particles} />
      </div>
    )
  }
}

export default HomePage;
