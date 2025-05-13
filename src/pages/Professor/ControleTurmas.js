import './ControleTurmas.css';
import Header from '../../components/Header';

const ControleTurmas = () => {
    const linksProfessor = [
    { to: '/professor', label: 'INÍCIO' },
    { to: '/professor/turmas', label: 'TURMAS' },
    { to: '/professor/cadastro', label: 'CADASTRO' },
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