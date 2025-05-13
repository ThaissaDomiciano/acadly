import './Analise.css';
import Header from '../../components/Header';

const Analise = () => {
    const linksProfessor = [
    { to: '/professor', label: 'INÍCIO' },
    { to: '/professor/turmas', label: 'TURMAS' },
    { to: '/professor/cadastro', label: 'CADASTRO' },
    ];
    return (
        <div className="container-analise">
            <Header 
            links={linksProfessor}
            />
        </div>
    )
}

export default Analise;