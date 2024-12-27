import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import "../styles/home.css";

const Home = () => (
  <div className="home-page">
    <header className="home-header">
      <img src="/assets/images/mca_logo.jpg" alt="MCA Logo" className="mca-logo" />
      <h1>Welcome to MCA Software Solutions</h1>
      <p>Your partner for innovative software solutions.</p>
      <nav className="nav-container">
      <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/our-team" className="nav-link">Our Team</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
</nav>
    </header>
    <section className="highlights">
      <div className="highlight">
        <img src="/assets/images/homepic1.jpg" alt="Highlight 1" />
        <h3>Innovative Solutions</h3>
        <p>We provide cutting-edge technology to help your business grow.</p>
      </div>
      <div className="highlight">
        <img src="/assets/images/homepic2.jpg" alt="Highlight 2" />
        <h3>Dedicated Team</h3>
        <p>Our experts work tirelessly to deliver outstanding results.</p>
      </div>
    </section>
    <Chatbot />
  </div>
);

export default Home;
