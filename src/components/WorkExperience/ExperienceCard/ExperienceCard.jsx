import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>

      <div className="work-duration">{details.date}</div>
        <div className="t-image">
          <img src={details.icon} alt="image"></img>
        </div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="link-image">
        <a href="https://github.com/Nimaa31" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={details.iconGit} alt="GitHub" />
        </a>
        <a href={details.linkWeb} target="_blank" rel="noopener noreferrer">
          <img className="icon" src={details.iconUrl} alt="Website" />
        </a>
      </div>

    </div>
  );
};

export default ExperienceCard;
