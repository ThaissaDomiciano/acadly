import './ControleTurmas.css'; 
import Header from '../../components/Header';
import BotaoSair from '../../components/BotaoSair';

const ControleTurmas = () => {
    const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
    ];
    return (
        <div className="container-controle-turmas">
            <Header 
            links={linksProfessor}
            />

             <div className="atividades-turmas-header">
                <h2>CONTROLE DE TURMAS</h2>
                    <BotaoSair tipoUsuario="professor" />                        
            </div>
            
        </div>
              
    )
}

export default ControleTurmas;