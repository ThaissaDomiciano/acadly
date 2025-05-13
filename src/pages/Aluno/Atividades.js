import './Atividades.css'
import Header from '../../components/Header'

const Atividades = () => {
    const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
    ];
    return (
        <div className="container-atividades">
            <Header 
            links={linksAluno}
            />
        </div>
    )
}

export default Atividades;