
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated imports
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';
import Hero from './components/Hero';
// import Hero from './components/Hero';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //  const location = useLocation();

  const handleLogin = (username) => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Router>
      <div className="App">
        <Header position/>
          {/* {location.pathname !== '/dashboard' && <Hero />} */}
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
