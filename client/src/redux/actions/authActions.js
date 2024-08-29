// src/redux/actions/authActions.js
import axios from 'axios'; // Importation de la bibliothèque axios pour effectuer des requêtes HTTP

const API_URL = 'http://localhost:3001/api/v1'; // URL de base de l'API pour effectuer les requêtes

// Action pour la connexion de l'utilisateur
export const loginUser = (credentials) => async (dispatch) => {
  try {
    // Envoie d'une requête POST à l'API pour la connexion de l'utilisateur avec ses identifiants
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    const { token } = response.data.body; // Extraction du token de la réponse de l'API

    if (token) {
      // Si un token est reçu, il est stocké dans le localStorage pour une utilisation future
      localStorage.setItem('token', token);
      // Envoi d'une action de succès de connexion avec le token en tant que payload
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: token,
      });

      // Appel de l'action pour récupérer le profil utilisateur après une connexion réussie
      dispatch(fetchUserProfile());
    } else {
       // Gestion du cas où le token n'est pas reçu
      console.error('Token non reçu');
    }
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
  }
};

// Action pour récupérer le profil utilisateur
export const fetchUserProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token'); // Récupération du token stocké dans le localStorage
  if (!token) {
    // Si aucun token n'est trouvé, une erreur est signalée
    console.error('Token non trouvé');
    return;
  }

  try {
    // Envoie d'une requête POST à l'API pour récupérer le profil utilisateur
    const response = await axios.post(`${API_URL}/user/profile`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,  // Ajout du token dans les en-têtes de la requête pour l'authentification
      },
    });

    if (response.data && response.data.body) {
      // Si les informations utilisateur sont reçues, elles sont stockées dans le localStorage
      localStorage.setItem('userDetails', JSON.stringify(response.data.body));

      // Envoi d'une action de succès de récupération de profil avec les données utilisateur en tant que payload
      dispatch({
        type: 'FETCH_PROFILE_SUCCESS',
        payload: response.data.body,
      });
    } else {
      // Gestion du cas où la réponse de l'API est inattendue
      console.error('Réponse inattendue du serveur', response.data);
    }
  } catch (error) {
    // Gestion des erreurs lors de la tentative de récupération du profil utilisateur
    console.error('Erreur lors de la récupération du profil utilisateur', error);
  }
};

// Action pour mettre à jour le profil utilisateur
export const updateUserProfile = (profileData) => async (dispatch) => {
  const token = localStorage.getItem('token');// Récupération du token stocké dans le localStorage
  if (!token) {
    // Si aucun token n'est trouvé, une erreur est signalée
    console.error('Token non trouvé');
    return;
  }

  try {
     // Envoie d'une requête PUT à l'API pour mettre à jour le profil utilisateur
    const response = await axios.put(`${API_URL}/user/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajout du token dans les en-têtes de la requête pour l'authentification
      },
    });

    if (response.data && response.data.body) {
      // Si les informations mises à jour sont reçues, elles sont stockées dans le localStorage
      localStorage.setItem('userDetails', JSON.stringify(response.data.body));

      // Envoi d'une action de succès de mise à jour de profil avec les données utilisateur mises à jour en tant que payload
      dispatch({
        type: 'UPDATE_PROFILE_SUCCESS',
        payload: response.data.body,
      });
    } else {
       // Gestion du cas où la réponse de l'API est inattendue
      console.error('Réponse inattendue du serveur', response.data);
    }
  } catch (error) {
       // Gestion des erreurs lors de la tentative de mise à jour du profil utilisateur
    console.error('Erreur lors de la mise à jour du profil', error);
  }
};


// Action pour la déconnexion de l'utilisateur
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');// Suppression du token du localStorage
  localStorage.removeItem('userDetails');// Suppression des détails de l'utilisateur du localStorage
  // Envoi d'une action de déconnexion pour mettre à jour l'état global
  dispatch({
    type: 'LOGOUT',
  });
};
