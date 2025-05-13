import './CadastroAtividade.css';
import Header from '../../components/Header';

const CadastroAtividade = () => {
const linksProfessor = [
    { to: '/professor', label: 'INÍCIO' },
    { to: '/professor/turmas', label: 'TURMAS' },
    { to: '/professor/cadastro', label: 'CADASTRO' },
    ];

    return (
        <div className='container-cadastro-atividade'>
            <Header 
            links={linksProfessor}  
            />
        </div>
    )
}

export default CadastroAtividade;