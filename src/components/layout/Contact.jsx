import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { ContactService, ContactTemplate, ContactUserId } from '../../Config';

const Contact = ({ id, title }) => {
  function sendEmail(e) {
    e.preventDefault();
    try {
      emailjs
        .sendForm(ContactService, ContactTemplate, e.target, ContactUserId)
        .then(
          result => console.log('Email successfully sent!', result.text),
          err => console.log(err.text)
        )
        .catch(err => console.error('Something was wrong!', err));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // TODO ADD ReCaptcha 2
    <div id={id}>
      <h3 className='x-large'>{title}</h3>
      <form
        className='form all-center'
        onSubmit={sendEmail}
        style={{ width: '50%' }}
      >
        <input type='hidden' name='contact_number' />
        <input type='text' name='user_name' placeholder='Your Name' />
        <input type='email' name='user_email' placeholder='Your Email' />
        <textarea
          name='message'
          placeholder='Drop me a line.'
          wrap='hard'
          cols='30'
          rows='4'
        />
        <input type='submit' value='Send' className='btn btn-dark' />
      </form>
    </div>
  );
};

Contact.defaultProps = {
  title: 'Contact Me'
};

Contact.propTypes = {
  id: PropTypes.string.isRequired
};

export default Contact;
