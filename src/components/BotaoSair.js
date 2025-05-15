import { FaSignOutAlt } from 'react-icons/fa';
import './BotaoSair.css';

const BotaoSair = ({tipoUsuario}) => {
    const rota = tipoUsuario === 'professor' ? '/homeProfessor' : '/homeAluno';
    return (
        <button className="btn-voltar" onClick={() => window.location.href = rota}>
                <FaSignOutAlt style={{ marginRight: '8px' }} />
                        SAIR
            </button>
    )
} 

export default BotaoSair;