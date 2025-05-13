import './Notas.css';
import Header from '../../components/Header';

const Notas = () => {
     const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
    ];
    return (
        <div className='container-notas'>
            <Header 
            links={linksAluno}
            />
        </div>
    )
}

export default Notas;