import React from 'react';

// Déclaration d'un composant fonctionnel nommé 'Hero'.
// Ce composant reçoit trois propriétés (props) : title, subtitle, et text.
const Hero = ({ title, subtitle, text }) => {
  return (
      // Le composant retourne un div avec une classe CSS 'hero'.
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p className="text">{text}</p>
      </section>
    </div>
  );
};

export default Hero;
