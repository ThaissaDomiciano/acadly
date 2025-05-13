import './Login.css';  
import './Styles.css'
import Image from '../assets/img-login.svg';  
import Logo from '../assets/logo-texto.svg';

function Login() {
    return (
        <div className='login-wrapper'>
            <img src={Logo} alt="Logo Acadly" className="logo" />
            <div className='left-section'>
                <img src={Image} alt='Professora dando aula para alunos' className='left-image' />
            </div>
            <div className='divider' />
            <div className='right-section'>
                <h2 className='title'>LOGIN</h2>
                <input type='email' placeholder='DIGITE SEU E-MAIL' className='input'/>
                <input type='password' placeholder='DIGITE SUA SENHA' className='input'/>
                <button className='button'>ENTRAR</button>
                <p className='link-cadastro'>
                    NÃO TEM UMA CONTA? <a href='/cadastro'>CADASTRE-SE</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
