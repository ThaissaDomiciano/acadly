// IMPORTS
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import AtividadeFormBase from '../../components/AtividadeFormBase';
import BotaoSair from '../../components/BotaoSair';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CadastroAtividade = () => {
  const navigate = useNavigate();
  const [turmas, setTurmas] = useState([]);
  const [turmaSelecionada, setTurmaSelecionada] = useState("");

  useEffect(() => {
    const buscarTurmas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/turmas');
        setTurmas(response.data);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error);
      }
    };
    buscarTurmas();
  }, []);

  const handleEnviar = async (formData) => {
    try {
      const novaAtividade = {
        titulo: formData.atividadeDescricao,
        descricao: formData.descricao,
        dataEntrega: formData.dataEntrega,
        notaMaxima: parseFloat(formData.notaMaxima),
        linkPdf: formData.documento,
        turma: { id: parseInt(formData.turma) }
      };

      await axios.post('http://localhost:8080/tarefas', novaAtividade);
      alert('Atividade cadastrada com sucesso!');
      navigate('/analise');
    } catch (error) {
      console.error('Erro ao cadastrar atividade:', error);
      alert('Erro ao cadastrar atividade');
    }
  };

  const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
  ];

  return (
    <div className='container-atividades-professor'>
      <Header links={linksProfessor} />
      <div className="atividades-turmas-header">
        <h2>CADASTRO DE ATIVIDADE</h2>
        <BotaoSair tipo="professor" />
      </div>

      {turmas.length > 0 ? (
        <AtividadeFormBase
          modoEdicao={true}
          turma={turmaSelecionada}
          notaMaxima=""
          dataEntrega=""
          descricao=""
          documento=""
          atividadeDescricao=""
          onEnviar={handleEnviar}
          turmas={turmas}
          setTurmaSelecionada={setTurmaSelecionada}
        />
      ) : (
        <p>Carregando turmas...</p>
      )}
    </div>
  );
};

export default CadastroAtividade;
