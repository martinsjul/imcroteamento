import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) { 
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const sucesso = register(nome, email, senha);

    if (sucesso) {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center p-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Cadastro</h2> 
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="nome">Como você quer ser chamado?</label>
          <input
            type="text" id="nome"
            value={nome} onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

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
          Criar Conta
        </button>
        <p className="text-center mt-4 text-gray-600">
          Já tem uma conta? <Link to="/login" className="text-cyan-600 hover:underline">Faça login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;