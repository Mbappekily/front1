import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppelleProvider } from './context/AppelleContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppelleProvider>
      <App />
    </AppelleProvider>
  </StrictMode>
);