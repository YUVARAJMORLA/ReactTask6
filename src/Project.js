import React from 'react';
import './Project.css'; 

function Projects() {
 
  const projects = [
    {
      category: 'Object Detection with YOLO',
      items: [{ title: 'YOLO Project', description: 'Implemented YOLO (You Only Look Once) to achieve real-time object detection, enabling efficient recognition and tracking of objects in images and videos' }],
    },
    {
      category: 'Classification of Data using Machine Learning',
      items: [
        { title: 'House Price Prediction', description: ' Utilized multiple regression models such as Linear Regression, Decision Tree Regression, and Random Forest Regression to predict house prices based on various features like square footage, number of bedrooms, and location.' },
        { title: 'Fake News Detection', description: 'Implemented text classification techniques using models like Logistic Regression, Naive Bayes, and Support Vector Machines (SVM) to classify news articles as either genuine or fake based on their textual content and features' },
      ],
    },
    {
      category: 'Engineering Projects using Arduino',
      items: [
        {
          title: 'Patient Health Monitoring System',
          description: 'Led a team to create a real-time patient health monitoring system with Arduino, ESP32, and PPG technology, seamlessly integrating data into Blynk app and website.',
        },
        {
          title: 'Enhanced Hazard Assessment Vehicle',
          description: 'Developed an enhanced hazard assessment vehicle for high-risk environments using Arduino, Bluetooth, wireless cameras, and sensors like smoke and fire detection.',
        },
      ],
    },
  ];

  const certifications = [
    'DEEPLEARNING.AI - Linear Algebra for Machine Learning and Data Science',
    'DEEPLEARNING.AI - Calculus for Machine Learning and Data Science',
    'DEEPLEARNING.AI - AI for Everyone',
    '365 Data Science - Intro to ChatGPT and Generative AI',
  ];

  return (
    <div className="projects">
      <h1 className="project-title"><u>My Projects</u></h1>
      {projects.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className="project-category">{category.category}</h3>
          <ul className="project-list">
            {category.items.map((project, projectIndex) => (
              <li key={projectIndex} className="project-item">
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2 className="certifications-title">My Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Projects;
