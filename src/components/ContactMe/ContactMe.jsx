import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          {/* Lien mail */}
          <a href="mailto:amin.eddine31@icloud.com">
            <ContactInfoCard
              iconUrl="./assets/images/email-icon.svg"
              text="amin.eddine31@icloud.com"
            />
          </a>

          {/* Lien GitHub */}
          <a href="https://github.com/Nimaa31" target="_blank" rel="noopener noreferrer">
            <ContactInfoCard
              iconUrl="./assets/images/github-icon.svg"
              text="https://github.com/Nimaa31"
            />
          </a>
        </div>

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
