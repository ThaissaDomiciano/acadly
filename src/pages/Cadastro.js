import './Cadastro.css';   
import './Styles.css' 
import Image from '../assets/img-cadastro.svg';  
import Logo from '../assets/logo-texto.svg';

function Cadastro() {
    return (
        <div className='cadastro-wrapper'>
            <img src={Logo} alt="Logo Acadly" className="logo" />
            <div className='left-section'>
                <img src={Image} alt='Professora dando aula para alunos' className='left-image-cadastro' />
            </div>
            <div className='divider' />
            <div className='right-section'>
                <h2 className='title'>CADASTRO</h2>
                <input type='text' placeholder='DIGITE SEU NOME COMPLETO' className='input'/>
                <input type='email' placeholder='DIGITE SEU E-MAIL' className='input'/>
                <input type='password' placeholder='DIGITE SUA SENHA' className='input'/>
                <select className='select-input'>
                    <option value="">SELECIONE O TIPO DE USUÁRIO</option>
                    <option value="aluno">ALUNO</option>
                    <option value="professor">PROFESSOR</option>
                </select>
                <button className='button'>CADASTRAR</button>
                <p className='link-cadastro'>
                    JÁ TEM CONTA? <a href='/login'>FAÇA LOGIN</a>
                </p>
            </div>
        </div>
    );
}

export default Cadastro;
