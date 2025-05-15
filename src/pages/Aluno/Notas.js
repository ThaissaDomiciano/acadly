import './Notas.css';
import Header from '../../components/Header';
import BotaoSair from '../../components/BotaoSair';


const Notas = () => {
     const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
    ];
    return (
        <div className='container-atividades'>
            <Header 
            links={linksAluno}
            />
            <div className="atividades-turmas-header">
                        <h2>ATIVIDADE</h2>
                        <BotaoSair tipoUsuario="aluno" />
                        </div>
        </div>
    )
}

export default Notas;