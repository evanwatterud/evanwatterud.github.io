import React from 'react'

class SocialBar extends React.Component {

  onLinkedInClick = () => {
    var win = window.open('https://www.linkedin.com/in/evan-watterud-935355a6/', '_blank');
    win.focus();
  }

  onGitHubClick = () => {
    var win = window.open('https://github.com/evanwatterud', '_blank');
    win.focus();
  }

  render () {
    return (
      <div style={styles.socialBarContainer}>
        <div style={styles.gitHubLogoLink} onClick={this.onGitHubClick} >
          <img style={styles.gitHubImage} src={require('../assets/icons/GitHub-Mark-64px.png')} />
        </div>
        <div style={styles.linkedInLogoLink} onClick={this.onLinkedInClick} >
          <img style={styles.linkedInImage} src={require('../assets/icons/linkedin-button.png')} />
        </div>
      </div>
    )
  }
}

export default SocialBar;

const styles = {
  socialBarContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  linkedInLogoLink: {
    marginLeft: '2.5%',
    height: '64px',
    width: '64px',
    borderRadius: '50%',
    cursor: 'pointer'
  },

  gitHubLogoLink: {
    marginRight: '2.5%',
    height: '64px',
    width: '64px',
    borderRadius: '50%',
    cursor: 'pointer'
  },

  linkedInImage: {
    borderRadius: '50%'
  },

  gitHubImage: {
    borderRadius: '50%'
  }
}
