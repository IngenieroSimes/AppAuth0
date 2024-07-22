// src/Login.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
