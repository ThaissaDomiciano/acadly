import React, { useState, useEffect, useRef } from "react";
import Card from "../../components/Card";
import './HomeAluno.css';
import Header from "../../components/Header";
import Banner from '../../assets/banner-aluno.svg';

const HomeAluno = () => {
    const [turmas, setTurmas] = useState([]);

    // Referências para as seções
    const inicioRef = useRef(null);
    const turmasRef = useRef(null);
    const resultadoRef = useRef(null);

    useEffect(() => {
        const TurmasFake = [
            { titulo: 'Turma A', professor: 'João', pendentes: 2, entregues: 3 },
            { titulo: 'Turma B', professor: 'Márcia', pendentes: 1, entregues: 4 }
        ];

        setTurmas(TurmasFake);
    }, []);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const linksAluno = [
        { label: 'INÍCIO', action: () => scrollToSection(inicioRef) },
        { label: 'TURMAS', action: () => scrollToSection(turmasRef) },
        { label: 'RESULTADO', action: () => scrollToSection(resultadoRef) },
    ];

    return (
        <div className="container-aluno">
            <Header links={linksAluno} />

            <section ref={inicioRef}>
                <img src={Banner} alt="Banner" className="banner" />
            </section>

            <section ref={turmasRef}>
                <h3 className="titulo-aluno">SUAS TURMAS</h3>
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
            </section>

            <section ref={resultadoRef}>
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
            </section>
        </div>
    );
}

export default HomeAluno;
