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
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">Contact Me</div>
      </div>
      <div className="contact-instructions">
        <p>Have a project in mind? Need a fast, modern, or user-friendly website? I'd love to hear about it! Fill out the form below, and I'll get back to you within 72 hours to discuss how we can bring your ideas to life.</p>
        <p>Let's create something great&mdash;reach out today!</p>
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
        <input className="message-field" onChange={handleChange} type="text" id="message" name="message" />
        <p><span className="required-field">*</span>Required field.</p>
      </form>
      <button className="contact-me">
        Send Message
      </button>
    </div>
  )

};

export default Contact;
