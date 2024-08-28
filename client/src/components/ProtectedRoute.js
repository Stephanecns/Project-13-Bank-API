import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirige vers la page de connexion
    return <Navigate to="/sign-in" replace />;
  }

  // Si l'utilisateur est authentifié, rend les enfants
  return children;
};

export default ProtectedRoute;
