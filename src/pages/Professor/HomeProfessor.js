import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import './HomeProfessor.css';
import Header from '../../components/Header';
import Banner from '../../assets/banner-professor.svg';

const HomeProfessor = () => {
    const professorLogado = { id: 1, nome: "Professor 1" };

    const [turmas, setTurmas] = useState([]);
    const [novaTurma, setNovaTurma] = useState({
        titulo: "",
        pendentes: 0,
        entregues: 0,
    });

    useEffect(() => {
        const TurmasFake = [
            { titulo: 'Turma A', pendentes: 2, entregues: 3 },
            { titulo: 'Turma B', pendentes: 1, entregues: 4 }
        ];
        setTurmas(TurmasFake);
    }, []);

    const adicionarTurma = () => {
        if (novaTurma.titulo.trim() !== "") {
            setTurmas([...turmas, novaTurma]);
            setNovaTurma({ titulo: "", pendentes: 0, entregues: 0 });
        }
    };

    const excluirTurma = (index) => {
        const novaLista = turmas.filter((_, i) => i !== index);
        setTurmas(novaLista);
    };

    const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
    ];

    return (
        <div className="container-professor">
            <Header 
            links={linksProfessor}  
            />
                <img src={Banner} alt="Banner" className="banner" />
            <h2 className="titulo-professor">CRIAR NOVA TURMA</h2>
            <div className="form-turma-container">
                <h2 className="titulo-turma">NOME DA TURMA:</h2>
            <div className="form-turma">
                <input
                    placeholder="INFORME O NOME DA TURMA"
                    value={novaTurma.titulo}
                    onChange={(e) => setNovaTurma({ ...novaTurma, titulo: e.target.value })}
                />
                <button onClick={adicionarTurma}>CRIAR</button>
            </div>
            </div>
            <h3 className="subtitulo-professor">TURMAS CRIADAS</h3>
            <div className="turmas-container">
                {turmas.map((turma, index) => (
                    <Card
                        key={index}
                        titulo={turma.titulo}
                        professor={professorLogado.nome}
                        pendentes={turma.pendentes}
                        entregues={turma.entregues}
                        onClick={() => console.log(`Entrar na sala: ${turma.titulo}`)}
                        onExcluir={() => excluirTurma(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeProfessor;
