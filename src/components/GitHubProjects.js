import React from 'react'
import PropTypes from 'prop-types'
import '../css/projectsPage.css'

import VanillaTilt from 'vanilla-tilt'

class GitHubProjects extends React.Component {
  constructor(props) {
    super(props)
  }

  onProjectClicked = (projectName) => {
    var win = window.open(`https://github.com/evanwatterud/${projectName}`, '_blank');
    win.focus();
  }

  componentDidMount() {
    // Attach vanilla-tilt to each project card
    let projectElements = document.querySelectorAll(".project")
    for (var i = 0; i < projectElements.length; i++) {
      VanillaTilt.init(projectElements[i], {
    		max: 30,
    		speed: 400,
        glare: true,
        scale: 1.07
    	});
    }
  }

  render () {
    return (
      <div id="projectsContainer">
        <div id="rowOne" className="projectRow">
          <div className="project" onClick={() => this.onProjectClicked("NodePoker")}>
            <h1 className="projectTitle" >NodePoker</h1>
            <h4 className="projectDescription" >
              A simple variation of 5 card draw poker, written with Node.js and Socket.io
            </h4>
          </div>
          <div className="project" onClick={() => this.onProjectClicked("TTCFOYL")}>
            <h1 className="projectTitle" >TTCFOYL</h1>
            <h4 className="projectDescription" >
              Tap The Circles Fast Or You Lose, a circle tapping game written with React Native
              and Redux
            </h4>
          </div>
          <div className="project" onClick={() => this.onProjectClicked("SpotifySongAdder")}>
            <h1 className="projectTitle" >SpotifySongAdder</h1>
            <h4 className="projectDescription" >
              Tray app built with Electron to allow adding songs to Spotify library with a
              global hotkey
            </h4>
          </div>
        </div>
        <div className="projectRow">
          <div className="project" onClick={() => this.onProjectClicked("HappyTrees")}>
            <h1 className="projectTitle" >HappyTrees</h1>
            <h4 className="projectDescription" >
              A drawing playground written with React Native
            </h4>
          </div>
          <div className="project" onClick={() => this.onProjectClicked("TwitterSentimentAnalyzer")}>
            <h1 className="projectTitle" >Twitter Sentiment Analyzer</h1>
            <h4 className="projectDescription" >
              A machine learning app that lets you know the general positivity or negativity
              surrounding topics of your choice on twitter. Written with python and Keras using
              Tensorflow as the backend.
            </h4>
          </div>
          <div className="project" onClick={() => this.onProjectClicked("evanwatterud.github.io")}>
            <h1 className="projectTitle" >evanwatterud.github.io</h1>
            <h4 className="projectDescription" >
              This website! Written with React.js.
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default GitHubProjects;
