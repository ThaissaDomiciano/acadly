import { useEffect, useState } from "react";
import Card from "../../components/Card";
import './HomeProfessor.css';
import Header from '../../components/Header';
import Banner from '../../assets/banner-professor.svg';
import axios from 'axios';

const HomeProfessor = ({ usuario, onLogout }) => {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/turmas/professor/${usuario.id}`)
      .then(res => {
        const turmasFormatadas = res.data.map(turma => ({
          titulo: turma.nome,
          professor: usuario.nome,
          pendentes: 0, // Pode puxar de /tarefas depois
          entregues: 0
        }));
        setTurmas(turmasFormatadas);
      })
      .catch(err => console.error("Erro ao buscar turmas do professor:", err));
  }, [usuario]);

  const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
  ];

  return (
    <div className="container-professor">
      <Header links={linksProfessor} nomeUsuario={usuario.nome} onLogout={onLogout} />
      <img src={Banner} alt="Banner" className="banner" />
      <h2 className="titulo-professor">TURMAS</h2>
      <div className="turmas-container">
        {turmas.map((turma, index) => (
          <Card key={index} {...turma} />
        ))}
      </div>
    </div>
  );
};

export default HomeProfessor;
