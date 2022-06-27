import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
