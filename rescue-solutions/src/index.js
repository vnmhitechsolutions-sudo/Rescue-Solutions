import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Crucial for routing
import './index.css';
import App from './App.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter enables client-side routing across the entire application */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);