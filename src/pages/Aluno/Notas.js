import './Notas.css'
import Header from '../../components/Header'
import BotaoSair from '../../components/BotaoSair'
import { useState } from 'react'

const Notas = () => {
  const linksAluno = [
    { to: '/aluno', label: 'INÍCIO' },
    { to: '/aluno/turmas', label: 'TURMAS' },
    { to: '/aluno/resultado', label: 'RESULTADO' },
  ]

  const [atividades, setAtividades] = useState([
    {
      id: 1,
      titulo: 'ATIVIDADE 1',
      data: '01/05/2025 a 07/05/2025',
      descricao: 'ATIVIDADE DE REDAÇÃO - LÍNGUA PORTUGUESA',
      situacao: 'ENTREGUE',
      nota: 10,
      expandido: true,
    },
    {
      id: 2,
      titulo: 'ATIVIDADE 2',
      data: '01/05/2025 a 07/05/2025',
      descricao: '',
      situacao: 'PENDENTE',
      nota: null,
      expandido: false,
    },
  ])

  const toggleExpandir = (id) => {
    const novas = atividades.map((a) =>
      a.id === id ? { ...a, expandido: !a.expandido } : a
    )
    setAtividades(novas)
  }

  return (
    <div className="container-atividades-aluno">
      <Header links={linksAluno} />
      <div className="atividades-turmas-header">
        <h2>ATIVIDADE</h2>
        <BotaoSair tipoUsuario="aluno" />
      </div>

      <div className="atividades-turmas">
        {atividades.map((atividade) => (
          <div key={atividade.id} className="atividade-nota-card">
            <div className="atividade-topo" onClick={() => toggleExpandir(atividade.id)}>
              <div>
                <h3>{atividade.titulo}</h3>
                <p>DE {atividade.data}</p>
              </div>
              <span className="seta">
                {atividade.expandido ? '▲' : '▼'}
              </span>
            </div>

            {atividade.expandido && (
              <div className="atividade-detalhes">
                <div className="nota-status">
                  <div>
                    <p><strong>SITUAÇÃO</strong></p>
                    <p>{atividade.situacao}</p>
                  </div>
                  <div>
                    <p><strong>NOTA</strong></p>
                    <p>{atividade.nota !== null ? atividade.nota : '-'}</p>
                  </div>
                  <button
                    className="botao-ver-pdf"
                    onClick={() => alert(`Visualizar entrega de ${atividade.titulo}`)}
                  >
                    👁
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notas
