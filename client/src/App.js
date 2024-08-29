import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Importation des composants nécessaires de react-router-dom pour la gestion des routes

// Importation des composants
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import UserProfilePage from './components/UserProfilePage';
import ProtectedRoute from './components/ProtectedRoute'; 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {/* Utilisation de ProtectedRoute pour protéger la page de profil utilisateur */}
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
