import './ControleTurmas.css';
import Header from '../../components/Header';
import BotaoSair from '../../components/BotaoSair';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash } from 'react-icons/fa';

const ControleTurmas = () => {
  const [turmas, setTurmas] = useState([
    {
      nomeTurma: 'LÍNGUA PORTUGUESA - TURMA A',
      alunos: [
        { nome: 'ALUNA TURMA A', email: 'aluno@aluno.com' },
        { nome: 'ALUNA TURMA A', email: 'aluno@aluno.com' },
        { nome: 'ALUNA TURMA A', email: 'aluno@aluno.com' },
      ],
    },
    {
      nomeTurma: 'LÍNGUA PORTUGUESA - TURMA B',
      alunos: [],
    },
  ]);

  const [turmasVisiveis, setTurmasVisiveis] = useState(
    turmas.map(() => false)
  );

  const toggleTurma = (index) => {
    const novas = [...turmasVisiveis];
    novas[index] = !novas[index];
    setTurmasVisiveis(novas);
  };

  const editarAluno = (turmaIndex, alunoIndex) => {
    const nome = prompt("Novo nome:");
    const email = prompt("Novo e-mail:");
    if (!nome || !email) return;

    const novasTurmas = [...turmas];
    novasTurmas[turmaIndex].alunos[alunoIndex] = { nome, email };
    setTurmas(novasTurmas);
  };

  const excluirAluno = (turmaIndex, alunoIndex) => {
    const confirmar = window.confirm("Deseja excluir este aluno?");
    if (!confirmar) return;

    const novasTurmas = [...turmas];
    novasTurmas[turmaIndex].alunos.splice(alunoIndex, 1);
    setTurmas(novasTurmas);
  };

  const adicionarAluno = (turmaIndex) => {
    const nome = prompt("Nome do aluno:");
    const email = prompt("E-mail do aluno:");
    if (!nome || !email) return;

    const novasTurmas = [...turmas];
    novasTurmas[turmaIndex].alunos.push({ nome, email });
    setTurmas(novasTurmas);
  };

  const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
  ];

  return (
    <div className="container-atividades-professor">
      <Header links={linksProfessor} />

      <div className="atividades-turmas-header">
        <h2>CONTROLE DE TURMAS</h2>
        <BotaoSair tipo="professor" />
      </div>

      {turmas.map((turma, index) => (
        <div key={index} className="turma-container">
          <div className="turma-header" onClick={() => toggleTurma(index)}>
            <strong>{turma.nomeTurma}</strong>
            {turmasVisiveis[index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {turmasVisiveis[index] && (
            <div className="turma-conteudo">
              <div className="tabela-alunos">
                <div className="linha-cabecalho">
                  <span>NOME</span>
                  <span>E-MAIL</span>
                  <span>AÇÕES</span>
                </div>

                <div className="lista-alunos">
                  {turma.alunos.map((aluno, i) => (
                    <div className="linha-aluno" key={i}>
                      <span>{aluno.nome}</span>
                      <span>{aluno.email}</span>
                      <span className="acoes">
                        <button
                          className="btn-editar"
                          onClick={() => editarAluno(index, i)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn-excluir"
                          onClick={() => excluirAluno(index, i)}
                        >
                          <FaTrash />
                        </button>
                      </span>
                    </div>
                  ))}
                  <div
                    className="linha-adicionar"
                    onClick={() => adicionarAluno(index)}
                  >
                    <span>ADICIONAR ALUNO</span>
                    <span className="mais">+</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ControleTurmas;
