import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    
    <div className="flex flex-col items-center justify-center text-center p-10">

      
      <h1 className="text-7xl font-bold text-white drop-shadow-md">
        Oops! 404
      </h1>

      
      <p className="text-2xl mt-4 text-gray-200">
        Página não encontrada.
      </p>

      
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-[#faf8da] text-[#396A75] font-bold rounded-lg shadow-lg hover:bg-yellow-200 transition-all transform hover:scale-105"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}

export default NotFound;