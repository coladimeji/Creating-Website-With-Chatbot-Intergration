import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import "../styles/our-team.css";

const OurTeam = () => (
  <div className="our-team-page">
    <header className="our-team-header">
      <h2>Meet Our Team</h2>
      <nav className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </nav>
    </header>
    <section className="our-team-content">
      <h3>Our Team</h3>
      <p>
        At MCA Software Solutions, we believe our people are our greatest asset. The future of our company 
        relies not only on the innovative technologies, methodologies, and infrastructure we’ve built but 
        also on the unwavering commitment, passion, and expertise of the remarkable individuals who work 
        here. With a team of over 20 dedicated professionals, MCA Software Solutions thrives because of 
        their collective efforts and dedication to excellence.
      </p>
      
      <h4>Our People Make the Difference</h4>
      <p>
        What sets our team apart is their unique blend of technical expertise, hands-on experience, and an 
        unyielding commitment to quality. Our experts "walk the talk," with each team member bringing 
        real-life, in-the-trenches experience to the table. They have firsthand knowledge of the challenges 
        involved in testing software and are skilled in delivering solutions that meet and exceed client 
        expectations. This practical know-how, combined with their collaborative spirit, makes our team 
        truly exceptional.
      </p>

      <h4>Our Hiring Process</h4>
      <p>
        We attribute much of our success to our meticulous hiring process. At MCA Software Solutions, we 
        strive to recruit only the most talented and passionate individuals who share our vision for 
        excellence in software quality assurance. Our hiring process is one of the most rigorous in the 
        industry, ensuring that only the best candidates join our elite team of software testers.
      </p>
      <ul>
        <li><strong>Campus Graduates:</strong> An interview-to-hire ratio of 41:1 reflects our high standards for fresh talent.</li>
        <li><strong>Experienced Professionals:</strong> An interview-to-hire ratio of 27:1 ensures seasoned professionals meet our expectations.</li>
        <li><strong>Rigorous Screening:</strong> Candidates undergo multiple rounds of assessments, including aptitude tests, group discussions, and technical interviews.</li>
        <li><strong>Referral Program:</strong> Employees play a key role in attracting top talent through our referral initiatives.</li>
      </ul>

      <h4>Training and Development</h4>
      <p>
        At MCA Software Solutions, we believe learning is a continuous process. Our training programs 
        ensure our team stays ahead of industry trends and technologies. 
      </p>
      <ul>
        <li><strong>Onboarding:</strong> A mandatory one-week training introduces new hires to software testing methodologies and best practices.</li>
        <li><strong>Skill Enhancement:</strong> Programs tailored to areas like security testing, mobile testing, and performance testing across industries.</li>
        <li><strong>Certifications:</strong> ISTQB, CSTE, and CSQA certifications are mandatory within the first year to validate expertise and professionalism.</li>
      </ul>

      <h4>Career Development</h4>
      <p>
        We provide clear career paths in manual software testing and test automation, with opportunities to 
        specialize in technology or develop leadership skills. Our programs include mentorship, workshops, 
        and performance-based recognition.
      </p>

      <h4>The MCA Software Solutions Culture</h4>
      <p>
        Our team thrives in an environment that values collaboration, innovation, and mutual respect. 
        Key aspects of our culture include:
      </p>
      <ul>
        <li><strong>Teamwork:</strong> Collaboration is at the heart of our success.</li>
        <li><strong>Diversity and Inclusion:</strong> We foster an inclusive workplace where everyone feels valued.</li>
        <li><strong>Work-Life Balance:</strong> Flexible policies support employee well-being.</li>
      </ul>

      <h4>Meet Some of Our Team Members</h4>
      <div className="team-list">
        <div className="team-member">
          <img src="/assets/images/team1.jpg" alt="Team Member 1" />
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="/assets/images/team2.jpg" alt="Team Member 2" />
          <h3>John Smith</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <img src="/assets/images/team3.jpg" alt="Team Member 3" />
          <h3>Emily Johnson</h3>
          <p>Project Manager</p>
        </div>
      </div>
      </section>
    <section className="social-links">
      <h3>Follow Us</h3>
      <p>Stay connected with us on social media:</p>
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/company/mca-software-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://x.com/mca_software"  target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a></li>
        <li><a href="https://facebook.com/profile.php?id=100011484168800" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com/mcasoftware" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://youtube.com/mcasoftware" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
    </section>
    <Chatbot />
  </div>
);

export default OurTeam;
