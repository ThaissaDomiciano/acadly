import './AtividadeFormBase.css';
import { useState } from 'react';

const AtividadeFormBase = ({
    turma, notaMaxima, dataEntrega, descricao, documento, atividadeDescricao,
    modoEdicao = false, onEnviar, turmas = [], setTurmaSelecionada
}) => {

    const [notaMax, setNotaMax] = useState(notaMaxima);
    const [data, setData] = useState(dataEntrega);
    const [desc, setDesc] = useState(descricao);
    const [doc, setDoc] = useState(documento);
    const [atividade, setAtividade] = useState(atividadeDescricao);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEnviar({
            turma,
            notaMaxima: notaMax,
            dataEntrega: data,
            descricao: desc,
            documento: doc,
            atividadeDescricao: atividade
        });
    };

    return (
        <div className='form-container'>
            <form className='form-atividade' onSubmit={handleSubmit}>
                <div className='linha'>
                    <div className='campo'>
                        <label>TURMA:</label>
                        {modoEdicao ? (
                            <select
                                className='input-estilizado'
                                value={turma}
                                onChange={(e) => setTurmaSelecionada(e.target.value)}
                            >
                                <option value="">Selecione uma turma</option>
                                {turmas.map((t) => (
                                    <option key={t.id} value={t.id}>
                                        {t.nomeMateria}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <p>{turma}</p>
                        )}
                    </div>
                    <div className='campo'>
                        <label>NOTA MÁXIMA:</label>
                        {modoEdicao ? (
                            <input type='number' value={notaMax} onChange={(e) => setNotaMax(e.target.value)} />
                        ) : (
                            <p>{notaMax}</p>
                        )}
                    </div>
                    <div className='campo'>
                        <label>DATA DE ENTREGA:</label>
                        {modoEdicao ? (
                            <input type='date' value={data} onChange={(e) => setData(e.target.value)} />
                        ) : (
                            <p>{data}</p>
                        )}
                    </div>
                </div>

                <div className='campo'>
                    <label>DESCRIÇÃO DA ATIVIDADE:</label>
                    {modoEdicao ? (
                        <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />
                    ) : (
                        <p>{desc}</p>
                    )}
                </div>

                <div className='campo'>
                    <label>DOCUMENTO (link):</label>
                    {modoEdicao ? (
                        <input type='text' value={doc} onChange={(e) => setDoc(e.target.value)} />
                    ) : (
                        <p>{doc}</p>
                    )}
                </div>

                <div className='campo'>
                    <label>ATIVIDADE:</label>
                    <textarea
                        rows='6'
                        value={atividade}
                        onChange={(e) => setAtividade(e.target.value)}
                        disabled={!modoEdicao}
                    ></textarea>
                </div>

                <div className='botoes'>
                    <button type='submit'>ENVIAR</button>
                </div>
            </form>
        </div>
    );
};

export default AtividadeFormBase;
