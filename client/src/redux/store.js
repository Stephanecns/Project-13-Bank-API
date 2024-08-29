// Importation de la fonction configureStore depuis @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importation du reducer userReducer qui gère l'état lié à l'utilisateur
import userReducer from './reducers/userReducer';

// Configuration du store Redux
const store = configureStore({
  // Déclaration des reducers utilisés dans le store
  reducer: {
    user: userReducer,// Le reducer 'userReducer' est assigné à la clé 'user'
  },
});

export default store;
