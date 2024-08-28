import React from 'react';
import Hero from './Hero';
import Feature from './Feature';

// Importer les images du dossier public/img
import chatIcon from '../img/icon-chat.png';
import moneyIcon from '../img/icon-money.png';
import securityIcon from '../img/icon-security.png';

const features = [
  {
    icon: chatIcon, // Utilisez le chemin ou l'importation correcte
    title: 'You are our #1 priority',
    description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: moneyIcon, // Utilisez le chemin ou l'importation correcte
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: securityIcon, // Utilisez le chemin ou l'importation correcte
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.',
  }
];

const HomePage = () => (
  <main>
    <Hero
      title="Promoted Content"
      subtitle="No fees. No minimum deposit. High interest rates."
      text="Open a savings account with Argent Bank today!"
    />
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon} // Passez l'icône correcte à chaque Feature
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  </main>
);

export default HomePage;
