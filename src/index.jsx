import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProfileProvider } from './hooks/useProfile';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
