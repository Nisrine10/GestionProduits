import React, { useState } from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier CSS

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    // Vous pouvez envoyer les données à votre backend ou traiter le formulaire ici
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
      
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px' }}>Contact Us</h2>
          
          <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="form-group" style={{ textAlign: 'center' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;