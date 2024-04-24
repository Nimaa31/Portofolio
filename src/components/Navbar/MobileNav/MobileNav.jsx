import React from "react";
import "./MobileNav.css";
import logo from './logo2.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="" />

          <ul>
            <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Accueille
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
               Experience
              </a>
            </li>


            <button className="contact-btn" onClick={() => {}}>
            <a onClick={() => handleScroll("contact")} className="menu-item">
                Contactez-Moi
              </a>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
