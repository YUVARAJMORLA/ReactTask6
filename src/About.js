import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="personal-info">
        <h3>About Me</h3>
        <p>
          I am a passionate AI enthusiast and developer. Here's a bit more about me:
        </p>
        <ul>
          <li>Current Location: TENALI, Andhra Pradesh.</li><br/>
          <li>Date of Birth: June 14, 2003</li><br/>
          <li>Gender: MALE</li><br/>
          <li>Hobbies: Reading Books, Playing Games, Listening Music</li><br/>
          <li>Interests: AI, Machine Learning, Web Development, Learning New Technologies</li>
        </ul>
      </div>

      <div className="education">
        <h3>Education</h3>
        <ul>
          <li>
            Graduation:
            <p>
              Course: B.Tech/B.E. (Computer Science and Engineering)
              <br />
              College: Vellore Institute of Technology Vellore (VIT), Amravati, Amravati
              <br />
              Year of Graduating: Jul 2025
              <br />
              Score: 8.95/10
            </p>
          </li>
          <li>
            Class XII:
            <p>
              Board Name: BIEAP
              <br />
              Medium: English
              <br />
              Year of Passing: 2021
              <br />
              Percentage: 97%
            </p>
          </li>
          <li>
            Class X (Dr.K.K.R’s Gowtham High School):
            <p>
              Year of Passing: 2019
              <br />
              Board Name: BSEAP
              <br />
              Medium: English
              <br />
              GPA: 10/10
            </p>
          </li>
        </ul>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>LANGUAGES:</li>
          <ul>
            <li><span className="skill-icon">🐍</span> Python</li>
            <li><span className="skill-icon">☕</span> Java</li>
            <li><span className="skill-icon">🎯</span> R</li><br></br>
          </ul>
          <li>WEB DEVELOPMENT:</li>
          <ul>
            <li><span className="skill-icon">🚀</span> MERN FULL STACK DEVELOPER</li>
            <li><span className="skill-icon">🌐</span> HTML</li>
            <li><span className="skill-icon">🎨</span> CSS</li>
            <li><span className="skill-icon">🔵</span> Bootstrap</li>
            <li><span className="skill-icon">🚀</span> JavaScript</li>
            <li><span className="skill-icon">⚛️</span> React</li>
            <li><span className="skill-icon">🖥️</span> Node</li>
          </ul><br></br>
          <li>DATABASE:</li>
          <ul>
            <li><span className="skill-icon">🍃</span> MongoDB</li>
            <li><span className="skill-icon">🔍</span> SQL</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default About;
