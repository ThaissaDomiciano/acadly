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
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [usuario, setUsuario] = useState(undefined); 

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

        {/* Rotas do PROFESSOR */}
        <Route path="/homeProfessor" element={
          <PrivateRoute user={usuario} allowed={['PROFESSOR']}>
            <HomeProfessor usuario={usuario} onLogout={handleLogout} />
          </PrivateRoute>
        } />
        <Route path="/cadastro-atividade" element={
          <PrivateRoute user={usuario} allowed={['PROFESSOR']}>
            <CadastroAtividade />
          </PrivateRoute>
        } />
        <Route path="/controle-turmas" element={
          <PrivateRoute user={usuario} allowed={['PROFESSOR']}>
            <ControleTurmas />
          </PrivateRoute>
        } />
        <Route path="/analise" element={
          <PrivateRoute user={usuario} allowed={['PROFESSOR']}>
            <Analise />
          </PrivateRoute>
        } />

        {/* Rotas do ALUNO */}
        <Route path="/homeAluno" element={
          <PrivateRoute user={usuario} allowed={['ALUNO']}>
            <HomeAluno usuario={usuario} onLogout={handleLogout} />
          </PrivateRoute>
        } />
        <Route path="/atividades" element={
          <PrivateRoute user={usuario} allowed={['ALUNO']}>
            <Atividades />
          </PrivateRoute>
        } />
        <Route path="/envio-atividades" element={
          <PrivateRoute user={usuario} allowed={['ALUNO']}>
            <EnvioAtividades />
          </PrivateRoute>
        } />
        <Route path="/notas" element={
          <PrivateRoute user={usuario} allowed={['ALUNO']}>
            <Notas />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
