import { useState } from 'react';
import emailjs from 'emailjs-com';

const useContactForm = () => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      sendFeedback();
    }
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const sendFeedback = e => {
    emailjs
      .sendForm('gmail', 'template_s7ra3h1T', 'user_tHyLLMvzlnZKn0AeC16KD')
      .then(
        res => {
          console.log('Email successfully sent!', res.text);
        },
        err => console.log(err.text)
      )
      .catch(err => console.error('Oh no, something went wrong!:', err));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useContactForm;
