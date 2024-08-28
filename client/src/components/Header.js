import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import logo from '../img/argentBankLogo.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser()); // Déconnecte l'utilisateur
    navigate('/'); // Redirige vers la page d'accueil après la déconnexion
  };

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
          <a className="main-nav-item" href="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
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
