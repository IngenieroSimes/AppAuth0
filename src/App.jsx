// src/App.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Home from './Home';

const App = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> <br />
        
        {!isAuthenticated && <Link to="/login">Iniciar Sesión</Link>}<br />
        {!isAuthenticated && <Link to="/register">Registrarse</Link>}<br />
        
        {isAuthenticated && <Link to="/profile">Perfil</Link>}<br />
        {isAuthenticated && (
          <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar Sesión
          </button><br /></>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;

