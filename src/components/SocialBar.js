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
    width: '15%',
    height: '100%',
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    float: 'right'
  },

  linkedInLogoLink: {
    marginLeft: '4%',
    height: '48px',
    width: '48px',
    borderRadius: '50%',
    cursor: 'pointer'
  },

  gitHubLogoLink: {
    marginRight: '4%',
    height: '48px',
    width: '48px',
    borderRadius: '50%',
    cursor: 'pointer'
  },

  linkedInImage: {
    borderRadius: '50%',
    height: '48px',
    width: '48px'
  },

  gitHubImage: {
    borderRadius: '50%',
    height: '48px',
    width: '48px'
  }
}
