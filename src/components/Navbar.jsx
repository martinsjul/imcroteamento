// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-center gap-10">
        <Link to="/" className="text-white text-lg font-semibold hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <Link to="/imc" className="text-white text-lg font-semibold hover:text-cyan-400 transition-colors">
          IMC
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;