import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('sessionUser');
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
      setIsAuthenticated(true);
    }
  }, []);

  const register = (nome, email, senha) => { 
    const usuarios = JSON.parse(localStorage.getItem('users')) || [];
    
    if (usuarios.find(u => u.email === email)) {
      alert("Este e-mail já está cadastrado.");
      return false;
    }
    
    const novoUsuario = { id: Date.now(), nome, email, senha }; 
    usuarios.push(novoUsuario);
    localStorage.setItem('users', JSON.stringify(usuarios));
    alert("Cadastro realizado com sucesso!");
    return true; 
  };


  const login = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem('users')) || [];
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuarioEncontrado) {
      setUsuario(usuarioEncontrado);
      setIsAuthenticated(true);
      localStorage.setItem('sessionUser', JSON.stringify(usuarioEncontrado));
      return true; 
    } else {
      alert("E-mail ou senha inválidos.");
      return false; 
    }
  };

  const logout = () => {
    setUsuario(null);
    setIsAuthenticated(false);
    localStorage.removeItem('sessionUser');
  };

  const value = {
    usuario,
    isAuthenticated,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}