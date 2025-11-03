import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { usuario } = useAuth(); 
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('users')) || [];
    setListaUsuarios(usuarios);
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Quem bom te ver aqui!</h1>
      <p className="text-2xl mb-8">
        Bem-vindo, <span className="font-bold text-cyan-300">{usuario?.nome}</span>!
      </p>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Usuários Cadastrados no Sistema</h2>
        
        <ul className="divide-y divide-gray-200">
          {listaUsuarios.length > 0 ? (
            listaUsuarios.map((u) => (
              <li key={u.id} className="py-3">
                <p className="text-lg"><strong>Nome:</strong> {u.nome}</p>
                <p className="text-sm text-gray-600"><strong>Email:</strong> {u.email}</p>
              </li>
            ))
          ) : (
            <li className="py-3 text-center text-gray-500">Nenhum usuário cadastrado ainda.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;