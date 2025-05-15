import './Analise.css';
import Header from '../../components/Header';
import BotaoSair from '../../components/BotaoSair';

const Analise = () => {
    const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
    ];
    return (

        <div className="container-atividades">
            <Header 
            links={linksProfessor}
            />
             <div className="atividades-turmas-header">
                        <h2>ATIVIDADE</h2>
                        <BotaoSair tipoUsuario="professor" />
                        </div>
        </div>
    )
}

export default Analise;