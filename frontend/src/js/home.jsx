import React, { useState } from "react";
import "../css/home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAbout = () => {
    setShowContact(false); // Ensure only one section is visible at a time
    setShowAbout(!showAbout); // Toggle About section visibility
  };

  const toggleContact = () => {
    setShowAbout(false); // Ensure only one section is visible at a time
    setShowContact(!showContact); // Toggle Contact section visibility
  };

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">Kaio Labs</div>
        <div className={"hamburger"} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={toggleAbout}>About Us</li>
            <li onClick={toggleContact}>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="overlay">
          <h1>Kaio Labs</h1>
          <p>Placeholder for introductory text on Kaio Labs, its vision, and innovation.</p>
          <a href="https://pikbest.com/free-backgrounds/medical.html">Free MEDICAL backgrounds from pikbest.com</a>
        </div>

        {/* Conditionally render the About section */}
        {showAbout && (
          <div className="section about-section">
            <h1>About Us</h1>
            <p>Placeholder for About us</p>
          </div>
        )}

        {/* Conditionally render the Contact section */}
        {showContact && (
          <div className="section contact-section">
            <h1>Contact Us</h1>
            <p>Placeholder for Contact us</p>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2024 Kaio Labs. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
