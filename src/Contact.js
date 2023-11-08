import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const form = useRef(); 
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setIsError(true);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm('service_3w6d5ln', 'template_4tmvc4d', form.current, 'CCUGAAHQvQ6_ogWc6')
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setIsSent(true);
          setIsError(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error);
          setIsSending(false);
          setIsSent(false);
          setIsError(true);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>
      {isError && (
        <p className="error-message">Please fill in all required fields.</p>
      )}
      {isSent && <p className="success-message">Email sent successfully!</p>}
      {isError && !isSent && (
        <p className="error-message">Email not sent. Please try again later.</p>
      )}
      <div className="contact-social-links">
        <a href="https://linkedin.com/in/yuvaraj-morla-14my" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/YUVARAJMORLA" target="_blank">
          <FaGithub />
        </a>
        <a href="hhttps://x.com/YuvarajMorla_IN?s=09" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Contact;
