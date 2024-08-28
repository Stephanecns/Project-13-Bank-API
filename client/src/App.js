import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import UserProfilePage from './components/UserProfilePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
