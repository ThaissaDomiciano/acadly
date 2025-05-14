import { useState } from 'react';
import './Login.css';  
import './Styles.css';
import Image from '../assets/img-login.svg';  
import Logo from '../assets/logo-texto.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuariosSalvos.find((u) => u.email === email && u.senha === senha);

        if (usuario) {
            alert(`Bem-vindo, ${usuario.nome}!`);

            // Redireciona conforme o tipo
            if (usuario.tipoUsuario === 'aluno') {
                window.location.href = '/homeAluno';
            } else if (usuario.tipoUsuario === 'professor') {
                window.location.href = '/homeProfessor';
            } else {
                alert('Tipo de usuário não reconhecido.');
            }

            // Quando o backend estiver pronto, substitua por:
            /*
            fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            })
            .then(res => res.json())
            .then(usuario => {
                if (usuario.tipo === 'aluno') {
                    window.location.href = '/homeAluno';
                } else if (usuario.tipo === 'professor') {
                    window.location.href = '/homeProfessor';
                }
            });
            */
        } else {
            alert('E-mail ou senha inválidos!');
        }
    };

    return (
        <div className='login-wrapper'>
            <img src={Logo} alt="Logo Acadly" className="logo" />
            <div className='left-section'>
                <img src={Image} alt='Professora dando aula para alunos' className='left-image' />
            </div>
            <div className='divider' />
            <div className='right-section'>
                <h2 className='title'>LOGIN</h2>
                <input
                    type='email'
                    placeholder='DIGITE SEU E-MAIL'
                    className='input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='DIGITE SUA SENHA'
                    className='input'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button className='button' onClick={handleLogin}>ENTRAR</button>
                <p className='link-cadastro'>
                    NÃO TEM UMA CONTA? <a href='/cadastro'>CADASTRE-SE</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
