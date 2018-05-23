import React from 'react'
import PropTypes from 'prop-types'
import '../css/aboutMePage.css'

class AboutMe extends React.Component {
  render () {
    return (
      <div className="aboutMeWrapper" >
        <div className="profileImageContainer">
          <img className="profileImage" src={require("../assets/images/profileImage.JPG")}/>
        </div>

        <div className="aboutMeTextContainer">
          <p className="aboutMeText">
            Hey, thanks for visiting my website!
            <br/>
            <br/>
            My name is Evan Watterud and I'm a recent graduate from the Carleton
            University Computer Science program. Currently I'm getting a deeper understanding
            of React.js and Javascript. In my free time you'll likely find me rock climbing
            or tinkering with code.
            <br/>
            <br/>
            If you think you might want to work with me, or just want to tell me
            my site sucks and how to improve it, please send me a message using the form below,
            Thanks!
          </p>
        </div>
      </div>
    )
  }
}

export default AboutMe;
