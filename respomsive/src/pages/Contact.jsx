import React, { useState, useRef } from 'react';
import contact from '../assets/contact.png';
import digi from '../assets/digi.png';
import '../styles/Contact.css'; // Assuming you have a separate CSS file for Contact styling
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aen2tze', 'template_mtgly41', form.current, 'JXmNHX3T8gIQD9h2V')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
      }, (error) => {
        console.error('Failed to send email:', error.text);
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contact} alt="Contact" />
      </div>

      <div className="contactcontent">
        <div className="digitechimg">
          <img src={digi} alt="Digi" />
        </div>
        <div className="contactform">
          <h1>Let’s</h1>
          <span>Connect</span>
          <form ref={form} className="forminputs" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="send" type="submit">Send</button>
          </form>

        </div>
      </div>

      <div className="map">
        <div className="mapleft">
          <p>We are Near Around You..</p>
          <div className="visit">
            <h2>Come !</h2>
            <span>Visit us</span>
          </div>
          <br />
          <h4>Address</h4>
          <p>Office #1515-1516, 15th Floor, Caesar’s Tower, Opposite to Aisha Banwany, Shahrah-e-Faisal, Karachi, Pakistan</p>
        </div>

        <div className="mapright">
          <div className="map-container">
            <iframe
              width="100%"
              height="600px"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=;&amp;hl=en&amp;q=caeser%20tower%20Opposite%20to%20Aisha%20Banwany,%20Shahrah-e-Faisal,%20Karachi,%20Pakistan+(Digitech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
