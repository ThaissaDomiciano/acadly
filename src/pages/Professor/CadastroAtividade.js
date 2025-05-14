import './CadastroAtividade.css';
import Header from '../../components/Header';
import AtividadeFormBase from '../../components/AtividadeFormBase';

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
        <div className='container-cadastro-atividade'>
            <Header 
            links={linksProfessor}  
            />

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