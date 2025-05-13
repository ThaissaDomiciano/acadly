import './EnvioAtividades.css';
import Header from '../../components/Header';

const EnvioAtividades = () => {  
    const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
    ];
    return (
        <div className='container-envio-atividades'>
            <Header 
            links={linksAluno}
            />
        </div>
    )
}

export default EnvioAtividades;