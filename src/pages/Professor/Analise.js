import './Analise.css';
import Header from '../../components/Header';

const Analise = () => {
    const linksProfessor = [
    { to: '/homeProfessor', label: 'INÍCIO' },
    { to: '/controle-turmas', label: 'TURMAS' },
    { to: '/cadastro-atividade', label: 'CADASTRO' },
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