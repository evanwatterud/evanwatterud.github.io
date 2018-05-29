import React from 'react'
import PropTypes from 'prop-types'
import '../css/projectsPage.css'

import VanillaTilt from 'vanilla-tilt'

class GitHubProjects extends React.Component {
  constructor(props) {
    super(props)
    this.projects = []
  }

  componentWillMount() {
    let url = 'https://github.com/evanwatterud'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('API Error'))
  }

  componentDidMount() {
    // Attach vanilla-tilt to each project card
    let projectElements = document.querySelectorAll(".project")
    for (var i = 0; i < projectElements.length; i++) {
      VanillaTilt.init(projectElements[i], {
    		max: 25,
    		speed: 400
    	});
    }
  }

  render () {
    return (
      <div id="projectsContainer">
        <div id="rowOne" className="projectRow">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
        <div className="projectRow">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </div>
    )
  }
}

export default GitHubProjects;
