import './Atividades.css'
import Header from '../../components/Header'
import BotaoSair from '../../components/BotaoSair'
import { useState } from 'react'

const Atividades = () => {
  const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
  ]

  // Simulando lista de atividades com estado de conclusão
  const [atividades, setAtividades] = useState([
    { id: 1, titulo: 'ATIVIDADE 1', data: '01/05/2025 a 07/05/2025', entregue: false },
    { id: 2, titulo: 'ATIVIDADE 2', data: '01/05/2025 a 07/05/2025', entregue: false },
  ])

  const marcarComoConcluida = (id) => {
    const atualizadas = atividades.map((a) =>
      a.id === id ? { ...a, entregue: true } : a
    )
    setAtividades(atualizadas)
  }

  return (
    <div className='container-atividades-aluno'>
      <Header links={linksAluno} />
      <div className="atividades-turmas-header">
        <h2>ATIVIDADE</h2>
        <BotaoSair tipo="aluno" />
      </div>

      <div className="atividades-turmas">
        {atividades.map((atividade) => (
          <div key={atividade.id} className="atividade-card">
            <div className="atividade-info">
              <h3>{atividade.titulo}</h3>
              <p>DE {atividade.data}</p>
            </div>

            <div className="atividade-status">
              <span className={atividade.entregue ? 'entregue' : 'pendente'}>
                {atividade.entregue ? 'ENTREGUE' : 'PENDENTE'}
              </span>

              <button
                className="botao-acessar"
                onClick={() => alert(`Abrir PDF da ${atividade.titulo}`)}
              >
                👁 ACESSAR
              </button>

              {!atividade.entregue && (
                <button
                  className="botao-concluir"
                  onClick={() => marcarComoConcluida(atividade.id)}
                >
                  ✔
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Atividades
