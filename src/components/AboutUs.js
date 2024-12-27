import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import "../styles/about-us.css";

const AboutUs = () => (
  <div className="about-us-page">
    <header className="about-us-header">
      <h2>About Us</h2>
      <nav className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/our-team" className="nav-link">Our Team</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </nav>
    </header>
    <section className="about-us-content">
      <h3>Who We Are</h3>
      <p>
        At MCA Software Solutions, we are committed to delivering cutting-edge software solutions that drive 
        innovation, efficiency, and excellence. Our team is dedicated to helping businesses overcome challenges 
        with tailored, high-quality testing services designed to meet their unique needs. 
      </p>
      <img src="/assets/images/aboutus1.jpg" alt="About Us" />
      <div className="mca-description">
        <h3>MCA Software Solutions</h3>
        <p>
          Our mission is to empower businesses by providing innovative solutions that reduce IT risks, enhance 
          performance, and maximize agility. By combining our expertise with state-of-the-art technologies, we 
          help organizations achieve their goals while maintaining a focus on cost efficiency and quality.
        </p>
        <h4>What We Offer</h4>
        <p>
          At MCA Software Solutions, we specialize in delivering robust testing services. With a deep 
          understanding of industry best practices, we partner with businesses to create a Testing Center of 
          Excellence (TCoE) that drives superior quality and consistent outcomes.
        </p>
        <h4>Our Portfolio of Testing Services Includes:</h4>
        <ul>
          <li>Quality Assurance Testing</li>
          <li>Software Development Life Cycle</li>
          <li>Test Process Improvement</li>
          <li>Test Automation</li>
          <li>Defect Life Cycle</li>
          <li>IT Governance</li>
          <li>IT Security</li>
          <li>IT Mobility</li>
          <li>IT Test Optimization</li>
          <li>IT Outsourcing</li>
          <li>IT Test Strategy</li>
          <li>IT Big Data/Cloud Computing</li>
        </ul>
        <h4>Overcoming Quality Challenges</h4>
        <p>
          In today’s fast-paced Agile delivery environments, meeting tight schedules without compromising 
          quality is a common challenge. At MCA Software Solutions, we work hand in hand with developers 
          to ensure that quality is maintained throughout the development lifecycle.
        </p>
        <h5>Key Challenges and Our Approach:</h5>
        <ol>
          <li>
            **Reinventing the Wheel**: We streamline testing processes by creating reusable assets and frameworks 
            to eliminate redundancies and maximize efficiency.
          </li>
          <li>
            **Lack of Collaboration Tools**: By implementing centralized tools and best practices, we enable teams 
            to share and reuse testing assets effectively.
          </li>
          <li>
            **Resource Allocation**: Our structured approach ensures skilled testers are utilized effectively, balancing 
            innovation with ongoing operations.
          </li>
          <li>
            **Continuous Improvement**: We establish consistent processes to enable regular assessments and 
            identify areas for optimization.
          </li>
        </ol>
      </div>
    </section>
    <section className="social-links">
      <h3>Follow Us</h3>
      <p>Stay connected with us on social media:</p>
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/company/mca-software-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://x.com/mca_software"  target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a></li>
        <li><a href="https://facebook.com/mcasoftware" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com/mcasoftware" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://youtube.com/mcasoftware" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
    </section>
    <Chatbot />
  </div>
);

export default AboutUs;
