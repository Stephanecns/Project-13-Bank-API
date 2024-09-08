import React, { useState } from 'react'; // Importation des modules React nécessaires
import { useDispatch, useSelector } from 'react-redux'; // Importation des hooks de React-Redux pour gérer l'état global et les actions
import { updateUserProfile } from '../redux/actions/authActions'; // Importation de l'action updateUserProfile pour mettre à jour le profil utilisateur
import Account from './Account';// Importation du composant Account pour afficher les informations de compte

// Déclaration d'un composant fonctionnel nommé 'UserProfilePage'.
const UserProfilePage = () => {
  const dispatch = useDispatch(); // Utilisation du hook useDispatch pour obtenir la fonction dispatch
  const userDetails = useSelector((state) => state.user.userDetails); // Récupération des détails de l'utilisateur depuis le store Redux

// États locaux pour gérer l'édition du profil et les champs de saisie du nom
  const [isEditing, setIsEditing] = useState(false); // État pour savoir si l'utilisateur est en mode édition ou non
  const [firstName, setFirstName] = useState(userDetails.firstName || ''); // État pour le prénom de l'utilisateur, initialisé avec les détails de l'utilisateur ou une chaîne vide
  const [lastName, setLastName] = useState(userDetails.lastName || ''); // État pour le nom de famille de l'utilisateur, initialisé avec les détails de l'utilisateur ou une chaîne vide

  // Données des comptes de l'utilisateur, définies localement 
  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '184.30',
      description: 'Current Balance',
    },
  ];

  // Fonction pour basculer le mode édition
  const handleEditToggle = () => {
    setIsEditing(!isEditing);  // Inverse l'état de isEditing
  };

  // Fonction pour sauvegarder les modifications apportées au profil utilisateur
  const handleSave = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    dispatch(updateUserProfile({ firstName, lastName })); // Déclenche l'action pour mettre à jour le profil utilisateur avec les nouvelles informations
    setIsEditing(false); // Désactive le mode édition après la sauvegarde
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back,<br /> {firstName} {lastName}!
        </h1>
        <button className="edit-button" onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit Name'}
        </button>
      </div>
      {isEditing ? (
        <form onSubmit={handleSave} className="edit-form">
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="submit" className="edit-button">
            Save
          </button>
        </form>
      ) : (
        <>
          {accounts.map((account, index) => (
            <Account
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </>
      )}
    </main>
  );
};

export default UserProfilePage;
