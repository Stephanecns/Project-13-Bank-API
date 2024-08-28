// src/redux/reducers/userReducer.js
const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  userDetails: JSON.parse(localStorage.getItem('userDetails')) || {}, // Utilisation des informations sauvegardées
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userDetails: {}, // Réinitialiser les informations de l'utilisateur
      };
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        userDetails: action.payload,
      };
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        userDetails: { ...state.userDetails, ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
