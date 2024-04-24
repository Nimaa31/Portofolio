import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Portfolio d'un Apprenti <br /> 
        Développeur 
        </h2>
        <p>
        Explorateur passionné du code, je sillonne les horizons du développement full stack, à la recherche d'une opportunité d'alternance en vue de mon entrée en licence.
        </p>
      </div>

      <div className="hero-img">
        <div>

          <img src="./assets/images/img11.png" alt="" />
          
        </div>

        <div>

          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img05.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img07.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img06.png" alt="" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
