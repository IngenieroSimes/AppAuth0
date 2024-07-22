// src/Profile.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>No está autenticado</div>;
  }

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <img src={user.picture} alt="Foto de perfil" />
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
