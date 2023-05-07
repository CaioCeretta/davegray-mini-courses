import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import'./styles/global.css'
// 1 - Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home'
import UseCallback from './pages/UseCallback';


import router from './routes/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

