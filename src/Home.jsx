import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return <div><h2>Bienvenido a la Aplicación</h2></div>;
      }
      return (
        <div>
          <h2>Hola {user.name}, Bienvenido a la Aplicación</h2>   
        </div>
      );
}

export default Home