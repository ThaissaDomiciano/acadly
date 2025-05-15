import Header from '../../components/Header';
import AtividadeFormBase from '../../components/AtividadeFormBase';
import BotaoSair from '../../components/BotaoSair';

const CadastroAtividade = () => {
const handleEnviar = (e) => {
    e.preventDefault();
    console.log('Atividade cadastrada')
}

const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
    ];

    return (
        <div className='container-atividades'>
            <Header 
            links={linksProfessor}  
            />

             <div className="atividades-turmas-header">
                        <h2>CADASTRO DE ATIVIDADE</h2>
                        <BotaoSair tipoUsuario="professor" />
                        </div>

        <AtividadeFormBase 
        modoEdicao={true}
        turma=""
        notaMaxima=""
        dataEntrega=""
        descricao=""
        documento=""
        atividadeDescricao=""
        onEnviar={handleEnviar}
        />
        </div>
    )
}

export default CadastroAtividade;