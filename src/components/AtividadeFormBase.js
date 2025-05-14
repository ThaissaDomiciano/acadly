import './AtividadeFormBase.css';

const AtividadeFormBase = ({ 
    turma, notaMaxima, dataEntrega, descricao, documento, atividadeDescricao, 
    modoEdicao = false, onEnviar, onAnexarPDF, pdfAluno 
}) => {
    return (
        <div className='form-container'>
            <form className='form-atividade' onSubmit={onEnviar}>
                <div className='linha'>
                    <div className='campo'>
                        <label>TURMA:</label>
                        {modoEdicao ? <input type='text' defaultValue={turma} /> : <p>{turma}</p>}
                    </div>
                    <div className='campo'>
                        <label>NOTA MÁXIMA:</label>
                        {modoEdicao ? <input type='number' defaultValue={notaMaxima} /> : <p>{notaMaxima}</p>}
                    </div>
                    <div className='campo'>
                        <label>DATA DE ENTREGA:</label>
                        {modoEdicao ? <input type='date' defaultValue={dataEntrega} /> : <p>{dataEntrega}</p>}
                    </div>
                </div>

                <div className='campo'>
                    <label>DESCRIÇÃO DA ATIVIDADE:</label>
                    {modoEdicao ? <input type='text' defaultValue={descricao} /> : <p>{descricao}</p>}
                </div>

                <div className='campo'>
                    <label>DOCUMENTOS ANEXADOS:</label>
                    <p>{documento} </p>
                </div>

                <div className='campo'>
                    <label>ATIVIDADE:</label>
                    <textarea rows='6' defaultValue={atividadeDescricao} disabled={!modoEdicao}></textarea>
                </div>

                {onAnexarPDF && (
                    <div className='campo'>
                        <label>ANEXAR PDF:</label>
                        <input type='file' accept='.pdf' onChange={onAnexarPDF} />
                        {pdfAluno && <p>PDF Anexado: {pdfAluno.name}</p>}
                    </div>
                )}

                <div className='botoes'>
                    <button type='submit'>ENVIAR</button>
                </div>
            </form>
        </div>
    );
};

export default AtividadeFormBase;
