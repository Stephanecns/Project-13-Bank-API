import React from 'react';

// Déclaration d'un composant fonctionnel nommé 'Account'.
// Ce composant reçoit trois propriétés (props) : title, amount, et description.
const Account = ({ title, amount, description }) => {
  return (
    // Le composant retourne un élément de section avec une classe CSS 'account'.
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
