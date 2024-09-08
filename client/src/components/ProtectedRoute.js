import React from 'react';
import { useSelector } from 'react-redux'; // Importation du hook useSelector de React-Redux pour accéder à l'état global
import { Navigate } from 'react-router-dom'; // Importation du composant Navigate de React Router pour gérer la redirection

//Navigation conditionnelle (ProtectedRoute) : L'utilisateur tente d'accéder à une page protégée → useSelector vérifie l'état de connexion → Redirection si nécessaire.

const ProtectedRoute = ({ children }) => {
  // Utilisation du hook useSelector pour récupérer l'état d'authentification de l'utilisateur depuis le store Redux.
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Vérifie si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, retourne le composant 'Navigate' pour rediriger vers la page de connexion.
    // L'attribut 'to' spécifie la route vers laquelle rediriger ("/sign-in").
    // L'attribut 'replace' est utilisé pour remplacer la route actuelle dans l'historique, empêchant ainsi le retour à la route protégée avec le bouton retour du navigateur.
    return <Navigate to="/sign-in" replace />;
  }

  // Si l'utilisateur est authentifié, rend les enfants
  return children;
};

export default ProtectedRoute;
