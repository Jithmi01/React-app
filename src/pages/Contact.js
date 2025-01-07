import React, { useState } from 'react';
import PizzaLeft from '../assets/pizzaleft.jpg';
import '../styles/Contact.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Set the submission state to true

    // Optionally hide the message after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className='contact'>
      {/* Alert message displayed at the top */}
      {isSubmitted && (
        <div className="alertMessage">
          <CheckCircleIcon style={{ color: 'green', marginRight: '8px' }} />
          Message Successfully Sent!
        </div>
      )}

      <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" required />
          
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" required />
          
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
