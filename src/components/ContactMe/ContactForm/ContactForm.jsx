import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez saisir une adresse e-mail valide", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    emailjs.sendForm('service_3to6feh', 'template_ytn396d', e.target, 'SA0aqEAD7HS23h33i')
      .then((result) => {
        setIsEmailSent(true);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });

        toast.success("Votre message a été envoyé avec succès !", {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Prenom " value={formData.firstname} onChange={handleInputChange} required />
          <input type="text" name="lastname" placeholder="Nom" value={formData.lastname} onChange={handleInputChange} required />
        </div>
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <textarea type="text" name="message" placeholder="Message" rows={3} value={formData.message} onChange={handleInputChange} required />

        <button type="submit">Envoyer</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
