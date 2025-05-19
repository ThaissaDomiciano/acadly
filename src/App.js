import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import HomeProfessor from './pages/Professor/HomeProfessor';
import HomeAluno from './pages/Aluno/HomeAluno';
import CadastroAtividade from './pages/Professor/CadastroAtividade';
import ControleTurmas from './pages/Professor/ControleTurmas';
import Analise from './pages/Professor/Analise';
import Atividades from './pages/Aluno/Atividades';
import EnvioAtividades from './pages/Aluno/EnvioAtividades';
import Notas from './pages/Aluno/Notas';

function App() {
  const [usuario, setUsuario] = useState(undefined); // undefined = carregando

  useEffect(() => {
    const userStorage = localStorage.getItem('usuario');
    if (userStorage) {
      try {
        const userParsed = JSON.parse(userStorage);
        if (userParsed?.tipo && userParsed?.id) {
          setUsuario(userParsed);
        } else {
          setUsuario(null);
        }
      } catch (e) {
        console.error("Erro ao carregar usuário do localStorage:", e);
        setUsuario(null);
      }
    } else {
      setUsuario(null);
    }
  }, []);

  const handleLogin = (usuario) => {
    setUsuario(usuario);
  };

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    setUsuario(null);
  };

  if (usuario === undefined) {
    return <div style={{ textAlign: 'center', marginTop: '30vh', fontSize: '1.5rem' }}>Carregando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/homeProfessor" element={
          usuario?.tipo === 'PROFESSOR'
            ? <HomeProfessor usuario={usuario} onLogout={handleLogout} />
            : <Navigate to="/login" />
        } />

        <Route path="/cadastro-atividade" element={
          usuario?.tipo === 'PROFESSOR'
            ? <CadastroAtividade />
            : <Navigate to="/login" />
        } />

        <Route path="/controle-turmas" element={
          usuario?.tipo === 'PROFESSOR'
            ? <ControleTurmas />
            : <Navigate to="/login" />
        } />

        <Route path="/analise" element={
          usuario?.tipo === 'PROFESSOR'
            ? <Analise />
            : <Navigate to="/login" />
        } />

        <Route path="/homeAluno" element={
          usuario?.tipo === 'ALUNO'
            ? <HomeAluno usuario={usuario} onLogout={handleLogout} />
            : <Navigate to="/login" />
        } />

        <Route path="/atividades" element={
          usuario?.tipo === 'ALUNO'
            ? <Atividades />
            : <Navigate to="/login" />
        } />

        <Route path="/envio-atividades" element={
          usuario?.tipo === 'ALUNO'
            ? <EnvioAtividades />
            : <Navigate to="/login" />
        } />

        <Route path="/notas" element={
          usuario?.tipo === 'ALUNO'
            ? <Notas />
            : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;
