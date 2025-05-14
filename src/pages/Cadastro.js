import { useState } from 'react';
import './Cadastro.css';   
import './Styles.css' 
import Image from '../assets/img-cadastro.svg';  
import Logo from '../assets/logo-texto.svg';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');

    const HandleCadastro = () => {
        if (!nome || !email || !senha || !tipoUsuario) {
            alert('Preencha todos os campos!');
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha,
            tipoUsuario
        };

        const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExiste = usuariosSalvos.some((u) => u.email === email);

        if (usuarioExiste) {
            alert('E-mail já cadastrado!');
            return;
        }

        usuariosSalvos.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosSalvos));
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/login';

        //Quando o backend estiver pronto, subtituir por:
        //fetch('http://localhost:8080/api/usuarios', {
        //     method: 'POST',
        //    headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(novoUsuario)
        // });
    };

    return (
        <div className='cadastro-wrapper'>
            <img src={Logo} alt="Logo Acadly" className="logo" />
            <div className='left-section'>
                <img src={Image} alt='Professora dando aula para alunos' className='left-image-cadastro' />
            </div>
            <div className='divider' />
            <div className='right-section'>
                <h2 className='title'>CADASTRO</h2>
                <input 
                    type='text' 
                    placeholder='DIGITE SEU NOME COMPLETO' 
                    className='input'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
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
                <select 
                    className='select-input'
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}
                >
                    <option value="">SELECIONE O TIPO DE USUÁRIO</option>
                    <option value="aluno">ALUNO</option>
                    <option value="professor">PROFESSOR</option>
                </select>
                <button 
                    className='button'
                    onClick={HandleCadastro}
                >
                    CADASTRAR
                </button>
                <p className='link-cadastro'>
                    JÁ TEM CONTA? <a href='/login'>FAÇA LOGIN</a>
                </p>
            </div>
        </div>
    );
}

export default Cadastro;
