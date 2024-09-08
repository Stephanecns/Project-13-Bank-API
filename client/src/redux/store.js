// Importation de la fonction configureStore depuis @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importation du reducer userReducer qui gère l'état lié à l'utilisateur
import userReducer from './reducers/userReducer';

// Configuration du store Redux
const store = configureStore({
  // Déclaration des reducers utilisés dans le store
  reducer: {
    user: userReducer,// Le reducer 'userReducer' est assigné à la clé 'user' - Le reducer gère les données liées à l'utilisateur.
  },
});

export default store;

//reducer: { user: userReducer } : Le store utilise un reducer appelé userReducer pour gérer tout ce qui est lié à l'utilisateur. Cela signifie que toutes les actions liées à l'utilisateur seront traitées par ce reducer.

