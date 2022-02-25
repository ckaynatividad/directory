import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
