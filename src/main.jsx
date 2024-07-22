import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Auth0Provider
      domain="dev-tzvtnbbdjcvh502k.us.auth0.com"
      clientId="C72yI7PWo67ZJ23wJ5koWmMEvFHO5c47"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
