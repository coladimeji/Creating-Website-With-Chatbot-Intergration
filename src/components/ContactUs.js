import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import "../styles/contact-us.css";

const ContactUs = () => (
  <div className="contact-us-page">
    <header className="contact-us-header">
      <h2>Contact Us</h2>
      <nav className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/our-team" className="nav-link">Our Team</Link>
      </nav>
    </header>
    <section className="contact-details">
      <h3>Get in Touch</h3>
      <p>
        We’d love to hear from you! Whether you have a question about our services, need assistance, 
        or just want to say hello, feel free to reach out to us through any of the methods below.
      </p>
      <div className="contact-info">
        <p><strong>Office Address:</strong> 123 MCA Lane, Tech City, CA 90210</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> contact@mcasoftwaresolutions.com</p>
      </div>
    </section>
    <section className="map-container">
      <h3>Our Location</h3>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509547!2d-122.4200327!3d37.7749296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581c8eadd32a3%3A0x8c8bf5f8e3b1ec5b!2sMCA%20Software%20Solutions!5e0!3m2!1sen!2sus!4v1678132038884!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
    <section className="social-links">
      <h3>Follow Us</h3>
      <p>Stay connected with us on social media:</p>
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/company/mca-software-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://x.com/mca_software" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://facebook.com/mcasoftware" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com/mcasoftware" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://youtube.com/mcasoftware" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
    </section>
    <Chatbot />
  </div>
);

export default ContactUs;
