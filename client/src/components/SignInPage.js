// src/components/SignInPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importation des hooks de React-Redux pour la gestion de l'état global et des actions
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate de React Router pour gérer la navigation
import { loginUser } from '../redux/actions/authActions'; // Importation de l'action loginUser pour authentifier l'utilisateur

// Déclaration d'un composant fonctionnel nommé 'SignInPage'.
const SignInPage = () => {
  // Déclaration de l'état local pour stocker les valeurs des champs de saisie email et mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Utilisation du hook useDispatch pour obtenir la fonction dispatch
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Récupération de l'état d'authentification de l'utilisateur depuis le store Redux
  const userDetails = useSelector((state) => state.user.userDetails); // Récupération des détails de l'utilisateur depuis le store Redux

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    await dispatch(loginUser({ email, password })); // Déclenche l'action loginUser avec les informations de connexion
  };

// Effet qui se déclenche lorsque l'état d'authentification ou les détails de l'utilisateur changent
  // Utilisé pour rediriger l'utilisateur vers la page de profil après une connexion réussie
  useEffect(() => {
    if (isAuthenticated && userDetails.firstName) {
      navigate('/user-profile');// Redirige vers la page de profil de l'utilisateur
    }
  }, [isAuthenticated, userDetails, navigate]);// Dépendances de l'effet

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignInPage;
