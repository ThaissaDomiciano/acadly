import { useEffect, useState, useRef } from "react";
import Card from "../../components/Card";
import './HomeAluno.css';
import Header from "../../components/Header";
import Banner from '../../assets/banner-aluno.svg';
import axios from 'axios';

const HomeAluno = ({ usuario, onLogout }) => {
  const [turmas, setTurmas] = useState([]);
  const inicioRef = useRef(null);
  const turmasRef = useRef(null);
  const resultadoRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/aluno-turma/aluno/${usuario.id}`)
      .then(res => {
        const turmasFormatadas = res.data.map(item => ({
          titulo: item.turma.nome,
          professor: item.turma.professor?.nome || 'Desconhecido',
          pendentes: 2, 
          entregues: 3
        }));
        setTurmas(turmasFormatadas);
      })
      .catch(err => console.error("Erro ao buscar turmas do aluno:", err));
  }, [usuario.id]);

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const linksAluno = [
    { label: 'INÍCIO', action: () => scrollToSection(inicioRef) },
    { label: 'TURMAS', action: () => scrollToSection(turmasRef) },
    { label: 'RESULTADO', action: () => scrollToSection(resultadoRef) },
  ];

  return (
    <div className="container-aluno">
      <Header links={linksAluno} nomeUsuario={usuario.nome} onLogout={onLogout} />
      <section ref={inicioRef}><img src={Banner} alt="Banner" className="banner" /></section>
      <section ref={turmasRef}>
        <h3 className="titulo-aluno">SUAS TURMAS</h3>
        <div className="turmas-aluno">
          {turmas.map((turma, index) => (
            <Card key={index} {...turma} />
          ))}
        </div>
      </section>
      <section ref={resultadoRef}>
        <h3 className="subtitulo-aluno">SEUS RESULTADOS</h3>
        <div className="turmas-aluno">
          {turmas.map((turma, index) => (
            <Card key={index} {...turma} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeAluno;
