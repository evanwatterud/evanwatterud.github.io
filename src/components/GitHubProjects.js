import React from 'react'
import PropTypes from 'prop-types'
import '../css/projectsPage.css'

class GitHubProjects extends React.Component {
  constructor(props) {
    super(props)
    this.projects = []
  }

  componentWillMount() {
    let url = 'https://api.github.com/users/evanwatterud'

    fetch(url)
      .then(res => res.json())
      .then(data => {

      })
      .catch(error => console.log('API Error'))
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
