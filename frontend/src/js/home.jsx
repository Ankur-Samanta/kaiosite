import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Welcome to Kaio Labs</h1>
        <p className="subtitle">place holder</p>
      </header>

      <section className="intro">
        <h2>About Us</h2>
        <p>Placeholder for the description of Kaio Labs' mission, research focus, and academic goals.</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Placeholder for research consulting</li>
          <li>Placeholder for academic workshops</li>
          <li>Placeholder for data analysis and tools</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Join Us</h2>
        <p>Placeholder for a call to action inviting students, researchers, and collaborators to get involved.</p>
        <button className="cta-button">Learn More</button>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Kaio Labs. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

