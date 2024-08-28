// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer'; // Assurez-vous que ce chemin est correct

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
