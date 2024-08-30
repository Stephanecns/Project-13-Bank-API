import React from 'react';
import { useSelector, useDispatch } from 'react-redux';// Importation des hooks de React-Redux pour accéder au store et dispatcher des actions
import { logoutUser } from '../redux/actions/authActions';// Importation de l'action logoutUser pour déconnecter l'utilisateur
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate pour gérer la navigation entre les pages
import logo from '../img/argentBankLogo.png';

// Déclaration d'un composant fonctionnel nommé 'Header'.
const Header = () => {
  const dispatch = useDispatch();// Utilisation du hook useDispatch pour obtenir la fonction dispatch
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);// Utilisation du hook useSelector pour récupérer l'état d'authentification de l'utilisateur
  const firstName = useSelector((state) => state.user.userDetails.firstName); // Utilisation du hook useSelector pour récupérer le prénom de l'utilisateur
  
  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    dispatch(logoutUser()); // Déconnecte l'utilisateur
    navigate('/'); // Redirige vers la page d'accueil après la déconnexion
  };
  
  // Fonction pour gérer le clic sur le logo de la page d'accueil
  const handleHomeClick = (e) => {
    if (isAuthenticated) {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      handleLogout(); // Déconnecte et redirige
    }
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/" onClick={handleHomeClick}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {isAuthenticated ? (
          <>
          {/* Affichage du prénom de l'utilisateur après connexion */}
          <a className="main-nav-item" href="/user-profile">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </a>
          {/* Lien pour la déconnexion */}
          <a className="main-nav-item" href="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </>
        ) : (
          <a className="main-nav-item" href="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
