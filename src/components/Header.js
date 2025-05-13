import './Header.css';
import Logo from '../assets/logo-azul.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Header = ({ links = [], onLogout, onVincular, nomeUsuario }) => {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="header">
            <img src={Logo} alt="Logo Acadly" className="logo-header" />
           <nav className="nav">
                <ul className="list-header">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} className="link-header">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    
                    <li className="perfil-wrapper">
                        <button className="perfil-btn" onClick={() => setMenuAberto(!menuAberto)}>
                            <FaUserCircle size={20} />
                            <span className="nome-professor">MEU PERFIL</span>
                            <span className={`seta ${menuAberto ? 'aberta' : ''}`}>▾</span>
                        </button>

                        {menuAberto && (
                            <div className="menu-suspenso">
                                <button className="item-menu" onClick={onVincular}>
                                    <FcGoogle size={20} style={{ marginRight: '8px' }} />
                                    VINCULAR
                                </button>
                                <button className="item-menu sair" onClick={onLogout}>
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