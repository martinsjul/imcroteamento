// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // Importa o CSS do Tailwind

// Importa o Layout e as Páginas
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Imc from './pages/Imc.jsx';
import NotFound from './pages/NotFound.jsx';

// Cria o roteador
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O elemento principal é o nosso layout com Navbar
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/imc',
        element: <Imc />,
      },
      {
        path: '*', // Rota coringa para qualquer outra URL
        element: <NotFound />,
      },
    ],
  },
]);

// Renderiza a aplicação com o provedor de rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);