import React from 'react';

// Déclaration d'un composant fonctionnel nommé 'Feature'.
// Ce composant reçoit trois propriétés (props) : icon, title, et description.
const Feature = ({ icon, title, description }) => {
  return (
    // Le composant retourne un div avec une classe CSS 'feature-item'.
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
