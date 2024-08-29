// src/redux/reducers/userReducer.js
// Définition de l'état initial du reducer userReducer
const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),// Vérifie si un token est présent dans le localStorage pour déterminer l'état d'authentification initial
  token: localStorage.getItem('token'),// Récupère le token du localStorage s'il est présent
  userDetails: JSON.parse(localStorage.getItem('userDetails')) || {}, // Récupère les détails de l'utilisateur à partir du localStorage ou initialise à un objet vide si aucune information n'est trouvée
};

// Déclaration du reducer userReducer
const userReducer = (state = initialState, action) => {
  // Le reducer prend deux arguments : l'état actuel (initialisé à initialState) et une action
  switch (action.type) {

    // Gestion de l'action LOGIN_SUCCESS
    case 'LOGIN_SUCCESS':
      // Met à jour l'état en cas de succès de la connexion
      return {
        ...state,// Copie l'état actuel
        isAuthenticated: true,// Définit isAuthenticated à true car la connexion est réussie
        token: action.payload, // Met à jour le token avec celui reçu dans l'action
      };

    // Gestion de l'action LOGOUT  
    case 'LOGOUT':
      // Met à jour l'état en cas de déconnexion
      return {
        ...state, // Copie l'état actuel
        isAuthenticated: false,// Définit isAuthenticated à false car l'utilisateur est déconnecté
        token: null,// Supprime le token
        userDetails: {}, // Réinitialise les informations de l'utilisateur à un objet vide
      };

    // Gestion de l'action FETCH_PROFILE_SUCCESS  
    case 'FETCH_PROFILE_SUCCESS':
      // Met à jour l'état avec les détails de l'utilisateur récupérés
      return {
        ...state,// Copie l'état actuel
        userDetails: action.payload,// Met à jour les détails de l'utilisateur avec ceux reçus dans l'action
      };

    // Gestion de l'action UPDATE_PROFILE_SUCCESS  
    case 'UPDATE_PROFILE_SUCCESS':
       // Met à jour les détails de l'utilisateur après une modification réussie du profil
      return {
        ...state,// Copie l'état actuel
        userDetails: { ...state.userDetails, ...action.payload },// Met à jour les détails de l'utilisateur avec les nouvelles données reçues dans l'action
      };
    default:
      return state;
  }
};

export default userReducer;
