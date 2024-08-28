// src/redux/actions/authActions.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

// Action pour la connexion
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    const { token } = response.data.body;

    if (token) {
      localStorage.setItem('token', token);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: token,
      });

      // Récupérer le profil utilisateur après la connexion réussie
      dispatch(fetchUserProfile());
    } else {
      console.error('Token non reçu');
    }
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
  }
};

// Action pour récupérer le profil utilisateur
export const fetchUserProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token non trouvé');
    return;
  }

  try {
    const response = await axios.post(`${API_URL}/user/profile`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data && response.data.body) {
      // Sauvegarder les informations récupérées dans le localStorage
      localStorage.setItem('userDetails', JSON.stringify(response.data.body));

      dispatch({
        type: 'FETCH_PROFILE_SUCCESS',
        payload: response.data.body,
      });
    } else {
      console.error('Réponse inattendue du serveur', response.data);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur', error);
  }
};

// Action pour mettre à jour le profil utilisateur
export const updateUserProfile = (profileData) => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token non trouvé');
    return;
  }

  try {
    const response = await axios.put(`${API_URL}/user/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data && response.data.body) {
      // Sauvegarder les informations mises à jour dans le localStorage
      localStorage.setItem('userDetails', JSON.stringify(response.data.body));

      dispatch({
        type: 'UPDATE_PROFILE_SUCCESS',
        payload: response.data.body,
      });
    } else {
      console.error('Réponse inattendue du serveur', response.data);
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil', error);
  }
};

// Action pour la déconnexion
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userDetails'); // Supprimer les détails de l'utilisateur du localStorage
  dispatch({
    type: 'LOGOUT',
  });
};
