import React from 'react';
import './Home.css';  // Pour les styles personnalisés

const Home = () => {
  return (
    <div className="container mt-5 home-page">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div className="profile-image-container">
            <img src="/profile.jpg" alt="Profile" className="img-fluid profile-image" />
          </div>
        </div>
        <div className="col-md-8 text-center text-md-left">
          <h1>Fares Chergui - Fullstack Developer</h1>
          <p>
            Je suis diplômé de niveau DEC de la Cité à Toronto, Canada. En tant que développeur fullstack, 
            j'ai acquis une expertise approfondie dans le développement d'applications web et mobiles, 
            en utilisant des technologies modernes telles que React, Node.js, et bien d'autres.
          </p>
          <p>
            Mon objectif est de créer des solutions innovantes et performantes qui répondent aux besoins des utilisateurs 
            tout en offrant une expérience utilisateur exceptionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
