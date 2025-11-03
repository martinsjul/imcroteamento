import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    
    const sucesso = login(email, senha);
    
    if (sucesso) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center p-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">E-mail</label>
          <input
            type="email" id="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="senha">Senha</label>
          <input
            type="password" id="senha"
            value={senha} onChange={(e) => setSenha(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <button type="submit" className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
          Entrar
        </button>
        <p className="text-center mt-4 text-gray-600">
          Não tem uma conta? <Link to="/register" className="text-cyan-600 hover:underline">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;