import './ControleTurmas.css';
import Header from '../../components/Header';

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
        </div>
              
    )
}

export default ControleTurmas;