import {useState} from 'react';
import '../styles/Contact.css';

function Contact() {
  const [contactFormData, setContactFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle when the form changes
    const handleChange = (event) => {
        setContactFormData({
            ...contactFormData,
            [event.target.name]: event.target.value
        });
    };

  return (
    <div className="contact-page">
      <div className="contact-title-container">
        <div className="contact-page-title">Contact Me</div>
      </div>
      <div className="contact-instructions">
        Enter your contact information in the form, and I will do my best to respond within 48 hours.
      </div>
      <form id="contact-form" className="contact-form">
        <div className="contact-form-row">
          <label for="name">Your Name<span className="required-field">*</span>: </label>
          <input className="form-input" onChange={handleChange} type="text" id="name" name="name" />
        </div>
        <div className="contact-form-row">
          <label for="email">Your Email<span className="required-field">*</span>: </label>
          <input className="form-input" onChange={handleChange} type="text" id="email" name="email" />
        </div>
        <label for="name">Message<span className="required-field">*</span>:</label>
        <input className="form-input message-field" onChange={handleChange} type="text" id="message" name="message" />
        <p><span className="required-field">*</span>Required field.</p>
      </form>
      <button className="contact-me">
        Send Message
      </button>
    </div>
  )

};

export default Contact;
