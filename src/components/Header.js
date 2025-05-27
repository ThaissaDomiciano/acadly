import './Header.css';
import Logo from '../assets/logo-azul.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Header = ({ links = [], onVincular }) => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState('MEU PERFIL');
    const navigate = useNavigate(); 

    useEffect(() => {
        const authData = localStorage.getItem('usuario'); // aqui a chave do localStorage
        if (authData) {
            try {
                const user = JSON.parse(authData);
                setNomeUsuario(user.nome || 'MEU PERFIL'); // ajusta para o campo que seu backend usa
            } catch (error) {
                setNomeUsuario('MEU PERFIL');
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authData'); 
        navigate('/login'); 
    };

    return (
        <header className="header">
            <img src={Logo} alt="Logo Acadly" className="logo-header" />
            <nav className="nav">
                <ul className="list-header">
                    {links.map((link, index) => (
                        <li key={index}>
                            {link.action ? (
                                <button onClick={link.action} className="link-header">
                                    {link.label}
                                </button>
                            ) : (
                                <Link to={link.to} className="link-header">
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                    
                    <li className="perfil-wrapper">
                        <button className="perfil-btn" onClick={() => setMenuAberto(!menuAberto)}>
                            <FaUserCircle size={20} />
                            <span className="nome-professor">{nomeUsuario}</span>
                            <span className={`seta ${menuAberto ? 'aberta' : ''}`}>▾</span>
                        </button>

                        {menuAberto && (
                            <div className="menu-suspenso">
                                <button className="item-menu" onClick={onVincular}>
                                    <FcGoogle size={20} style={{ marginRight: '8px' }} />
                                    VINCULAR
                                </button>
                                <button className="item-menu sair" onClick={handleLogout}>
                                    <FaSignOutAlt style={{ marginRight: '8px' }} />
                                    SAIR
                                </button>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
