import React from "react";
import { Link } from 'react-router-dom';

//import "./Home.css"; // Import your CSS file (adjust the path accordingly)

export function Home() {
  return (
    <>
    

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px' }}>Product Management System</h2>
      <div className="bgimg w3-display-container w3-text-white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
        <p>Our innovative Product Management System, powered by cutting-edge technologies like React, 
          Node.js, and MongoDB, provides a seamless platform for CRUD (Create, Read, Update, Delete) operations. 
          As we navigate the realms of digital commerce, our system empowers businesses to effortlessly manage
           their product portfolios, streamline workflows, and adapt to ever-evolving market demands.
            With a user-friendly interface, real-time updates, and robust security features, 
            our platform is designed to meet the unique needs of businesses in the fast-paced digital era.
             Embrace efficiency, embrace growth – that's the ethos of our Product Management System.</p>
      </div>
      <div className="image-container">
      <img src="https://img.freepik.com/free-photo/responsive-devices-desktop-3d-rendering-showing-website-builder_72104-4386.jpg" alt="Description de l'image"></img>
    </div>
      
      {/* Menu Modal */}
      <div id="menu" className="w3-modal">
        <div className="w3-modal-content w3-animate-zoom">
          <div className="w3-container w3-black w3-display-container">
            <h1>Nisrine AOMARI</h1>
          </div>
          <div className="w3-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h5>Age: <b>22</b></h5>
            <h5>Nationality: <b>Moroccan</b></h5>
            <h5>Class: <b>2_ACI</b></h5>
          </div>
          
        </div>
      </div>

      {/* Contact Modal */}

      <Link to="/contact">


  <div id="contact" className="w3-modal">
    <div className="w3-modal-content w3-animate-zoom">
      <div className="w3-container w3-black">
        <span onClick={() => closeContact()} className="w3-button w3-display-topright w3-large">
          {/* Ajoutez ici le contenu de votre bouton de fermeture */}
        </span>
        <h1>Contact</h1>
      </div>
      <div className="w3-container">
        {/* ... (Formulaire de contact) */}
      </div>
    </div>
  </div>
  </Link>
    </>
  );

  function openContact() {
    document.getElementById("contact").style.display = "block";
  }

  function closeContact() {
    document.getElementById("contact").style.display = "none";
  }
}