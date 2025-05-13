import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import './HomeAluno.css';
import Header from "../../components/Header";
import Banner from '../../assets/banner-aluno.svg';

const HomeAluno = () => {
    // const alunoLogado  = { id: 1, nome: "Aluno 1" }; // Simulação de aluno logado

    const [turmas, setTurmas] = useState([]);

     useEffect(() => {
        const TurmasFake = [
            {  titulo: 'Turma A', professor: 'João', pendentes: 2, entregues: 3 },
            {  titulo: 'Turma B', professor: 'Márcia', pendentes: 1, entregues: 4 }
        ];

        setTurmas(TurmasFake);
     }, []);

     const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
    ];

     return (
         <div className="container-aluno">
            <Header 
              links={linksAluno}
            />
             <img src={Banner} alt="Banner" className="banner" />
             <h3 className="subtitulo-aluno">SUAS TURMAS</h3>

             <div className="turmas-aluno">
                {turmas.map((turma, index) => (
                    <Card 
                        key={index}
                        titulo={turma.titulo}
                        professor={turma.professor}
                        pendentes={turma.pendentes}
                        entregues={turma.entregues}
                        onClick={() => console.log(`Aluno acessou: ${turma.titulo}`)}
                    />
                ))}
             </div>
             <h3 className="subtitulo-aluno">SEUS RESULTADOS</h3>

             <div className="turmas-aluno">
                {turmas.map((turma, index) => (
                    <Card 
                        key={index}
                        titulo={turma.titulo}
                        professor={turma.professor}
                        pendentes={turma.pendentes}
                        entregues={turma.entregues}
                        onClick={() => console.log(`Aluno acessou: ${turma.titulo}`)}
                    />
                ))}
             </div>
         </div>
     )
}

export default HomeAluno;