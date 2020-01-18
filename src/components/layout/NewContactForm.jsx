// import React from 'react';
// import emailjs from 'emailjs-com';

// const NewContactForm = ({ id }) => {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm('gmail', 'contact_form', e.target, 'user_tHyLLMvzlnZKn0AeC16KD')
//       .then(
//         result => {
//           console.log(result.text);
//         },
//         error => {
//           console.log(error.text);
//         }
//       );
//   }

//   return (
//     <div id={id}>
//       <form className='form all-center' onSubmit={sendEmail} style={{ width: '50%'}}>
//         <input type='hidden' name='contact_number' />
//         <input type='text' name='user_name' placeholder='Your Name' />
//         <input type='email' name='user_email' placeholder='Your Email' />
//         <textarea name='message' placeholder='Drop me a line.' />
//         <input type='submit' value='Send' className='btn btn-dark' />
//       </form>
//     </div>
//   );
// };

// export default NewContactForm;
