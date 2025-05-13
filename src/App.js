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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/homeProfessor" element={<HomeProfessor />} />
        <Route path="/homeAluno" element={<HomeAluno />} />
        <Route path="/cadastro-atividade" element={<CadastroAtividade />} />
        <Route path="/controle-turmas" element={<ControleTurmas />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/envio-atividades" element={<EnvioAtividades />} />
        <Route path="/notas" element={<Notas />} />
      </Routes>
    </Router>
  );
}

export default App;
