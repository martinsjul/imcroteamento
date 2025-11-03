import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
  
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-lg font-semibold hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link to="/imc" className="text-lg font-semibold hover:text-cyan-400 transition-colors">
            IMC
          </Link>
          
          {isAuthenticated && (
            <Link to="/dashboard" className="text-lg font-semibold hover:text-cyan-400 transition-colors">
              Usuarios
            </Link>
          )}
        </div>
        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
          
            <>
              <span className="text-gray-300">Olá, {usuario?.nome}</span> 
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Logoff
              </button>
            </>
          ) : (
           
            <>
              <Link to="/login" className="text-lg font-semibold hover:text-cyan-400 transition-colors">
                Login
              </Link>
              <Link to="/register" className="bg-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Cadastre-se
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;