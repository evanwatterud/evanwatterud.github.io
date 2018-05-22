import React from 'react'
import PropTypes from 'prop-types'
import '../css/contactForm.css'

class ContactForm extends React.Component {
  render () {
    return (
      <div className="contactFormWrapper" >
        <form className="contactForm" action="https://formspree.io/evanwatterud@gmail.com"
            method="POST">
          <input className="contactInputs" type="text" name="name" placeholder="Your Name" />
          <input className="contactInputs" type="email" name="_replyto" placeholder="Contact Email" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <input id="submitButton" type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default ContactForm;
