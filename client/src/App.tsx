import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </Router>
  );
}

export default App;
