import React from 'react';

const Hero = ({ title, subtitle, text }) => {
  return (
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
