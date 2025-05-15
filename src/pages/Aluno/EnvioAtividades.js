import Header from '../../components/Header';
import AtividadeFormBase from '../../components/AtividadeFormBase';
import { useState } from 'react';
import BotaoSair from '../../components/BotaoSair';

const EnvioAtividades = () => {  
    const [pdfAluno, setPdfAluno] = useState(null);
    
    const handleEnviar = (e) => {
        e.preventDefault();
        console.log('Atividade do aluno enviada', pdfAluno);
    };

    const handleAnexarPDF = (e) => {
        setPdfAluno(e.target.files[0]);
    };

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
            <div className="atividades-turmas-header">
                <h2>ATIVIDADE</h2>
                    <BotaoSair tipoUsuario="aluno" />
                </div>
        <AtividadeFormBase 
                modoEdicao={false}
                turma="TURMA C"
                notaMaxima="10"
                dataEntrega="2025-05-20"
                descricao="Atividade de Redação - Língua Portuguesa"
                documento="atividade.pdf"
                atividadeDescricao="Faça uma redação baseada no tema do último ENEM, conforme o PDF anexado."
                onAnexarPDF={handleAnexarPDF}
                pdfAluno={pdfAluno}
                onEnviar={handleEnviar}
        />
        </div>
    )
}

export default EnvioAtividades;