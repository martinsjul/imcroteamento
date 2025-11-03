import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.jsx';
import Imc from './pages/Imc.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  
    errorElement: <NotFound />, 
    children: [
      
      { path: '/', element: <Home /> },
      { path: '/imc', element: <Imc /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },

      
      {
        element: <ProtectedRoute />, 
        children: [
          { path: '/dashboard', element: <Dashboard /> }
        ]
      },
     
      { path: '*', element: <NotFound /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);