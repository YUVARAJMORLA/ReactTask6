import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';  // Import the new icons
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Yuvaraj Morla</h1>
        <p className="home-description">
          A proactive and dedicated 3rd-year undergraduate student at VIT-AP University. Currently pursuing my BTech degree in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning. I actively engage in learning opportunities, possess strong problem-solving skills, and aspire to build a successful career in the field of AI.
        </p>
        <div className="home-buttons">
          <Link to="/about" className="home-button">About Me</Link>
          <Link to="/contact" className="home-button">Contact Me</Link>
          <a
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
            className="home-button"
          >
            View Resume
          </a>
        </div>
        <br></br>
        <div className="home-links">
          <a href="https://www.linkedin.com/in/yuvaraj-morla-14my/" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/YUVARAJMORLA" target="_blank">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.kaggle.com/yuvarajmorla" target="_blank">
            <FaKaggle /> Kaggle
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src="./images/myy.png" alt="Your Photo" />
      </div>
      <footer className="home-footer">
        <p>&copy; 2023 Yuvaraj Morla</p>
        <p>Turning dreams into code, one line at a time.</p>
      </footer>
    </div>
  );
}

export default Home;
