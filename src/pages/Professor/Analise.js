import './Analise.css';
import Header from '../../components/Header';
import BotaoSair from '../../components/BotaoSair';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEye, FaEdit, FaCheck } from 'react-icons/fa';

const atividadesFicticias = [
  {
    nome: 'ATIVIDADE 1',
    data: 'DE 01/05/2025 A 07/05/2025',
    alunos: [
      { nome: 'ALUNA TURMA A', status: 'ENTREGUE', nota: '', pdfUrl: '#' },
      { nome: 'ALUNA TURMA A', status: 'ENTREGUE', nota: '', pdfUrl: '#' },
      { nome: 'ALUNA TURMA A', status: 'ENTREGUE', nota: '', pdfUrl: '#' },
      { nome: 'ALUNA TURMA A', status: 'PENDENTE', nota: '', pdfUrl: null },
    ],
  },
  {
    nome: 'ATIVIDADE 2',
    data: 'DE 01/05/2025 A 07/05/2025',
    alunos: [],
  },
];

const Analise = () => {
  const [atividades, setAtividades] = useState(atividadesFicticias);
  const [visiveis, setVisiveis] = useState(atividadesFicticias.map(() => false));
  const [notasTemp, setNotasTemp] = useState({});
  const [editandoNota, setEditandoNota] = useState({}); 

  const toggleAtividade = (index) => {
    const novas = [...visiveis];
    novas[index] = !novas[index];
    setVisiveis(novas);
  };

  const handleNotaChange = (atividadeIndex, alunoIndex, novaNota) => {
    const key = `${atividadeIndex}-${alunoIndex}`;
    setNotasTemp({ ...notasTemp, [key]: novaNota });
  };

  const editarNota = (atividadeIndex, alunoIndex) => {
    const key = `${atividadeIndex}-${alunoIndex}`;
    setEditandoNota({ ...editandoNota, [key]: true });
    const notaAtual = atividades[atividadeIndex].alunos[alunoIndex].nota;
    setNotasTemp({ ...notasTemp, [key]: notaAtual });
  };

  const salvarNota = (atividadeIndex, alunoIndex) => {
    const key = `${atividadeIndex}-${alunoIndex}`;
    const novaNota = notasTemp[key];

    const novasAtividades = [...atividades];
    novasAtividades[atividadeIndex].alunos[alunoIndex].nota = novaNota;
    setAtividades(novasAtividades);

    const novasNotasTemp = { ...notasTemp };
    delete novasNotasTemp[key];
    setNotasTemp(novasNotasTemp);

    const novosEditando = { ...editandoNota };
    delete novosEditando[key];
    setEditandoNota(novosEditando);
  };

  const visualizarPdf = (url) => {
    alert("Visualizar PDF do aluno (simulado)");
    // window.open(url, '_blank'); // use se tiver URL real
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
        <h2>ATIVIDADE</h2>
        <BotaoSair tipoUsuario="professor" />
      </div>

      <div className="atividade-turma">

        {atividades.map((atividade, index) => (
          <div className="atividade-box" key={index}>
            <div className="atividade-header" onClick={() => toggleAtividade(index)}>
              <div>
                <strong>{atividade.nome}</strong>
                <p>{atividade.data}</p>
              </div>
              {visiveis[index] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {visiveis[index] && (
              <div className="atividade-conteudo">
                {atividade.alunos.map((aluno, alunoIndex) => {
                  const key = `${index}-${alunoIndex}`;
                  const estaEditando = editandoNota[key] || false;
                  const notaAtual = estaEditando
                    ? notasTemp[key]
                    : atividades[index].alunos[alunoIndex].nota;

                  return (
                    <div key={alunoIndex} className="linha-aluno">
                      <span>{aluno.nome}</span>
                      <span className={`status ${aluno.status.toLowerCase()}`}>{aluno.status}</span>

                      {aluno.status === 'ENTREGUE' && (
                        <button
                          className="btn-visualizar"
                          onClick={() => visualizarPdf(aluno.pdfUrl)}
                        >
                          <FaEye />
                        </button>
                      )}

                      <input
                        className="campo-nota"
                        type="number"
                        placeholder="Nota"
                        value={notaAtual}
                        onChange={(e) =>
                          handleNotaChange(index, alunoIndex, e.target.value)
                        }
                        min="0"
                        max="10"
                        disabled={!estaEditando}
                      />

                      <span className="icones-acoes">
                        {!estaEditando ? (
                          <button onClick={() => editarNota(index, alunoIndex)} title="Editar Nota">
                            <FaEdit />
                          </button>
                        ) : (
                          <button onClick={() => salvarNota(index, alunoIndex)} title="Salvar Nota">
                            <FaCheck />
                          </button>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analise;
