import React from 'react'
import PropTypes from 'prop-types'
import '../css/contactForm.css'

class ContactForm extends React.Component {
  render () {
    return (
      <div className="contactFormWrapper" >
        <form className="contactForm" action="https://formspree.io/evanwatterud@gmail.com"
            method="POST">
          <div id="layoutContainer">
            <div id="inputsContainer">
              <input className="contactInputs" type="text" name="name" placeholder="Your Name" />
              <input className="contactInputs" type="email" name="_replyto" placeholder="Contact Email" />
            </div>
            <div id="contactMeText">
              <p>Contact Me:</p>
            </div>
          </div>
          <textarea id="messageArea" name="message" placeholder="Your Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default ContactForm;
